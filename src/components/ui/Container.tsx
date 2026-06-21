import React from 'react';

const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-container px-4 sm:px-6 ${className}`}>{children}</div>
);

export default Container;
