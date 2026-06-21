/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        elevated: 'rgb(var(--color-elevated) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        body: 'rgb(var(--color-body) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        hairline: 'rgb(var(--color-border) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          hover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
          weak: 'rgb(var(--color-accent-weak) / <alpha-value>)',
        },
        success: 'rgb(var(--color-success) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        kicker: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
        metric: ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        container: '1140px',
      },
      borderRadius: {
        md: '10px',
        lg: '14px',
      },
      boxShadow: {
        card: '0 1px 3px rgb(var(--shadow-rgb) / 0.08)',
        'card-hover': '0 4px 12px rgb(var(--shadow-rgb) / 0.12)',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0.0, 0.2, 1)',
        emphasis: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
