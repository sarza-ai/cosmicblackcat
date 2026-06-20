import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Cosmic Black Cat | Metaphysical Shop · Derby, CT',
    template: '%s | Cosmic Black Cat',
  },
  description:
    'Woman-owned metaphysical shop in Derby, CT. Crystals, herbs, tarot, books, altar tools, and the Black Cat Book Exchange. Every path is welcome here.',
  keywords: [
    'metaphysical shop', 'crystals', 'tarot', 'Derby CT', 'witchcraft supplies',
    'herbs', 'oracle decks', 'book exchange', 'spiritual shop Connecticut',
  ],
  metadataBase: new URL('https://cosmicblackcat.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cosmicblackcat.com',
    siteName: 'Cosmic Black Cat',
    title: 'Cosmic Black Cat | Metaphysical Shop · Derby, CT',
    description:
      'Where the veil grows thin and every stone remembers your name. Crystals, tarot, herbs, and more — curated for every path.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmic Black Cat',
    description: 'Where the veil grows thin. Metaphysical shop in Derby, CT.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // LocalBusiness structured data
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Cosmic Black Cat',
      description: 'Woman-owned metaphysical shop in Derby, CT',
      url: 'https://cosmicblackcat.com',
      telephone: '', // Add when known
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Derby',
        addressRegion: 'CT',
        addressCountry: 'US',
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday','Wednesday','Thursday','Friday'], opens: '11:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '11:00', closes: '17:00' },
      ],
      priceRange: '$$',
    }),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0A0A14" />
      </head>
      <body className="bg-[#0A0A14] text-[#EEE8F8] antialiased">
        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* 
          ChatWitch global widget is mounted here in the real app:
          <ChatWitchWidget />
          
          It listens for `cbc:open-chat` CustomEvents dispatched by
          any component on the page (e.g. ProductCard, FeaturedProducts).
        */}
      </body>
    </html>
  );
}
