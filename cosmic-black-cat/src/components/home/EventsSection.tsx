'use client';

import React, { RefObject } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { CatDivider } from '@/components/ui/CosmicCat';
import { upcomingEvents } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

export function EventsSection() {
  const ref = useScrollReveal();

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--deep)]"
      aria-labelledby="events-heading"
    >
      <div className="max-w-5xl mx-auto" ref={ref as React.RefObject<HTMLDivElement>}>

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] mb-2 font-medium">
              In the shop & on the calendar
            </p>
            <h2 id="events-heading" className="display-md text-[var(--moonwhite)]">
              Gather with us
            </h2>
          </div>
          <Link
            href="/events"
            className="text-sm text-[var(--lavender)] hover:text-[var(--gold)] underline underline-offset-4 decoration-[rgba(185,158,232,0.3)] hover:decoration-[var(--gold)] transition-all duration-200 whitespace-nowrap pb-1"
          >
            Full calendar →
          </Link>
        </div>

        {/* ── Event cards ── */}
        <ul className="flex flex-col gap-4" role="list" aria-label="Upcoming events">
          {upcomingEvents.map((event, i) => (
            <li key={event.id} className={`reveal reveal-delay-${i + 1}`}>
              <Link
                href={event.href}
                className="
                  group flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8
                  p-6 sm:p-7 rounded-2xl
                  border border-[rgba(185,158,232,0.1)]
                  bg-[rgba(18,16,43,0.5)] backdrop-blur-sm
                  hover:border-[rgba(201,168,76,0.2)] hover:bg-[rgba(30,27,75,0.4)]
                  transition-all duration-300
                  focus-visible:ring-2 focus-visible:ring-[var(--gold)]
                "
                aria-label={`${event.title} — ${event.date} at ${event.time}`}
              >
                {/* Date column */}
                <div className="shrink-0 flex flex-row sm:flex-col items-center sm:items-center gap-3 sm:gap-0 sm:w-20 sm:text-center">
                  <div className="font-serif text-3xl sm:text-4xl font-light text-[var(--gold)] leading-none">
                    {event.date.split(' ')[1].replace(',', '')}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[var(--silver)] opacity-60 sm:mt-1">
                    {event.date.split(' ')[0]}
                  </div>
                </div>

                {/* Vertical separator (desktop) */}
                <div className="hidden sm:block w-px self-stretch bg-[rgba(185,158,232,0.1)]" aria-hidden="true" />

                {/* Event info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg text-[var(--moonwhite)] mb-1.5 group-hover:text-[var(--gold-light)] transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="text-xs text-[var(--silver)] opacity-60 mb-2">
                    {event.time}
                  </p>
                  <p className="text-sm text-[var(--silver)] opacity-70 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                </div>

                {/* Right column — price + spots + CTA */}
                <div className="shrink-0 flex flex-row sm:flex-col items-center sm:items-end gap-4 sm:gap-3">
                  <div className="text-right">
                    <span className="text-[var(--gold)] font-medium text-base">
                      {event.price === 'free' ? 'Free' : formatPrice(event.price as number)}
                    </span>
                    {event.spotsRemaining !== undefined && (
                      <p className={`text-[10px] mt-0.5 ${event.spotsRemaining <= 4 ? 'text-[#C97760]' : 'text-[var(--silver)] opacity-50'}`}>
                        {event.spotsRemaining} {event.spotsRemaining === 1 ? 'spot' : 'spots'} left
                      </p>
                    )}
                  </div>

                  <span
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-medium border border-[rgba(185,158,232,0.25)] text-[var(--lavender)] group-hover:border-[var(--lavender)] group-hover:text-[var(--moonwhite)] transition-all duration-200 whitespace-nowrap"
                    aria-hidden="true"
                  >
                    Reserve
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <CatDivider className="mt-20" />
      </div>
    </section>
  );
}
