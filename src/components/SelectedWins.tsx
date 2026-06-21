import Section from './ui/Section';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

const WINS = [
  {
    title: 'Owned delivery for a 10k+ user platform',
    role: 'TPM, WellnessZ',
    body: 'Shipped 25+ features end to end — requirements, prioritization, deployment, and post-release support.',
  },
  {
    title: 'Made releases reliable at scale',
    role: 'TPM, WellnessZ',
    body: 'Coordinated 200+ production deployments across web, backend, and mobile, improving reliability through structured staging and testing.',
  },
  {
    title: 'Built the cross-team escalation system',
    role: 'Head of Operations, WellnessZ',
    body: 'Created escalation frameworks across Customer Success, Product, and Engineering and resolved 30+ production issues monthly.',
  },
];

const SelectedWins = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <Section id="wins" number="02" kicker="Selected wins" subtitle="How I operate, in three outcomes.">
      <div className="grid gap-5 md:grid-cols-3">
        {WINS.map((win, i) => (
          <Reveal key={win.title} delay={i * 0.06}>
            <Card className="h-full p-6">
              <p className="mb-3 font-mono text-kicker uppercase text-accent">{win.role}</p>
              <h3 className="text-lg font-semibold leading-snug text-ink">{win.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{win.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-8">
          <Button variant="tertiary" onClick={() => scrollTo('experience')}>
            See full experience →
          </Button>
        </div>
      </Reveal>
    </Section>
  );
};

export default SelectedWins;
