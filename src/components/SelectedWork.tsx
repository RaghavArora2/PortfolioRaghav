import { ArrowUpRight, Send, Lock } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import { CONTACT } from '../lib/site';

type ProjectLink = {
  label: string;
  href: string;
  icon: typeof ArrowUpRight;
};

type Project = {
  name: string;
  image?: string;
  imageAlt?: string;
  pain: string;
  system: string;
  mechanism: string;
  whyHiring: string;
  whyClient: string;
  stack: string[];
  links: ProjectLink[];
  status?: string;
};

// Flagship: leads the section. Live + Telegram are the only public, verified surfaces.
const FLAGSHIP: Project = {
  name: 'Zara — a private AI second brain',
  image: '/work/zara.png',
  imageAlt: 'Zara / God’s Brain landing page — “She remembers, so you can think”',
  pain: 'Context dies across WhatsApp, meetings, email, and notes. Cloud chatbots can’t act on your actual machine, and “I’ll remember that” never becomes a task.',
  system:
    'A private second brain and companion — not a chatbot in a tab. It captures notes, voice, email, and meetings, answers from my own data with citations, and acts across web, Telegram, and a laptop agent.',
  mechanism:
    'Capture flows into embeddings and a knowledge graph in Postgres/pgvector; a FastAPI core reasons over it with hybrid search and logs why it acted, while a laptop agent handles the browser, files, lock, and screenshots that cloud bots can’t reach.',
  whyHiring:
    'Systems thinking, product ownership, and ops discipline — the whole suite runs on a ~$1/mo API class plus a small EC2, with heavy work pushed to the laptop.',
  whyClient:
    'Proof I can design and ship real AI architecture end to end — ingestion, retrieval, agents, and deployment — not a demo.',
  stack: [
    'Python / FastAPI',
    'Postgres + pgvector',
    'Next.js',
    'OpenAI + Gemini',
    'Telegram',
    'Laptop agent',
    'AWS EC2',
    'Caddy',
  ],
  links: [
    { label: 'godsbrain.duckdns.org', href: 'https://godsbrain.duckdns.org', icon: ArrowUpRight },
    { label: '@GodsBrainBot', href: 'https://t.me/GodsBrainBot', icon: Send },
  ],
};

const FEATURED: Project[] = [
  {
    name: 'Commit OS',
    image: '/work/commitos.png',
    imageAlt: 'Commit OS dashboard — tasks, stats, and morning brief',
    pain: 'Almost every important commitment lives inside a conversation — then quietly gets forgotten.',
    system:
      'A personal AI OS that syncs WhatsApp through a local agent, extracts commitments with AI, and turns them into a searchable knowledge base with tasks and morning briefs.',
    mechanism:
      'Messages stay the source of truth; tasks and knowledge are regeneratable, derived artifacts. Privacy by design — the sync agent runs locally.',
    whyHiring: 'Shows I turn messy human communication into reliable, trackable execution.',
    whyClient: 'A pattern for any inbox-to-action workflow — capture, classify, and surface what matters.',
    stack: ['Next.js', 'Fastify', 'Prisma', 'Postgres + pgvector', 'Playwright', 'Gemini'],
    links: [
      {
        label: 'godsbrain.duckdns.org/commitos',
        href: 'https://godsbrain.duckdns.org/commitos',
        icon: ArrowUpRight,
      },
    ],
    status: 'Live in the God’s Brain suite · sign-in required',
  },
  {
    name: 'Job Hunter AI',
    image: '/work/job-hunter.png',
    imageAlt: 'Job Hunter AI dashboard — scored matches and scraping pipeline',
    pain: 'Job search is noisy, manual, and biased toward spray-and-pray.',
    system:
      'A multi-board pipeline that scrapes YC, Wellfound, Naukri, and LinkedIn, scores roles with a hybrid rule + AI model, enforces shortlist diversity, and tracks applications with feedback learning.',
    mechanism:
      'Rules pre-screen, AI re-ranks; the tracker learns from feedback and tailors résumés from a master LaTeX — never inventing experience.',
    whyHiring: 'Systems design for a painful workflow — an operator who automates his own ops.',
    whyClient: 'Reusable scraping, ranking, and CRM-style tracking I can build for any pipeline.',
    stack: ['Python', 'FastAPI', 'Playwright', 'React / Vite', 'Gemini + OpenAI', 'LaTeX'],
    links: [
      {
        label: 'godsbrain.duckdns.org/job-hunter',
        href: 'https://godsbrain.duckdns.org/job-hunter/',
        icon: ArrowUpRight,
      },
    ],
    status: 'Live in the God’s Brain suite · sign-in required',
  },
  {
    name: 'LinkedIn Growth AI',
    pain: 'Personal brand growth is inconsistent, generic, and easy to fake.',
    system:
      'A content-ops pipeline: research → opportunity finding → scoring → post generation → hashtags/SEO → preview → publish.',
    mechanism:
      'Credibility over virality — it writes in a builder tone from a real knowledge base and never fabricates achievements.',
    whyHiring: 'Repeatable content operations, built with the same discipline as delivery work.',
    whyClient: 'Content ops for founders and operators who hate posting but need to show up.',
    stack: ['FastAPI', 'SQLAlchemy', 'React', 'Vite', 'Gemini / OpenRouter'],
    links: [],
    status: 'Private · architecture case study',
  },
];

