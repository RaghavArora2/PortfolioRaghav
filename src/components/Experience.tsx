import { Download } from 'lucide-react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import { RESUME_URL } from '../lib/site';

const ROLES = [
  {
    title: 'Technical Project Manager',
    org: 'WellnessZ',
    date: 'Oct 2025 – Present',
    bullets: [
      'Led a cross-functional team of 12+ engineers (backend, frontend, mobile, QA, DevOps) for a health-tech platform serving 10k+ users.',
      'Owned end-to-end delivery of 25+ features, from requirement gathering and prioritization through deployment and post-release support.',
      'Defined roadmaps directly with founders and enterprise clients, aligning execution with business goals and technical constraints.',
      'Served as the primary escalation point for production and customer-facing issues, coordinating engineering and support to timely resolution.',
      'Coordinated 200+ production deployments across web, backend, and mobile, improving release reliability through structured staging and testing.',
      'Oversaw delivery and operational support for 100+ white-label web and mobile apps across healthcare and wellness.',
      'Managed onboarding, escalations, and delivery across 200+ client engagements.',
    ],
  },
  {
    title: 'Head of Operations',
    org: 'WellnessZ',
    date: 'Jul 2025 – Oct 2025',
    bullets: [
      'Designed and implemented SOPs, workflows, and accountability frameworks across multiple business functions.',
      'Built automation, reporting, and tracking systems with Google Sheets and Apps Script, reducing manual effort.',
      'Created escalation frameworks across Customer Success, Product, and Engineering.',
      'Monitored operational KPIs and resolved 30+ production issues monthly.',
      'Collaborated directly with founders on operational scaling, retention, and process optimization.',
    ],
  },
  {
    title: 'Web Development & Client Delivery',
    org: 'Freelance',
    date: 'Jan 2023 – Present',
    note: 'long-running delivery track',
    bullets: [
      'Delivered 100+ websites and applications across healthcare, wellness, retail, and local business.',
      'Managed requirements, planning, stakeholder communication, and delivery across concurrent engagements.',
      'Built long-term client relationships through iterative, business-focused delivery.',
    ],
  },
];

const Experience = () => (
  <Section
    id="experience"
    number="04"
    kicker="Experience"
    subtitle="Progressive ownership of delivery and operations."
  >
    <div className="border-l border-hairline pl-6 sm:pl-8">
      {ROLES.map((role, i) => (
        <Reveal key={role.title} delay={i * 0.05}>
          <div className={`relative ${i === ROLES.length - 1 ? '' : 'pb-12'}`}>
            <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-accent sm:-left-[39px]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-ink">
                {role.title} <span className="text-accent">— {role.org}</span>
              </h3>
              <span className="font-mono text-sm text-muted">{role.date}</span>
            </div>
            {role.note && <p className="mt-0.5 text-xs italic text-muted">{role.note}</p>}
            <ul className="mt-4 space-y-2.5">
              {role.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed text-body">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.2}>
      <div className="mt-10">
        <Button href={RESUME_URL} external variant="secondary">
          <Download className="h-4 w-4" />
          Download résumé
        </Button>
      </div>
    </Reveal>
  </Section>
);

export default Experience;
