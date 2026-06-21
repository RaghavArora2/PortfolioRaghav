import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  accentTop?: boolean;
}

const Card = ({ children, className = '', interactive = false, accentTop = false }: CardProps) => (
  <div
    className={`rounded-md border border-hairline bg-elevated shadow-card transition-all duration-200 ease-standard ${
      accentTop ? 'border-t-2 border-t-accent' : ''
    } ${interactive ? 'hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover' : ''} ${className}`}
  >
    {children}
  </div>
);

export default Card;
