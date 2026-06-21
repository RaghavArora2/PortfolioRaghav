import React from 'react';
import Container from './Container';
import Reveal from './Reveal';

interface SectionProps {
  id: string;
  number?: string;
  kicker?: string;
  title?: string;
  subtitle?: string;
  band?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Section = ({
  id,
  number,
  kicker,
  title,
  subtitle,
  band = false,
  children,
  className = '',
}: SectionProps) => (
  <section
    id={id}
    className={`py-14 sm:py-16 lg:py-[88px] ${band ? 'bg-surface' : 'bg-canvas'} ${className}`}
  >
    <Container>
      {(kicker || title || subtitle) && (
        <Reveal className="mb-8 sm:mb-10">
          {(number || kicker) && (
            <p className="mb-3 font-mono text-kicker uppercase text-muted">
              {number && <span className="text-accent">{number}</span>}
              {number && kicker && <span className="mx-2 text-hairline">/</span>}
              {kicker}
            </p>
          )}
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          )}
          {subtitle && <p className="mt-3 max-w-2xl text-body">{subtitle}</p>}
        </Reveal>
      )}
      {children}
    </Container>
  </section>
);

export default Section;
