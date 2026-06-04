import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Animation variants (shared) ──────────────────────────────
export const fadeInUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export const staggerContainer = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// ─── AnimatedSection ──────────────────────────────────────────
// Wraps children in a motion.div that fades in when scrolled into view
export function AnimatedSection({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── SvgIcon ──────────────────────────────────────────────────
// Renders one or more SVG path strings as a single icon
export function SvgIcon({ paths = [], size = 24, color = '#c9a84c', strokeWidth = 1.5, className = '', title }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={!title}
      role={title ? 'img' : undefined}
      className={className}
    >
      {title && <title>{title}</title>}
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.fill ?? 'none'} />
      ))}
    </svg>
  );
}
