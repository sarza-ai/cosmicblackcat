/**
 * Cosmic Black Cat — Homepage
 *
 * Route: / (Next.js App Router page)
 *
 * Sections (in order):
 *  1. HeroSection      — full-viewport cinematic opening
 *  2. IntentionGrid    — 8 shop-by-intention cards
 *  3. FeaturedProducts — scrollable product grid with filter pills
 *  4. BookExchangeSpotlight — standout feature section
 *  5. EventsSection    — upcoming events with booking links
 *  6. AboutStrip       — Sandra's story, values, newsletter
 *
 * All sections use scroll-reveal via IntersectionObserver.
 * No data fetching here in the mock — real implementation pulls
 * from Sanity via ISR (revalidate: 60 seconds).
 */

import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { IntentionGrid } from '@/components/home/IntentionGrid';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { BookExchangeSpotlight } from '@/components/home/BookExchangeSpotlight';
import { EventsSection } from '@/components/home/EventsSection';
import { AboutStrip } from '@/components/home/AboutStrip';

export const metadata: Metadata = {
  title: 'Cosmic Black Cat | Where the Veil Grows Thin',
  description:
    'Woman-owned metaphysical shop in Derby, CT. Crystals, herbs, tarot, books, altar tools, and the legendary Black Cat Book Exchange. Every path is welcome.',
};

// ISR — revalidate every 60 seconds in production
export const revalidate = 60;

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <HeroSection />

      {/* ── 2. Shop by intention ────────────────────────── */}
      <IntentionGrid />

      {/* ── 3. Featured products ────────────────────────── */}
      <FeaturedProducts />

      {/* ── 4. Book Exchange spotlight ──────────────────── */}
      <BookExchangeSpotlight />

      {/* ── 5. Upcoming events ──────────────────────────── */}
      <EventsSection />

      {/* ── 6. About + newsletter ───────────────────────── */}
      <AboutStrip />
    </>
  );
}
