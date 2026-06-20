'use client';

import React, { RefObject } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/lib/useScrollReveal';

const STEPS = [
  {
    number: '01',
    title: 'Bring your books',
    description: 'Gently loved metaphysical titles — crystals, witchcraft, astrology, spirituality, herbalism, and more. We\'ll check our accepted list together.',
  },
  {
    number: '02',
    title: 'We assess & credit you',
    description: 'Sandra\'s team evaluates condition and demand. You receive store credit on the spot — no waiting, no guessing.',
  },
  {
    number: '03',
    title: 'Browse your next chapter',
    description: 'Spend your credit on anything in the shop. Your old books become crystals, candles, tarot decks — whatever calls next.',
  },
];

export function BookExchangeSpotlight() {
  const ref = useScrollReveal();

  return (
    <section
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="exchange-heading"
      style={{
        background: 'linear-gradient(135deg, rgba(18,16,43,0.95) 0%, rgba(30,27,75,0.7) 50%, rgba(10,10,20,0.95) 100%)',
      }}
    >
      {/* Background rune/sigil watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-serif text-[28rem] text-[var(--lavender)] leading-none">☽</span>
      </div>

      {/* Decorative edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref as React.RefObject<HTMLDivElement>}>

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="reveal flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[var(--gold)] opacity-50" aria-hidden="true" />
            <span className="text-[var(--gold)] text-[10px] uppercase tracking-[0.22em] font-medium">
              A Cosmic Black Cat exclusive
            </span>
            <div className="h-px w-10 bg-[var(--gold)] opacity-50" aria-hidden="true" />
          </div>

          <h2 id="exchange-heading" className="display-lg text-[var(--moonwhite)] mb-5 reveal">
            The Black Cat<br />
            <span className="italic text-gold-shimmer">Book Exchange</span>
          </h2>

          <p className="text-[var(--silver)] max-w-lg text-base leading-relaxed reveal opacity-80">
            Your shelves hold the next seeker's transformation. Trade in your
            gently loved metaphysical titles and receive store credit to fuel
            your own next chapter. Because wisdom shouldn't gather dust.
          </p>
        </div>

        {/* ── 3-step process ── */}
        <ol
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14"
          aria-label="How the Book Exchange works"
        >
          {STEPS.map((step, i) => (
            <li
              key={step.number}
              className={`reveal reveal-delay-${i + 1} relative`}
            >
              {/* Connector line (desktop only) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-full w-8 h-px bg-gradient-to-r from-[rgba(201,168,76,0.3)] to-[rgba(185,158,232,0.2)] z-10"
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-col items-start p-7 rounded-2xl border border-[rgba(185,158,232,0.1)] bg-[rgba(18,16,43,0.5)] backdrop-blur-sm hover:border-[rgba(201,168,76,0.2)] transition-colors duration-300 h-full group">
                <span
                  className="font-serif text-4xl font-light text-[rgba(201,168,76,0.3)] mb-5 group-hover:text-[rgba(201,168,76,0.5)] transition-colors duration-300"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3 className="font-serif text-xl text-[var(--moonwhite)] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--silver)] leading-relaxed opacity-70 group-hover:opacity-90 transition-opacity duration-200">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* ── Bottom CTA row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 reveal">
          <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest text-[var(--gold)] font-medium">
              In-store only
            </p>
            <p className="text-sm text-[var(--silver)] opacity-60">
              Bring your books to our Derby, CT location — no mail-in
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="/book-exchange"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[var(--gold)] text-[var(--void)] text-sm font-semibold tracking-wide uppercase hover:bg-[var(--gold-light)] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              See accepted titles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[rgba(185,158,232,0.3)] text-[var(--lavender)] text-sm font-medium hover:border-[var(--lavender)] hover:text-[var(--moonwhite)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--lavender)]"
            >
              Store hours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
