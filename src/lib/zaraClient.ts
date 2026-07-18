export const OPEN_PORTFOLIO_ZARA = 'portfolio-zara:open';

export function openPortfolioZara() {
  window.dispatchEvent(new Event(OPEN_PORTFOLIO_ZARA));
}

export async function askPortfolioZara(message: string, signal?: AbortSignal): Promise<string> {
  const response = await fetch('/api/zara/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
    signal,
  });
  const data = (await response.json().catch(() => ({}))) as { answer?: string; error?: string };
  if (!response.ok || !data.answer) {
    throw new Error(data.error || 'Portfolio Zara is unavailable right now.');
  }
  return data.answer;
}

