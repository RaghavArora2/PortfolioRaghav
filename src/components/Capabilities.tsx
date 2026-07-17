import Section from './ui/Section';
import Reveal from './ui/Reveal';

const GROUPS = [
  {
    title: 'Program & Project Management',
    items: [
      'Stakeholder Management',
      'Requirement Gathering',
      'Requirements Documentation',
      'Agile Delivery',
      'Sprint Planning',
      'Roadmapping',
      'Cross-Functional Leadership',
    ],
  },
  {
    title: 'Operations & Process Improvement',
    items: ['SOP Creation', 'Escalation Management', 'Workflow Automation', 'Incident Management'],
  },
  {
    title: 'Technical Foundations',
    items: ['SQL', 'System Design', 'API Integrations', 'Redis', 'Database Design', 'Scalability'],
  },
  {
    title: 'AI Systems & Automation',
    items: [
      'LLM Orchestration & Routing',
      'RAG & Vector Search (pgvector)',
      'Knowledge Graphs',
      'AI Agents & Automation',
      'Web Scraping Pipelines (Playwright)',
      'Prompt Engineering',
      'AI-Assisted Delivery (Claude, Cursor)',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS (EC2, S3)', 'Docker', 'CI/CD', 'Deployment Pipelines'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Postman', 'MongoDB'],
  },
];

const Capabilities = () => (
  <Section
    id="capabilities"
    number="05"
    kicker="Capabilities"
    title="How I run delivery and operations"
    band
  >
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {GROUPS.map((group, i) => (
        <Reveal key={group.title} delay={i * 0.05}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">{group.title}</h3>
          <div className="mt-3 h-px w-10 bg-accent/40" />
          <ul className="mt-4 space-y-2">
            {group.items.map((item) => (
              <li key={item} className="text-sm text-body">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Capabilities;
