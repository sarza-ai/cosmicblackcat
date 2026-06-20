'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/lib/utils';

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  alphaDir: number;
  speed: number;
  layer: 0 | 1 | 2;
}

const LAYER_SPEEDS = [0.15, 0.35, 0.6];
const LAYER_COUNTS = [60, 80, 40];
const STAR_COLORS = [
  'rgba(192,200,216,', // silver
  'rgba(185,158,232,', // lavender
  'rgba(201,168,76,',  // gold
];

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createStars(w: number, h: number): Star[] {
  const stars: Star[] = [];
  for (let layer = 0 as 0 | 1 | 2; layer <= 2; layer++) {
    for (let i = 0; i < LAYER_COUNTS[layer]; i++) {
      stars.push({
        x: randomRange(0, w),
        y: randomRange(0, h),
        r: randomRange(layer === 2 ? 1.2 : 0.4, layer === 2 ? 2.2 : 1.4),
        alpha: randomRange(0.1, 0.7),
        alphaDir: Math.random() > 0.5 ? 1 : -1,
        speed: randomRange(0.001, 0.003),
        layer: layer as 0 | 1 | 2,
      });
    }
  }
  return stars;
}

export function StarField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    canvas.width = w * devicePixelRatio;
    canvas.height = h * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    let stars = createStars(w, h);

    // Scroll offset per layer (parallax)
    let scrollY = 0;
    const handleScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      stars = createStars(w, h);
    };
    window.addEventListener('resize', handleResize);

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        // Parallax shift
        const parallaxY = reduced
          ? 0
          : (scrollY * LAYER_SPEEDS[s.layer] * 0.3) % h;

        // Twinkle
        if (!reduced) {
          s.alpha += s.speed * s.alphaDir;
          if (s.alpha >= 0.9 || s.alpha <= 0.05) s.alphaDir *= -1;
        }

        const color = STAR_COLORS[s.layer === 2 && Math.random() > 0.85 ? 1 : 0];
        ctx.beginPath();
        ctx.arc(
          s.x,
          ((s.y - parallaxY + h) % h),
          s.r,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `${color}${s.alpha.toFixed(2)})`;
        ctx.fill();

        // Occasional gold cross-sparkle for larger stars
        if (s.layer === 2 && s.alpha > 0.7) {
          ctx.strokeStyle = `rgba(201,168,76,${(s.alpha * 0.3).toFixed(2)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x - s.r * 2.5, s.y - parallaxY);
          ctx.lineTo(s.x + s.r * 2.5, s.y - parallaxY);
          ctx.moveTo(s.x, s.y - parallaxY - s.r * 2.5);
          ctx.lineTo(s.x, s.y - parallaxY + s.r * 2.5);
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
