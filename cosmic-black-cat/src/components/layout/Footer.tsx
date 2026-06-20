import React from 'react';
import Link from 'next/link';
import { CosmicCat } from '@/components/ui/CosmicCat';

export function Footer() {
  return (
    <footer
      className="bg-[var(--void)] border-t border-[rgba(185,158,232,0.08)] pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Main footer grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <CosmicCat size={30} color="var(--gold)" animated={false} />
              <span className="font-serif text-[1.05rem] text-[var(--moonwhite)]">
                Cosmic Black Cat
              </span>
            </div>
            <p className="text-sm text-[var(--silver)] opacity-60 leading-relaxed mb-5 max-w-xs">
              Woman-owned. Earth-honoring. Radically inclusive. A metaphysical
              sanctuary in Derby, CT serving every seeker, every path.
            </p>
            {/* Trust signals */}
            <div className="flex flex-wrap gap-2">
              {['Woman-owned ✦', 'Earth-honoring ✦', 'Est. in Derby CT'].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] uppercase tracking-[0.12em] px-3 py-1 rounded-full border border-[rgba(185,158,232,0.15)] text-[var(--silver)] opacity-50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-[9px] uppercase tracking-[0.18em] text-[var(--gold)] mb-4 font-medium">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {[
                ['Crystals & stones', '/shop/crystals'],
                ['Candles & incense', '/shop/candles'],
                ['Tarot & oracle', '/shop/tarot-oracle'],
                ['Books', '/shop/books'],
                ['Altar tools', '/shop/altar-tools'],
                ['Local artisans', '/shop/local-artisan'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--silver)] opacity-60 hover:opacity-100 hover:text-[var(--moonwhite)] transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="text-[9px] uppercase tracking-[0.18em] text-[var(--gold)] mb-4 font-medium">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                ['Book Exchange', '/book-exchange'],
                ['Events & bookings', '/events'],
                ['Black Cat Vault', '/vault'],
                ['Blog', '/blog'],
                ['About Sandra', '/about'],
                ['Visit us', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--silver)] opacity-60 hover:opacity-100 hover:text-[var(--moonwhite)] transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store info */}
          <div>
            <h3 className="text-[9px] uppercase tracking-[0.18em] text-[var(--gold)] mb-4 font-medium">
              Find us
            </h3>
            <address className="not-italic space-y-3">
              <p className="text-sm text-[var(--silver)] opacity-60 leading-relaxed">
                Derby, CT<br />
                <Link
                  href="/contact"
                  className="hover:text-[var(--moonwhite)] hover:opacity-100 transition-all duration-200 underline underline-offset-2 decoration-[rgba(185,158,232,0.2)]"
                >
                  Get directions →
                </Link>
              </p>
              <div>
                <p className="text-[9px] uppercase tracking-[0.12em] text-[var(--silver)] opacity-40 mb-1">Hours</p>
                <p className="text-sm text-[var(--silver)] opacity-60">Tue–Sun<br />See website for current hours</p>
              </div>
              <div className="flex gap-3 pt-1">
                {/* Social icons */}
                {[
                  { label: 'Instagram', href: 'https://instagram.com/cosmicblackcat', icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" /></svg>
                  )},
                  { label: 'Facebook', href: 'https://facebook.com/cosmicblackcat', icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  )},
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Cosmic Black Cat on ${label}`}
                    className="w-8 h-8 rounded-full border border-[rgba(185,158,232,0.15)] flex items-center justify-center text-[var(--silver)] opacity-50 hover:opacity-100 hover:border-[rgba(185,158,232,0.4)] hover:text-[var(--moonwhite)] transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </address>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="section-divider mb-6" />

        {/* ── Legal row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[var(--silver)] opacity-40 uppercase tracking-[0.1em]">
          <p>© {new Date().getFullYear()} Cosmic Black Cat · Derby, CT · All rights reserved</p>
          <div className="flex gap-5">
            {[
              ['Privacy policy', '/privacy'],
              ['Shipping & returns', '/shipping'],
              ['Terms', '/terms'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="hover:opacity-100 hover:text-[var(--moonwhite)] transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
          <p>Crafted with intention 🐾</p>
        </div>
      </div>
    </footer>
  );
}
