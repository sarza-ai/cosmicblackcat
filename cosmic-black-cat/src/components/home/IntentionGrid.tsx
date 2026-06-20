'use client';

import React, { RefObject } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { CatDivider } from '@/components/ui/CosmicCat';
import { intentionCards } from '@/lib/data';

export function IntentionGrid() {
  const ref = useScrollReveal();

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--deep)]"
      aria-labelledby="intentions-heading"
    >
      <div className="max-w-7xl mx-auto" ref={ref as React.RefObject<HTMLDivElement>}>

        {/* ── Section header ── */}
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] mb-3 font-medium">
            Shop by intention
          </p>
          <h2 id="intentions-heading" className="display-md text-[var(--moonwhite)] mb-4">
            What does your spirit seek?
          </h2>
          <p className="text-[var(--silver)] max-w-md text-sm leading-relaxed opacity-80">
            Every path is valid here. Choose the energy you're working with and
            we'll meet you there.
          </p>
        </div>

        {/* ── Intention cards grid ── */}
        <ul
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          role="list"
          aria-label="Shop by intention"
        >
          {intentionCards.map((card, i) => (
            <li key={card.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <Link
                href={card.href}
                className="
                  group relative flex flex-col justify-between
                  rounded-2xl border border-[rgba(185,158,232,0.08)]
                  p-5 sm:p-6 h-full min-h-[160px]
                  bg-gradient-to-br from-[rgba(30,27,75,0.6)] to-[rgba(18,16,43,0.8)]
                  hover:border-[rgba(201,168,76,0.25)]
                  transition-all duration-300
                  backdrop-blur-sm
                  overflow-hidden
                  focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--deep)]
                "
                aria-label={`Shop ${card.label} — ${card.description}`}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 30% 50%, ${card.accentColor}18 0%, transparent 65%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Symbol */}
                <div
                  className="text-3xl mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 select-none"
                  style={{ color: card.accentColor }}
                  aria-hidden="true"
                >
                  {card.symbol}
                </div>

                {/* Text content */}
                <div>
                  <h3
                    className="font-serif text-lg font-medium text-[var(--moonwhite)] mb-1 group-hover:text-[var(--gold-light)] transition-colors duration-200"
                  >
                    {card.label}
                  </h3>
                  <p className="text-xs text-[var(--silver)] leading-snug opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                    {card.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                  aria-hidden="true"
                >
                  <svg
                    width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke={card.accentColor} strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* ── View all link ── */}
        <div className="flex justify-center mt-10 reveal">
          <Link
            href="/shop"
            className="text-sm text-[var(--lavender)] hover:text-[var(--gold)] underline underline-offset-4 decoration-[rgba(185,158,232,0.3)] hover:decoration-[var(--gold)] transition-all duration-200"
          >
            Browse everything in the shop →
          </Link>
        </div>

        {/* ── Section divider ── */}
        <CatDivider className="mt-20" />
      </div>
    </section>
  );
}
