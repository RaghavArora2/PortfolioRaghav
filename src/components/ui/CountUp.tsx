import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const CountUp = ({ value, className = '' }: { value: string; className?: string }) => {
  const reduce = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  const [n, setN] = useState(match ? 0 : target);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!match || reduce) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1000;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min((t - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [match, reduce, target]);

  if (!match || reduce) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
};

export default CountUp;
