'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  /** Animation stagger index for reveal delays */
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const { addItem, toggleWishlist, isWishlisted } = useCartStore();
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1400);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const delayClass = [
    '',
    'reveal-delay-1',
    'reveal-delay-2',
    'reveal-delay-3',
    'reveal-delay-4',
  ][Math.min(index % 4, 4)];

  return (
    <article
      className={`reveal ${delayClass} group relative flex flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/shop/${product.slug}`}
        className="flex flex-col flex-1 focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded-xl"
        aria-label={`${product.name} — ${formatPrice(product.price)}`}
      >
        {/* ── Image container ── */}
        <div className="relative overflow-hidden rounded-xl bg-[#12102B] aspect-square mb-4">
          {/* Primary image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover transition-all duration-500 ${
              isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
            } group-hover:scale-[1.04]`}
          />

          {/* Hover image */}
          {product.hoverImage && (
            <Image
              src={product.hoverImage}
              alt=""
              fill
              aria-hidden
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={`object-cover absolute inset-0 transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Overlay shimmer on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[rgba(10,10,20,0.6)] via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          />

          {/* ── Badges ── */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5" aria-label="Product badges">
            {product.isNew && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-[var(--gold)] text-[var(--void)]">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-[var(--violet)] text-[var(--moonwhite)]">
                Bestseller
              </span>
            )}
            {product.isStaffPick && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-[rgba(139,58,98,0.85)] text-[#fce4f0]">
                Staff pick ✦
              </span>
            )}
            {product.isLowStock && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-[rgba(201,100,60,0.85)] text-[#ffe8d8]">
                Only {product.stockCount} left
              </span>
            )}
          </div>

          {/* ── Wishlist button ── */}
          <button
            onClick={handleWishlist}
            aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            aria-pressed={wishlisted}
            className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center
              transition-all duration-200 backdrop-blur-sm
              ${wishlisted
                ? 'bg-[rgba(139,58,98,0.9)] text-[#fce4f0]'
                : 'bg-[rgba(10,10,20,0.5)] text-[var(--silver)] hover:bg-[rgba(139,58,98,0.7)] hover:text-[#fce4f0]'
              }
              ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}
            `}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* ── Quick add overlay ── */}
          <div
            className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={handleAddToCart}
              aria-label={`Add ${product.name} to cart`}
              className={`w-full py-2.5 text-xs font-medium tracking-widest uppercase transition-all duration-200
                ${addedFeedback
                  ? 'bg-[var(--gold)] text-[var(--void)]'
                  : 'bg-[rgba(10,10,20,0.85)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--void)]'
                }
                backdrop-blur-sm`}
            >
              {addedFeedback ? '✓ Added to cart' : 'Quick add'}
            </button>
          </div>
        </div>

        {/* ── Product info ── */}
        <div className="flex flex-col flex-1 px-0.5">
          {/* Energy tags */}
          {product.energyTags.length > 0 && (
            <p className="text-[10px] uppercase tracking-[0.1em] text-[var(--amethyst)] mb-1.5 font-medium">
              {product.energyTags.slice(0, 2).join(' · ')}
            </p>
          )}

          {/* Name */}
          <h3 className="font-serif text-[1.05rem] font-normal text-[var(--moonwhite)] leading-snug mb-1.5 group-hover:text-[var(--gold-light)] transition-colors duration-200">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-[var(--silver)] leading-relaxed mb-3 flex-1 line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Price row */}
          <div className="flex items-baseline gap-2">
            <span className="text-[var(--gold)] font-medium text-sm">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-[var(--silver)] text-xs line-through opacity-60">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
