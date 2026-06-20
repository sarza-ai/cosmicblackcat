import React from 'react';

interface CosmicCatProps {
  className?: string;
  size?: number;
  /** Color of the cat silhouette */
  color?: string;
  /** Whether the cat blinks (CSS animation) */
  animated?: boolean;
}

/**
 * The Cosmic Black Cat signature — a fine-line cat silhouette
 * whose tail curls into a crescent moon. Used as divider,
 * favicon shape, and hero watermark.
 */
export function CosmicCat({
  className = '',
  size = 80,
  color = 'currentColor',
  animated = true,
}: CosmicCatProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 100"
      width={size}
      height={(size * 100) / 120}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Body */}
      <ellipse
        cx="52" cy="62" rx="22" ry="18"
        fill={color}
        className={animated ? 'animate-float-cat' : ''}
        style={{ transformOrigin: '52px 62px' }}
      />
      {/* Head */}
      <circle cx="52" cy="36" r="16" fill={color} />
      {/* Left ear */}
      <polygon points="38,24 34,10 46,22" fill={color} />
      {/* Right ear */}
      <polygon points="64,22 72,10 68,24" fill={color} />
      {/* Inner left ear */}
      <polygon points="39,22 36,13 45,21" fill="rgba(30,27,75,0.6)" />
      {/* Inner right ear */}
      <polygon points="65,21 70,13 67,22" fill="rgba(30,27,75,0.6)" />

      {/* Eyes */}
      <ellipse
        cx="45" cy="34" rx="3.5" ry="4"
        fill="rgba(30,27,75,0.9)"
        className={animated ? 'animate-blink-eye' : ''}
        style={{ transformOrigin: '45px 34px' }}
      />
      <ellipse
        cx="59" cy="34" rx="3.5" ry="4"
        fill="rgba(30,27,75,0.9)"
        className={animated ? 'animate-blink-eye' : ''}
        style={{ transformOrigin: '59px 34px', animationDelay: '0.05s' }}
      />
      {/* Eye glints */}
      <circle cx="46.5" cy="32.5" r="1" fill="rgba(255,255,255,0.6)" />
      <circle cx="60.5" cy="32.5" r="1" fill="rgba(255,255,255,0.6)" />

      {/* Nose */}
      <polygon points="52,40 50,43 54,43" fill="rgba(30,27,75,0.7)" />
      {/* Mouth */}
      <path
        d="M50 43 Q48 46 46 45 M54 43 Q56 46 58 45"
        stroke="rgba(30,27,75,0.7)" strokeWidth="0.8" fill="none"
      />

      {/* Whiskers left */}
      <line x1="34" y1="38" x2="44" y2="40" stroke="rgba(30,27,75,0.5)" strokeWidth="0.8" />
      <line x1="34" y1="42" x2="44" y2="42" stroke="rgba(30,27,75,0.5)" strokeWidth="0.8" />
      <line x1="35" y1="46" x2="44" y2="44" stroke="rgba(30,27,75,0.5)" strokeWidth="0.8" />
      {/* Whiskers right */}
      <line x1="70" y1="38" x2="60" y2="40" stroke="rgba(30,27,75,0.5)" strokeWidth="0.8" />
      <line x1="70" y1="42" x2="60" y2="42" stroke="rgba(30,27,75,0.5)" strokeWidth="0.8" />
      <line x1="69" y1="46" x2="60" y2="44" stroke="rgba(30,27,75,0.5)" strokeWidth="0.8" />

      {/* Front paws */}
      <ellipse cx="40" cy="78" rx="6" ry="4" fill={color} />
      <ellipse cx="64" cy="78" rx="6" ry="4" fill={color} />

      {/* Tail — curls into crescent moon */}
      <path
        d="M72 72 Q95 65 100 50 Q104 38 96 30 Q90 24 84 28 Q92 26 96 34 Q100 44 96 54 Q90 68 72 74"
        fill={color}
        stroke="none"
      />
      {/* Crescent moon at tail tip */}
      <circle cx="84" cy="22" r="10" fill={color} />
      <circle cx="88" cy="18" r="8" fill="rgba(10,10,20,1)" />
    </svg>
  );
}

/** Horizontal section divider with cat silhouette center */
export function CatDivider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-4 w-full ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(201,168,76,0.3)]" />
      <CosmicCat size={28} color="rgba(201,168,76,0.5)" animated={false} />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(201,168,76,0.3)]" />
    </div>
  );
}
