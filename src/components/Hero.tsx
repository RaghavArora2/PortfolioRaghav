import { Download, ArrowDown } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import CountUp from './ui/CountUp';
import { RESUME_URL } from '../lib/site';

const PROOF = [
  { value: '12+', label: 'engineers led' },
  { value: '10k+', label: 'users' },
  { value: '25+', label: 'features shipped' },
  { value: '200+', label: 'deployments' },
  { value: '100+', label: 'apps delivered' },
];

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-canvas pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20"
    >
      {/* Subtle texture + soft accent glow (no particles / no cosmic) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-4 font-mono text-kicker uppercase text-muted">
                Technical Project Manager · Startup Operator
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Raghav Arora
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
                Technical Project Manager at WellnessZ. I lead 12+ engineers across backend,
                frontend, mobile, QA, and DevOps to ship product for a platform serving 10k+ users.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                I grew from customer success and operations into technical project management — so I
                own delivery end to end and work directly with founders and enterprise clients. I
                also build the AI workflows and automation that keep delivery honest.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={RESUME_URL} external size="lg">
                  <Download className="h-4 w-4" />
                  View Résumé
                </Button>
                <Button variant="secondary" size="lg" onClick={() => scrollTo('contact')}>
                  Get in touch
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-success" />
                Open to Technical Project Manager &amp; Program Manager roles
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative mx-auto w-full max-w-[300px] lg:ml-auto lg:mr-0">
                {/* layered offset panel for depth */}
                <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-lg border border-hairline bg-surface" />
                <img
                  src="/profile.png"
                  alt="Raghav Arora"
                  loading="eager"
                  className="aspect-[4/5] w-full rounded-lg border border-hairline object-cover object-top shadow-card"
                />
                <div className="mt-4 text-center lg:text-left">
                  <p className="font-display font-semibold text-ink">Raghav Arora</p>
                  <p className="text-sm text-muted">Technical Project Manager · Noida, India</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Full-width proof bar */}
        <Reveal delay={0.3}>
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-3 lg:grid-cols-5">
            {PROOF.map((m) => (
              <div key={m.label}>
                <CountUp
                  value={m.value}
                  className="block font-mono text-2xl font-semibold tabular-nums tracking-tight text-ink sm:text-3xl"
                />
                <dd className="mt-1 text-sm text-muted">{m.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.35}>
          <button
            onClick={() => scrollTo('impact')}
            className="mt-12 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowDown className="h-4 w-4" />
            See the impact
          </button>
        </Reveal>
      </Container>
    </section>
  );
};

export default Hero;
