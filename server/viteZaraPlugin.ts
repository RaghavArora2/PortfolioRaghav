import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';
import { answerPortfolioQuestion, MemoryRateLimiter } from './zaraService';

const limiter = new MemoryRateLimiter();
const MAX_BODY_BYTES = 2_048;

function send(res: ServerResponse, status: number, body: object, extraHeaders: Record<string, string> = {}) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'no-referrer');
  for (const [name, value] of Object.entries(extraHeaders)) res.setHeader(name, value);
  res.end(JSON.stringify(body));
}

async function readJson(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of req) {
    const value = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) throw new Error('too_large');
    chunks.push(value);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function requestIp(req: IncomingMessage): string {
  const forwarded = req.headers['x-forwarded-for'];
  const first = Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(',')[0];
  return first?.trim() || req.socket.remoteAddress || 'unknown';
}

export function portfolioZaraPlugin(): Plugin {
  return {
    name: 'portfolio-zara-local-api',
    configureServer(server) {
      server.middlewares.use('/api/zara/chat', async (req, res) => {
        if (req.method !== 'POST') {
          send(res, 405, { error: 'Method not allowed.' }, { Allow: 'POST' });
          return;
        }
        if (!req.headers['content-type']?.toLowerCase().startsWith('application/json')) {
          send(res, 415, { error: 'Content-Type must be application/json.' });
          return;
        }

        const origin = req.headers.origin;
        const host = req.headers.host;
        if (origin && host && new URL(origin).host !== host) {
          send(res, 403, { error: 'Cross-origin requests are not allowed.' });
          return;
        }

        const limit = limiter.check(requestIp(req));
        if (!limit.allowed) {
          send(
            res,
            429,
            { error: 'Too many questions. Please try again later.' },
            { 'Retry-After': String(limit.retryAfter) },
          );
          return;
        }

        let body: unknown;
        try {
          body = await readJson(req);
        } catch {
          send(res, 400, { error: 'Invalid request.' });
          return;
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15_000);
        const result = await answerPortfolioQuestion({
          message: (body as { message?: unknown } | null)?.message,
          apiKey: process.env.OPENAI_API_KEY,
          signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!result.ok) {
          send(res, result.status, { error: result.error });
          return;
        }
        send(res, 200, { answer: result.answer });
      });
    },
  };
}

