import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

const ARC = ['BDE', 'Customer Success', 'Operations', 'Technical Project Manager'];

const PILLARS = [
  {
    title: 'Delivery Ownership',
    body: '25+ features shipped end-to-end, from requirements through deployment and support.',
  },
  {
    title: 'Cross-functional Leadership',
    body: '12+ engineers across backend, frontend, mobile, QA, and DevOps.',
  },
  {
    title: 'Reliable Delivery & Operations',
    body: '200+ deployments, SOPs, and 30+ production issues resolved each month.',
  },
];

const About = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <Section
      id="about"
      number="03"
      kicker="About"
      title="From the front lines to delivery leadership"
      subtitle="A technical project manager who grew up through the business."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-body leading-relaxed">
              My path ran from business development to customer success to operations to technical
              project management. That arc means I lead delivery with full business context — I
              understand the customer, the operation, and the engineering it takes to ship. At
              WellnessZ I coordinate cross-functional teams, align roadmaps with founders and
              enterprise clients, and keep delivery reliable in a fast-paced startup.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {ARC.map((step, i) => (
                <React.Fragment key={step}>
                  <span className="rounded-md border border-hairline bg-surface px-3 py-1.5 font-mono text-xs text-ink">
                    {step}
                  </span>
                  {i < ARC.length - 1 && <span className="text-muted">→</span>}
                </React.Fragment>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 text-sm text-muted">
              B.Tech, Computer Science &amp; Engineering — Guru Nanak Dev University (2021–2025)
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6">
              <Button variant="tertiary" onClick={() => scrollTo('experience')}>
                View experience →
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="space-y-4 lg:col-span-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <Card className="p-5">
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{p.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
