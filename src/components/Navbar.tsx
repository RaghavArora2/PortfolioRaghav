import { useState, useEffect } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import ThemeToggle from './ThemeToggle';
import { NAV_LINKS, RESUME_URL } from '../lib/site';
import { openPortfolioZara } from '../lib/zaraClient';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 100;
      document.querySelectorAll('section[id]').forEach((section) => {
        const el = section as HTMLElement;
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.clientHeight) {
          setActiveSection(el.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-hairline bg-canvas/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Raghav Arora
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openPortfolioZara}
            className="hidden h-10 items-center gap-2 rounded-md border border-hairline px-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:bg-accent-weak sm:inline-flex"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            Ask Zara
          </button>
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href={RESUME_URL} external>
              Résumé
            </Button>
          </div>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-ink md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={openPortfolioZara}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-accent sm:hidden"
            aria-label="Ask Portfolio Zara"
          >
            <Sparkles className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="border-t border-hairline bg-canvas md:hidden">
          <Container className="flex flex-col py-4">
            {NAV_LINKS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`py-3 text-left text-base font-medium ${
                  activeSection === item.id ? 'text-ink' : 'text-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-3 border-t border-hairline pt-4">
              <Button href={RESUME_URL} external fullWidth>
                View Résumé
              </Button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
