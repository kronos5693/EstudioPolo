import { useCounter } from '../hooks';

export function Counter({ target, suffix = '', label }) {
  const { ref, count } = useCounter(target);

  return (
    <div ref={ref} className="stat">
      <div className="stat__number" aria-label={`${count}${suffix} ${label}`}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="stat__label" aria-hidden="true">{label}</div>
    </div>
  );
}
