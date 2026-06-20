'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { ProductCard } from '@/components/ui/ProductCard';
import { featuredProducts } from '@/lib/data';
import type { ProductCategory } from '@/types';

const FILTER_LABELS: { value: ProductCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'crystals', label: 'Crystals' },
  { value: 'candles', label: 'Candles' },
  { value: 'herbs-oils', label: 'Herbs & oils' },
  { value: 'tarot-oracle', label: 'Tarot' },
  { value: 'altar-tools', label: 'Altar tools' },
  { value: 'apothecary', label: 'Apothecary' },
];

export function FeaturedProducts() {
  const ref = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState<ProductCategory | 'all'>('all');

  const filtered =
    activeFilter === 'all'
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeFilter);

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--void)]"
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto" ref={ref as React.RefObject<HTMLDivElement>}>

        {/* ── Section header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] mb-2 font-medium">
              New arrivals & staff picks
            </p>
            <h2 id="featured-heading" className="display-md text-[var(--moonwhite)]">
              Chosen with intention
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-sm text-[var(--lavender)] hover:text-[var(--gold)] underline underline-offset-4 decoration-[rgba(185,158,232,0.3)] hover:decoration-[var(--gold)] transition-all duration-200 whitespace-nowrap pb-1"
          >
            View full shop →
          </Link>
        </div>

        {/* ── Category filter pills ── */}
        <div
          className="flex gap-2 flex-wrap mb-10 reveal"
          role="group"
          aria-label="Filter featured products by category"
        >
          {FILTER_LABELS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              aria-pressed={activeFilter === value}
              className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide transition-all duration-200
                ${activeFilter === value
                  ? 'bg-[var(--violet)] text-[var(--moonwhite)] border border-[var(--amethyst)]'
                  : 'bg-transparent text-[var(--silver)] border border-[rgba(185,158,232,0.2)] hover:border-[rgba(185,158,232,0.5)] hover:text-[var(--moonwhite)]'
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── Product grid ── */}
        {filtered.length > 0 ? (
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10"
            role="list"
            aria-label="Featured products"
          >
            {filtered.map((product, i) => (
              <li key={product.id}>
                <ProductCard product={product} index={i} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-[var(--silver)] text-sm opacity-60 mb-2">
              No featured items in this category yet.
            </p>
            <Link href="/shop" className="text-sm text-[var(--lavender)] underline underline-offset-2">
              Browse the full shop
            </Link>
          </div>
        )}

        {/* ── Chat Witch prompt ── */}
        <div className="mt-16 reveal">
          <div className="rounded-2xl border border-[rgba(185,158,232,0.12)] bg-gradient-to-br from-[rgba(76,59,138,0.15)] to-[rgba(18,16,43,0.6)] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 backdrop-blur-sm">
            {/* Cat icon */}
            <div className="shrink-0 w-14 h-14 rounded-full bg-[rgba(76,59,138,0.3)] border border-[rgba(185,158,232,0.2)] flex items-center justify-center text-2xl select-none" aria-hidden="true">
              🐱
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-serif text-lg text-[var(--moonwhite)] mb-1">
                Not sure where to start?
              </h3>
              <p className="text-sm text-[var(--silver)] opacity-70 leading-relaxed">
                The Chat Witch knows everything in the shop — crystals, herbs, tarot, the right
                stone for your situation. Ask her anything.
              </p>
            </div>

            <button
              onClick={() => {
                // Opens the ChatWitch widget (global event)
                window.dispatchEvent(new CustomEvent('cbc:open-chat', {
                  detail: { prompt: "Hi! I'm looking for something but not sure where to start." }
                }));
              }}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[rgba(185,158,232,0.35)] text-[var(--lavender)] text-sm font-medium hover:bg-[rgba(76,59,138,0.3)] hover:text-[var(--moonwhite)] transition-all duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[var(--lavender)]"
              aria-label="Open Chat Witch for product guidance"
            >
              Ask the Chat Witch
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
