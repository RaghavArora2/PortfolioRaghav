import { Mail, Linkedin, Github, MapPin, Phone, FileText } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import { CONTACT, RESUME_URL } from '../lib/site';

const CHANNELS = [
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: CONTACT.linkedinLabel, href: CONTACT.linkedin },
  { icon: Github, label: 'GitHub', value: CONTACT.githubLabel, href: CONTACT.github },
  { icon: Phone, label: 'Phone', value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: FileText, label: 'Résumé', value: 'View résumé (PDF)', href: RESUME_URL },
  { icon: MapPin, label: 'Location', value: CONTACT.location },
];

const Contact = () => (
  <Section
    id="contact"
    number="07"
    kicker="Contact"
    title="Let's talk about delivery and operations"
    subtitle="Open to Technical Project Manager and Program Manager roles."
  >
    <Reveal>
      <p className="max-w-xl text-body">The fastest way to reach me is email or LinkedIn.</p>
      <p className="mt-3 max-w-xl text-sm text-muted">
        Also available for selective freelance: product delivery, ops automation, and custom AI
        systems.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button href={`mailto:${CONTACT.email}`} size="lg">
          <Mail className="h-4 w-4" />
          Email Raghav
        </Button>
        <Button href={CONTACT.linkedin} external variant="secondary" size="lg">
          <Linkedin className="h-4 w-4" />
          Connect on LinkedIn
        </Button>
      </div>
    </Reveal>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {CHANNELS.map((c, i) => {
        const Icon = c.icon;
        const content = (
          <Card className="flex items-center gap-4 p-4" interactive={!!c.href}>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-accent">
              <Icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs text-muted">{c.label}</span>
              <span className="block text-sm font-medium text-ink">{c.value}</span>
            </span>
          </Card>
        );
        return (
          <Reveal key={c.label} delay={i * 0.04}>
            {c.href ? (
              <a
                href={c.href}
                {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="block"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Contact;
