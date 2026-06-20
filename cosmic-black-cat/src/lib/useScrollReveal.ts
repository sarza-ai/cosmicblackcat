'use client';

import { useEffect, useRef, RefObject } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Adds `.visible` to elements with `.reveal` class when they enter
 * the viewport. Stagger siblings automatically via CSS delay classes.
 */
export function useScrollReveal(
  options: UseScrollRevealOptions = {}
): RefObject<HTMLDivElement | null> {
  const { threshold = 0.15, rootMargin = '0px 0px -48px 0px', once = true } =
    options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>('.reveal');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
