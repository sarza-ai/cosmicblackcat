/** Format price as USD string */
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents);
}

/** Clamp text to max chars, adding ellipsis */
export function clampText(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 1).trimEnd() + '…';
}

/** Generate a staggered animation delay class */
export function staggerDelay(index: number, base = 100): string {
  return `delay-[${index * base}ms]`;
}

/** Check if prefers-reduced-motion */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
