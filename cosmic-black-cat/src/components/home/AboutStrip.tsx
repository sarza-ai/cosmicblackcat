'use client';

import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/lib/useScrollReveal';

const VALUES = [
  {
    icon: '🌱',
    title: 'Earth-honoring',
    text: 'Sustainably sourced, ethically traded, mindfully packaged. Mother Earth in every decision.',
  },
  {
    icon: '♾️',
    title: 'Radically inclusive',
    text: 'Every spiritual path is valid here. Every seeker is welcome. Zero gatekeeping, always.',
  },
  {
    icon: '💜',
    title: 'Woman-owned',
    text: 'Founded and run by Sandra, with deep roots in this community and a lifelong practice.',
  },
  {
    icon: '🤝',
    title: 'Giving back',
    text: 'A portion of every sale supports local land trusts and food sovereignty programs.',
  },
];

export function AboutStrip() {
  const ref = useScrollReveal();

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--void)]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto" ref={ref as React.RefObject<HTMLDivElement>}>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Sandra quote */}
          <div className="reveal">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] mb-4 font-medium">
              The woman behind the magic
            </p>
            <h2 id="about-heading" className="display-md text-[var(--moonwhite)] mb-6">
              Sandra didn't open a store.<br />
              <span className="italic text-[var(--lavender)]">She opened a doorway.</span>
            </h2>
            <p className="text-[var(--silver)] text-base leading-relaxed mb-5 opacity-80">
              Cosmic Black Cat was born from a lifelong reverence for Mother Earth,
              a crystal collection that outgrew every shelf, and the stubborn belief
              that spiritual tools should be accessible to everyone — not just the initiated.
            </p>
            <p className="text-[var(--silver)] text-base leading-relaxed mb-8 opacity-80">
              Every item in this shop is chosen with intention and offered with care.
              Some things have been here since the beginning. Some things arrive because
              the shop called them in.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-[var(--lavender)] hover:text-[var(--gold)] underline underline-offset-4 decoration-[rgba(185,158,232,0.3)] hover:decoration-[var(--gold)] transition-all duration-200"
            >
              Read Sandra's full story →
            </Link>
          </div>

          {/* Right — Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={`reveal reveal-delay-${i + 1} p-6 rounded-2xl border border-[rgba(185,158,232,0.1)] bg-[rgba(18,16,43,0.4)] backdrop-blur-sm hover:border-[rgba(201,168,76,0.15)] transition-colors duration-300`}
              >
                <div className="text-2xl mb-3 select-none" aria-hidden="true">{v.icon}</div>
                <h3 className="font-serif text-base text-[var(--moonwhite)] mb-2">{v.title}</h3>
                <p className="text-xs text-[var(--silver)] leading-relaxed opacity-70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Newsletter strip ── */}
        <div className="mt-20 reveal">
          <div
            className="relative rounded-2xl overflow-hidden border border-[rgba(185,158,232,0.1)] p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8"
            style={{
              background: 'linear-gradient(135deg, rgba(76,59,138,0.2) 0%, rgba(18,16,43,0.7) 100%)',
            }}
          >
            {/* Decorative moon */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] opacity-[0.04] pointer-events-none select-none font-serif" aria-hidden="true">
              ☽
            </div>

            <div className="flex-1 text-center sm:text-left relative z-10">
              <h3 className="font-serif text-2xl text-[var(--moonwhite)] mb-2">
                New moon dispatches
              </h3>
              <p className="text-sm text-[var(--silver)] opacity-70 max-w-md leading-relaxed">
                Lunar specials, new arrivals, ritual guides, and the occasional
                secret the stars only share with the curious. No noise. Only signal.
              </p>
            </div>

            <form
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto relative z-10"
              onSubmit={(e) => { e.preventDefault(); }}
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                required
                autoComplete="email"
                className="px-5 py-3 rounded-full bg-[rgba(18,16,43,0.8)] border border-[rgba(185,158,232,0.2)] text-[var(--moonwhite)] placeholder:text-[rgba(192,200,216,0.4)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all duration-200 w-full sm:w-64"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-[var(--gold)] text-[var(--void)] text-sm font-semibold tracking-wide uppercase hover:bg-[var(--gold-light)] transition-colors duration-200 whitespace-nowrap focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--void)]"
              >
                Join the coven
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