const DELIVERY = [
  {
    title: 'White-label platform delivery',
    context: 'WellnessZ',
    body: 'Oversaw delivery, deployment, and operational support for 100+ white-label web and mobile applications across healthcare and wellness.',
  },
  {
    title: 'Independent client delivery',
    context: 'Freelance',
    body: 'Delivered 100+ websites and applications across healthcare, wellness, retail, and local business — owning requirements through launch.',
  },
];

const StackChips = ({ stack }: { stack: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {stack.map((t) => (
      <span
        key={t}
        className="rounded-md border border-hairline bg-accent-weak px-2 py-0.5 font-mono text-xs text-ink"
      >
        {t}
      </span>
    ))}
  </div>
);

const SelectedWork = () => (
  <Section
    id="work"
    number="06"
    kicker="Selected work"
    title="Systems I’ve shipped to remove pain"
    subtitle="I don’t collect side projects. I build operating systems for problems that waste my time — then productize the pattern."
  >
    {/* Flagship — full-width case story */}
    <Reveal>
      <Card accentTop className="p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-3 font-mono text-kicker uppercase text-accent">Flagship</p>
            <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {FLAGSHIP.name}
            </h3>
            <p className="mt-4 leading-relaxed text-body">{FLAGSHIP.pain}</p>
            <p className="mt-4 leading-relaxed text-body">{FLAGSHIP.system}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{FLAGSHIP.mechanism}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The suite also runs Commit OS and Job Hunter as embedded apps.
            </p>
          </div>

          <div className="lg:col-span-5">
            {FLAGSHIP.image && (
              <div className="mb-6 overflow-hidden rounded-md border border-hairline shadow-card">
                <img
                  src={FLAGSHIP.image}
                  alt={FLAGSHIP.imageAlt}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover object-top"
                />
              </div>
            )}
            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                  For hiring managers
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-body">{FLAGSHIP.whyHiring}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                  For clients
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-body">{FLAGSHIP.whyClient}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <StackChips stack={FLAGSHIP.stack} />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              {FLAGSHIP.links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
                  >
                    <Icon className="h-4 w-4" /> {l.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </Reveal>

    {/* Supporting systems */}
    <div className="mt-6 grid gap-5 lg:grid-cols-3">
      {FEATURED.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.06}>
          <Card interactive className="flex h-full flex-col p-6">
            {p.image && (
              <div className="mb-5 overflow-hidden rounded-md border border-hairline">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover object-top"
                />
              </div>
            )}
            <h3 className="text-lg font-semibold tracking-tight text-ink">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">{p.pain}</p>
            <p className="mt-3 text-sm leading-relaxed text-body">{p.system}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.mechanism}</p>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Why it matters
              </p>
              <p className="mt-1 text-sm leading-relaxed text-body">{p.whyClient}</p>
            </div>

            <div className="mt-auto pt-5">
              <StackChips stack={p.stack} />
              {(p.links.length > 0 || p.status) && (
                <div className="mt-4 flex flex-col gap-2 text-xs">
                  {p.links.map((l) => {
                    const Icon = l.icon;
                    return (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
                      >
                        <Icon className="h-3.5 w-3.5" /> {l.label}
                      </a>
                    );
                  })}
                  {p.status && (
                    <span className="inline-flex items-center gap-1.5 text-muted">
                      {p.links.length > 0 ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      ) : (
                        <Lock className="h-3.5 w-3.5" />
                      )}
                      {p.status}
                    </span>
                  )}
                </div>
              )}
            </div>
          </Card>
        </Reveal>
      ))}
    </div>

    {/* Delivery proof — professional anchor */}
    <Reveal delay={0.1}>
      <div className="mt-12">
        <h3 className="font-mono text-kicker uppercase text-muted">Delivery at scale</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {DELIVERY.map((d) => (
            <Card key={d.title} className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-semibold text-ink">{d.title}</h4>
                <span className="font-mono text-xs text-muted">{d.context}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-body">{d.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </Reveal>

    <Reveal delay={0.15}>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hairline pt-6 text-sm text-muted">
        <span className="font-mono text-xs uppercase tracking-wide">Earlier work</span>
        <a href="https://github.com/RaghavArora2/VideoChatApplication" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
          Video Chat App
        </a>
        <a href="https://cryptotradeplat.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
          Crypto Trading UI
        </a>
        <a href="https://github.com/RaghavArora2/Market-Dashboard-Project-in-Power-BI" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
          Market Dashboard
        </a>
        <a href="https://avedhaneanuchintan.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
          AvedhaneAnuchintan
        </a>
      </div>
    </Reveal>

    <Reveal delay={0.2}>
      <div className="mt-8">
        <Button href={CONTACT.github} external variant="tertiary">
          View GitHub →
        </Button>
      </div>
    </Reveal>
  </Section>
);

export default SelectedWork;
