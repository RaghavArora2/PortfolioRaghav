import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Metric from './ui/Metric';

const METRICS = [
  { value: '10k+', label: 'users served' },
  { value: '12+', label: 'engineers led (5 functions)' },
  { value: '25+', label: 'features delivered end-to-end' },
  { value: '200+', label: 'production deployments coordinated' },
  { value: '100+', label: 'white-label apps delivered' },
  { value: '200+', label: 'client engagements managed' },
  { value: '30+', label: 'production issues resolved / month' },
];

const ImpactMetrics = () => (
  <Section
    id="impact"
    number="01"
    kicker="Impact at a glance"
    subtitle="Delivery and operations scope at WellnessZ."
    band
  >
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
      {METRICS.map((m, i) => (
        <Reveal key={m.label} delay={i * 0.04}>
          <Metric value={m.value} label={m.label} />
        </Reveal>
      ))}
    </div>
  </Section>
);

export default ImpactMetrics;
