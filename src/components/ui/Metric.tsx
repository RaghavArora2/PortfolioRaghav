import CountUp from './CountUp';

interface MetricProps {
  value: string;
  label: string;
  size?: 'md' | 'sm';
}

const Metric = ({ value, label, size = 'md' }: MetricProps) => (
  <div>
    <CountUp
      value={value}
      className={`block font-mono font-semibold tabular-nums tracking-tight text-ink ${
        size === 'md' ? 'text-3xl sm:text-metric' : 'text-2xl sm:text-3xl'
      }`}
    />
    <div className="mt-3 h-0.5 w-8 rounded-full bg-accent/50" />
    <p className="mt-3 text-sm text-muted">{label}</p>
  </div>
);

export default Metric;
