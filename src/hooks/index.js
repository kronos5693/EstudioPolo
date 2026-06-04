import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

// ─── useScrolled ──────────────────────────────────────────────
// Returns true once the page has scrolled past `threshold` px
export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

// ─── useCounter ───────────────────────────────────────────────
// Counts up from 0 to `target` once the element is in view
export function useCounter(target, duration = 2000) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return { ref, count };
}

// ─── useScrollTo ──────────────────────────────────────────────
// Smooth-scrolls to a section by id, accounting for navbar height
export function useScrollTo() {
  return (id, offset = 70) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };
}
