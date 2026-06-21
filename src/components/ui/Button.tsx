import React from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Size = 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
  download?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-sans font-semibold transition-colors duration-150 ease-standard focus-visible:outline-none';

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-[52px] px-6 text-base',
};

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-hover active:translate-y-px dark:text-canvas',
  secondary:
    'border border-hairline text-ink hover:border-accent hover:bg-accent-weak active:translate-y-px',
  tertiary: 'text-accent hover:underline underline-offset-4 px-0 h-auto',
};

const Button = (props: ButtonProps) => {
  const { variant = 'primary', size = 'md', fullWidth, className = '', children } = props;
  const sizeClass = variant === 'tertiary' ? '' : sizes[size];
  const classes = `${base} ${sizeClass} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if ('href' in props && props.href !== undefined) {
    const { href, external, download } = props;
    return (
      <a
        href={href}
        className={classes}
        {...(download ? { download: true } : {})}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  const { onClick, type = 'button' } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
