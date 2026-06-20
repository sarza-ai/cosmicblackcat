'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { StarField } from '@/components/ui/StarField';
import { CosmicCat } from '@/components/ui/CosmicCat';

/** Splits a string into word-by-word spans for staggered reveal */
function AnimatedHeadline({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`inline ${className}`} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className="inline-block animate-reveal-up"
          style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'both' }}
          aria-hidden="true"
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const nebula1Ref = useRef<HTMLDivElement>(null);
  const nebula2Ref = useRef<HTMLDivElement>(null);

  // Subtle mouse-tracking parallax on nebula blobs
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const mx = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
      const my = (e.clientY / window.innerHeight - 0.5) * 2;

      if (nebula1Ref.current) {
        nebula1Ref.current.style.transform = `translate(${mx * 16}px, ${my * 10}px)`;
      }
      if (nebula2Ref.current) {
        nebula2Ref.current.style.transform = `translate(${mx * -10}px, ${my * -14}px)`;
      }
    };

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mq.matches) {
      window.addEventListener('mousemove', handleMouse, { passive: true });
    }
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[var(--void)]"
      aria-label="Welcome to Cosmic Black Cat"
    >
      {/* ── Animated star field ── */}
      <StarField />

      {/* ── Nebula blobs (color atmosphere) ── */}
      <div
        ref={nebula1Ref}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(76,59,138,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />
      <div
        ref={nebula2Ref}
        className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(139,58,98,0.14) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        aria-hidden="true"
      />

      {/* ── Decorative orbit ring ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(201,168,76,0.06)] animate-spin-slow pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[rgba(185,158,232,0.04)] pointer-events-none"
        style={{ animation: 'spin-slow 40s linear infinite reverse' }}
        aria-hidden="true"
      />

      {/* ── Cosmic cat — watermark ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none select-none"
        aria-hidden="true"
      >
        <CosmicCat size={480} color="var(--lavender)" animated={false} />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-8 animate-reveal-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--gold)] opacity-60" aria-hidden="true" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold)] font-medium">
            Derby, CT · Woman-owned · Est. since the veil thinned
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--gold)] opacity-60" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h1 className="display-xl text-[var(--moonwhite)] mb-6">
          <AnimatedHeadline text="Where the veil" />
          <br />
          <span className="italic text-gold-shimmer">
            <AnimatedHeadline text="grows thin" />
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-[var(--silver)] text-lg md:text-xl font-light max-w-2xl mb-3 leading-relaxed animate-reveal-up"
          style={{ animationDelay: '0.9s', animationFillMode: 'both' }}
        >
          and every stone remembers your name.
        </p>
        <p
          className="text-[var(--silver)] text-base max-w-xl mb-12 leading-relaxed animate-reveal-up opacity-75"
          style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
        >
          Crystals, herbs, tarot, rare books, and handcrafted tools — curated for
          every path, every practice, every seeker.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-reveal-up"
          style={{ animationDelay: '1.3s', animationFillMode: 'both' }}
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--gold)] text-[var(--void)] text-sm font-semibold tracking-wide uppercase hover:bg-[var(--gold-light)] transition-colors duration-200 animate-glow-pulse focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--void)]"
          >
            Explore the shop
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/bookings"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[rgba(185,158,232,0.4)] text-[var(--lavender)] text-sm font-medium tracking-wide hover:border-[var(--lavender)] hover:text-[var(--moonwhite)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--lavender)]"
          >
            Book a reading
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
              <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </Link>
        </div>

        {/* Store info chips */}
        <div
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 animate-reveal-up"
          style={{ animationDelay: '1.5s', animationFillMode: 'both' }}
        >
          {[
            { icon: '📍', text: 'Derby, CT' },
            { icon: '🕐', text: 'Tue–Sun · Check hours' },
            { icon: '📞', text: 'Walk-ins welcome' },
          ].map(({ icon, text }) => (
            <span key={text} className="text-xs text-[var(--silver)] opacity-60 flex items-center gap-1.5">
              <span aria-hidden="true">{icon}</span> {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-reveal-up flex flex-col items-center gap-2 opacity-50"
        style={{ animationDelay: '2s', animationFillMode: 'both' }}
        aria-hidden="true"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--silver)]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--silver)] to-transparent" />
      </div>
    </section>
  );
}
