import { Github, ExternalLink } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import { CONTACT } from '../lib/site';

// NOTE: This section can be commented out later. Projects retained per request.
const PROJECTS = [
  {
    title: 'Video Chat App',
    summary: 'Real-time video calling with multi-participant sessions and chat.',
    tech: ['Spring Boot', 'WebRTC', 'ZegoCloud'],
    github: 'https://github.com/RaghavArora2/VideoChatApplication',
  },
  {
    title: 'Market Dashboard (Power BI)',
    summary: 'Financial analytics dashboard for ETFs, crypto, and equities.',
    tech: ['Power BI', 'Python', 'DAX'],
    github: 'https://github.com/RaghavArora2/Market-Dashboard-Project-in-Power-BI',
  },
  {
    title: 'AvedhaneAnuchintan',
    summary: 'Therapy and counseling platform with appointment scheduling.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://avedhaneanuchintan.netlify.app/',
    github: 'https://github.com/RaghavArora2/AvedhaneAnuchintan',
  },
  {
    title: 'CryptoTrading Platform',
    summary: 'Lightweight crypto trading interface with live market data.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://cryptotradeplat.netlify.app/',
    github: 'https://github.com/RaghavArora2/CryptocurrencyPlatform',
  },
];

const SelectedWork = () => (
  <Section
    id="work"
    number="06"
    kicker="Selected work"
    title="Delivery in practice"
    subtitle="Concrete delivery — technical depth in support of the role."
  >
    <Reveal>
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <Card className="p-5">
          <h3 className="font-semibold text-ink">White-label platform delivery</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Oversaw delivery, deployment, and operational support for 100+ white-label web and mobile
            applications across healthcare and wellness at WellnessZ.
          </p>
        </Card>
        <Card className="p-5">
          <h3 className="font-semibold text-ink">Independent client delivery</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Delivered 100+ websites and applications across healthcare, wellness, retail, and local
            business as a freelancer — owning requirements through launch.
          </p>
        </Card>
      </div>
    </Reveal>

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {PROJECTS.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.05}>
          <Card interactive className="flex h-full flex-col p-5">
            <h3 className="font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-hairline bg-accent-weak px-2 py-0.5 text-xs text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Demo
                </a>
              )}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-ink"
              >
                <Github className="h-3.5 w-3.5" /> Code
              </a>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>

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
