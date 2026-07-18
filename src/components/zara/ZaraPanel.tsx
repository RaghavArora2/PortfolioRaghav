import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowUp, Bot, LockKeyhole, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { askPortfolioZara, OPEN_PORTFOLIO_ZARA } from '../../lib/zaraClient';

type Message = { role: 'assistant' | 'user'; content: string };

const STARTERS = [
  'What kind of roles is Raghav looking for?',
  'Tell me about his AI projects.',
  'What has he shipped at WellnessZ?',
];

const WELCOME: Message = {
  role: 'assistant',
  content:
    "Hi — I’m Portfolio Zara. Ask me about Raghav’s public résumé, experience, skills, or projects. I’m intentionally separate from his private AI and personal data.",
};

export default function ZaraPanel() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(OPEN_PORTFOLIO_ZARA, show);
    return () => window.removeEventListener(OPEN_PORTFOLIO_ZARA, show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => () => controllerRef.current?.abort(), []);

  async function submit(value: string) {
    const question = value.trim();
    if (!question || loading) return;
    setInput('');
    setMessages((current) => [...current, { role: 'user', content: question }]);
    setLoading(true);
    const controller = new AbortController();
    controllerRef.current = controller;
    try {
      const answer = await askPortfolioZara(question, controller.signal);
      setMessages((current) => [...current, { role: 'assistant', content: answer }]);
    } catch (error) {
      if (!controller.signal.aborted) {
        setMessages((current) => [
          ...current,
          {
            role: 'assistant',
            content: error instanceof Error ? error.message : 'I’m unavailable right now. Please try again.',
          },
        ]);
      }
    } finally {
      setLoading(false);
      controllerRef.current = null;
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void submit(input);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close Portfolio Zara"
            className="fixed inset-0 z-[70] bg-canvas/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-zara-title"
            className="fixed inset-x-0 bottom-0 z-[80] flex max-h-[88dvh] flex-col rounded-t-2xl border border-hairline bg-elevated shadow-2xl sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-[440px] sm:rounded-none sm:border-y-0 sm:border-r-0"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          >
            <header className="flex items-start justify-between gap-4 border-b border-hairline px-5 py-4">
              <div className="flex gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    Public portfolio guide
                  </p>
                  <h2 id="portfolio-zara-title" className="mt-0.5 text-lg font-semibold">
                    Ask Zara
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-muted transition-colors hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div className="border-b border-hairline bg-accent-weak px-5 py-2.5 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <LockKeyhole className="h-3.5 w-3.5 text-success" />
                Public résumé facts only · no private memory or account access
              </span>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-5">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex gap-2.5 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.role === 'assistant' && (
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-hairline bg-surface text-accent">
                        <Bot className="h-4 w-4" />
                      </span>
                    )}
                    <p
                      className={`max-w-[82%] whitespace-pre-wrap rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        message.role === 'user'
                          ? 'bg-accent text-white'
                          : 'border border-hairline bg-surface text-body'
                      }`}
                    >
                      {message.content}
                    </p>
                  </div>
                ))}
                {messages.length === 1 && (
                  <div className="ml-9 flex flex-wrap gap-2">
                    {STARTERS.map((starter) => (
                      <button
                        key={starter}
                        type="button"
                        onClick={() => void submit(starter)}
                        className="rounded-full border border-hairline px-3 py-1.5 text-left text-xs text-muted transition-colors hover:border-accent hover:text-ink"
                      >
                        {starter}
                      </button>
                    ))}
                  </div>
                )}
                {loading && (
                  <div className="ml-9 inline-flex items-center gap-1 rounded-xl border border-hairline bg-surface px-3.5 py-3">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted"
                        style={{ animationDelay: `${dot * 120}ms` }}
                      />
                    ))}
                  </div>
                )}
                <div ref={endRef} />
              </div>
            </div>

            <form onSubmit={onSubmit} className="border-t border-hairline bg-elevated p-4">
              <div className="flex items-center gap-2 rounded-xl border border-hairline bg-canvas p-1.5 focus-within:border-accent">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value.slice(0, 600))}
                  placeholder="Ask about experience, skills, or projects…"
                  maxLength={600}
                  disabled={loading}
                  className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-sm text-ink outline-none placeholder:text-muted"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  aria-label="Send question"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-muted">
                Stateless session. Questions are not saved by this site.
              </p>
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

