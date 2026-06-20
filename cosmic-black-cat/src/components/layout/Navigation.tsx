'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { CosmicCat } from '@/components/ui/CosmicCat';

const NAV_ITEMS = [
  {
    label: 'Shop',
    href: '/shop',
    mega: true,
    columns: [
      {
        heading: 'By type',
        links: [
          { label: 'Crystals & stones', href: '/shop/crystals' },
          { label: 'Candles & incense', href: '/shop/candles' },
          { label: 'Herbs, oils & apothecary', href: '/shop/herbs-oils' },
          { label: 'Tarot & oracle decks', href: '/shop/tarot-oracle' },
          { label: 'Books', href: '/shop/books' },
          { label: 'Altar tools', href: '/shop/altar-tools' },
          { label: 'Jewelry', href: '/shop/jewelry' },
          { label: 'Bath & body', href: '/shop/bath-body' },
          { label: 'Local artisans', href: '/shop/local-artisan' },
        ],
      },
      {
        heading: 'By intention',
        links: [
          { label: 'Protection', href: '/shop?intention=protection' },
          { label: 'Love', href: '/shop?intention=love' },
          { label: 'Abundance', href: '/shop?intention=abundance' },
          { label: 'Clarity', href: '/shop?intention=clarity' },
          { label: 'Healing', href: '/shop?intention=healing' },
          { label: 'Grounding', href: '/shop?intention=grounding' },
          { label: 'Psychic development', href: '/shop?intention=psychic' },
          { label: 'Shadow work', href: '/shop?intention=shadow-work' },
        ],
      },
    ],
  },
  { label: 'Book Exchange', href: '/book-exchange', mega: false },
  {
    label: 'Community',
    href: '/community',
    mega: false,
    dropdown: [
      { label: 'Events & bookings', href: '/events' },
      { label: 'Black Cat Vault', href: '/vault' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  { label: 'About', href: '/about', mega: false },
  { label: 'Visit us', href: '/contact', mega: false },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCartStore();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on route change (simplified)
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const count = totalItems();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(10,10,20,0.92)] backdrop-blur-md border-b border-[rgba(185,158,232,0.08)] py-3'
            : 'bg-transparent py-5'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded-lg"
              aria-label="Cosmic Black Cat — home"
            >
              <CosmicCat size={34} color="var(--gold)" animated={false} />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[1.1rem] text-[var(--moonwhite)] tracking-wide">
                  Cosmic Black Cat
                </span>
                <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--gold)] opacity-70">
                  Metaphysical · Derby, CT
                </span>
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      activeMenu === item.label
                        ? 'text-[var(--gold)] bg-[rgba(201,168,76,0.08)]'
                        : 'text-[var(--silver)] hover:text-[var(--moonwhite)] hover:bg-[rgba(255,255,255,0.04)]'
                    } ${item.label === 'Book Exchange' ? 'text-[var(--lavender)] hover:text-[var(--moonwhite)]' : ''}`}
                    onMouseEnter={() => (item.mega || item.dropdown) && setActiveMenu(item.label)}
                    onMouseLeave={() => setActiveMenu(null)}
                    onClick={() => {
                      if (!item.mega && !item.dropdown) {
                        window.location.href = item.href;
                      } else {
                        setActiveMenu(activeMenu === item.label ? null : item.label);
                      }
                    }}
                    aria-expanded={activeMenu === item.label}
                    aria-haspopup={item.mega || item.dropdown ? 'true' : undefined}
                  >
                    {item.label}
                    {(item.mega || item.dropdown) && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180' : ''}`} aria-hidden="true">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>

                  {/* Mega menu */}
                  {item.mega && activeMenu === item.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-[rgba(12,10,26,0.97)] backdrop-blur-xl border border-[rgba(185,158,232,0.12)] rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-6"
                      role="menu"
                      onMouseEnter={() => setActiveMenu(item.label)}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      {item.columns?.map((col) => (
                        <div key={col.heading}>
                          <p className="text-[9px] uppercase tracking-[0.18em] text-[var(--gold)] mb-3 font-medium">
                            {col.heading}
                          </p>
                          <ul className="space-y-1" role="none">
                            {col.links.map((link) => (
                              <li key={link.href} role="none">
                                <Link
                                  href={link.href}
                                  role="menuitem"
                                  className="block px-2 py-1.5 rounded-lg text-sm text-[var(--silver)] hover:text-[var(--moonwhite)] hover:bg-[rgba(185,158,232,0.06)] transition-all duration-150"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Simple dropdown */}
                  {item.dropdown && activeMenu === item.label && (
                    <div
                      className="absolute top-full left-0 mt-2 w-52 bg-[rgba(12,10,26,0.97)] backdrop-blur-xl border border-[rgba(185,158,232,0.12)] rounded-xl shadow-xl p-2"
                      role="menu"
                      onMouseEnter={() => setActiveMenu(item.label)}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      <ul role="none">
                        {item.dropdown.map((link) => (
                          <li key={link.href} role="none">
                            <Link
                              href={link.href}
                              role="menuitem"
                              className="block px-3 py-2 rounded-lg text-sm text-[var(--silver)] hover:text-[var(--moonwhite)] hover:bg-[rgba(185,158,232,0.06)] transition-all duration-150"
                              onClick={() => setActiveMenu(null)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <Link
                href="/search"
                aria-label="Search the shop"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--silver)] hover:text-[var(--moonwhite)] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
              </Link>

              {/* Cart */}
              <button
                onClick={openCart}
                aria-label={`Open cart — ${count} ${count === 1 ? 'item' : 'items'}`}
                className="relative w-9 h-9 rounded-full flex items-center justify-center text-[var(--silver)] hover:text-[var(--moonwhite)] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {count > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[var(--gold)] text-[var(--void)] text-[9px] font-bold flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {count > 9 ? '9+' : count}
                  </span>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-[var(--silver)] hover:text-[var(--moonwhite)] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  {mobileOpen
                    ? <><path d="M18 6L6 18" strokeLinecap="round" /><path d="M6 6l12 12" strokeLinecap="round" /></>
                    : <><line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" /><line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" /><line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" /></>
                  }
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile nav drawer ── */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-0 top-[60px] bg-[rgba(10,10,20,0.97)] backdrop-blur-xl z-40 overflow-y-auto"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="max-w-md mx-auto px-6 py-8" aria-label="Mobile main navigation">
              <ul className="space-y-1">
                {[
                  { label: 'Shop all', href: '/shop' },
                  { label: 'Crystals & stones', href: '/shop/crystals' },
                  { label: 'Candles & incense', href: '/shop/candles' },
                  { label: 'Herbs, oils & apothecary', href: '/shop/herbs-oils' },
                  { label: 'Tarot & oracle', href: '/shop/tarot-oracle' },
                  { label: 'Books', href: '/shop/books' },
                  { label: '─', href: '#', disabled: true },
                  { label: '✦ Book Exchange', href: '/book-exchange' },
                  { label: 'Events & bookings', href: '/events' },
                  { label: 'Black Cat Vault', href: '/vault' },
                  { label: 'About Sandra', href: '/about' },
                  { label: 'Visit us', href: '/contact' },
                ].map((link) => (
                  link.label === '─'
                    ? <li key="sep" className="py-2"><div className="h-px bg-[rgba(185,158,232,0.1)]" /></li>
                    : (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block py-3 px-4 rounded-xl text-base text-[var(--silver)] hover:text-[var(--moonwhite)] hover:bg-[rgba(185,158,232,0.06)] transition-all duration-200"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
