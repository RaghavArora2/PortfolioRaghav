import { createHash } from 'node:crypto';
import type { Handler, HandlerEvent } from '@netlify/functions';
import {
  answerPortfolioQuestion,
  MemoryRateLimiter,
  RATE_LIMIT_MAX,
  RATE_LIMIT_WINDOW_MS,
} from '../../server/zaraService';

const memoryLimiter = new MemoryRateLimiter();
const WINDOW_SECONDS = Math.floor(RATE_LIMIT_WINDOW_MS / 1_000);

function header(event: HandlerEvent, name: string): string {
  const value = event.headers[name] ?? event.headers[name.toLowerCase()];
  return value || '';
}

function clientKey(event: HandlerEvent): string {
  const raw =
    header(event, 'x-nf-client-connection-ip') ||
    header(event, 'x-forwarded-for').split(',')[0]?.trim() ||
    'unknown';
  return createHash('sha256').update(raw).digest('hex').slice(0, 24);
}

async function rateLimit(key: string): Promise<{ allowed: boolean; retryAfter: number }> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return memoryLimiter.check(key);

  const bucket = Math.floor(Date.now() / (WINDOW_SECONDS * 1_000));
  const redisKey = `portfolio-zara:${key}:${bucket}`;
  const response = await fetch(`${url}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify([
      ['INCR', redisKey],
      ['EXPIRE', redisKey, WINDOW_SECONDS],
    ]),
  });
  if (!response.ok) return memoryLimiter.check(key);
  const values = (await response.json()) as Array<{ result?: number }>;
  const count = Number(values[0]?.result || 0);
  return { allowed: count <= RATE_LIMIT_MAX, retryAfter: WINDOW_SECONDS };
}

function json(statusCode: number, body: object, extra: Record<string, string> = {}) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'no-referrer',
      ...extra,
    },
    body: JSON.stringify(body),
  };
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed.' }, { Allow: 'POST' });
  }
  if (!header(event, 'content-type').toLowerCase().startsWith('application/json')) {
    return json(415, { error: 'Content-Type must be application/json.' });
  }

  const allowedOrigin = process.env.PORTFOLIO_ORIGIN;
  const origin = header(event, 'origin');
  if (!allowedOrigin) {
    return json(503, { error: 'Portfolio Zara is not configured yet.' });
  }
  if (origin && origin !== allowedOrigin) {
    return json(403, { error: 'Cross-origin requests are not allowed.' });
  }

  const rate = await rateLimit(clientKey(event));
  if (!rate.allowed) {
    return json(
      429,
      { error: 'Too many questions. Please try again later.' },
      { 'Retry-After': String(rate.retryAfter) },
    );
  }

  let message: unknown;
  try {
    message = JSON.parse(event.body || '{}')?.message;
  } catch {
    return json(400, { error: 'Invalid request.' });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  const result = await answerPortfolioQuestion({
    message,
    apiKey: process.env.OPENAI_API_KEY,
    signal: controller.signal,
  });
  clearTimeout(timeout);

  if (!result.ok) return json(result.status, { error: result.error });
  return json(200, { answer: result.answer });
};
