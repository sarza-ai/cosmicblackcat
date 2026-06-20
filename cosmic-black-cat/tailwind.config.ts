import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cbc-void':      '#0A0A14',
        'cbc-deep':      '#12102B',
        'cbc-indigo':    '#1E1B4B',
        'cbc-violet':    '#4C3B8A',
        'cbc-amethyst':  '#7C5CBF',
        'cbc-lavender':  '#B99EE8',
        'cbc-gold':      '#C9A84C',
        'cbc-gold-lt':   '#E8D08A',
        'cbc-silver':    '#C0C8D8',
        'cbc-moonwhite': '#EEE8F8',
        'cbc-rose':      '#8B3A62',
        'cbc-teal':      '#1E6B72',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.1' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
      },
      screens: {
        'xs': '375px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'cosmic-radial': 'radial-gradient(ellipse at center, rgba(76,59,138,0.25) 0%, transparent 70%)',
      },
      animation: {
        'drift-slow':  'drift-slow 90s ease-in-out infinite',
        'drift-mid':   'drift-mid 60s ease-in-out infinite',
        'drift-fast':  'drift-fast 40s ease-in-out infinite',
        'twinkle':     'twinkle 3s ease-in-out infinite',
        'float-cat':   'float-cat 6s ease-in-out infinite',
        'glow-pulse':  'glow-pulse 2.4s ease-in-out infinite',
        'spin-slow':   'spin-slow 24s linear infinite',
        'blink-eye':   'blink-eye 5s ease-in-out infinite',
        'reveal-up':   'reveal-up 0.7s ease-out both',
        'shimmer':     'shimmer-gold 3s ease-in-out infinite',
      },
      keyframes: {
        'drift-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%':       { transform: 'translateY(-8px) translateX(4px)' },
          '66%':       { transform: 'translateY(-4px) translateX(-6px)' },
        },
        'drift-mid': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%':       { transform: 'translateY(-14px) translateX(-8px)' },
        },
        'drift-fast': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-20px) translateX(10px)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%':       { opacity: '1',   transform: 'scale(1.4)' },
        },
        'float-cat': {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%':       { transform: 'translateY(-12px) rotate(1deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0)' },
          '50%':       { boxShadow: '0 0 24px 4px rgba(201,168,76,0.25)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'blink-eye': {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '96%':             { transform: 'scaleY(0.1)' },
        },
        'reveal-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer-gold': {
          '0%, 100%': { opacity: '0.5' },
          '50%':       { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
