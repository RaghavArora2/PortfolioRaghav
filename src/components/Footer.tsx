import { ArrowUp } from 'lucide-react';
import Container from './ui/Container';
import { CONTACT, RESUME_URL, ROLES_OPEN_TO } from '../lib/site';

const Footer = () => {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-hairline bg-canvas py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display font-bold text-ink">Raghav Arora — Technical Project Manager</p>
          <p className="mt-1 text-sm text-muted">{CONTACT.location}</p>
          <p className="mt-1 text-sm text-muted">Open to {ROLES_OPEN_TO} roles.</p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <div className="flex flex-wrap gap-4 text-sm">
            <a href={`mailto:${CONTACT.email}`} className="text-muted hover:text-ink">
              Email
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
              LinkedIn
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
              GitHub
            </a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
              Résumé (PDF)
            </a>
          </div>
          <button
            onClick={toTop}
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowUp className="h-4 w-4" /> Back to top
          </button>
          <p className="text-xs text-muted">© {new Date().getFullYear()} Raghav Arora</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
