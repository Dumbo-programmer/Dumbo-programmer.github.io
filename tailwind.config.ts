import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#030014',
          soft: '#0a051c',
        },
        surface: {
          DEFAULT: 'rgba(255, 255, 255, 0.04)',
          hover: 'rgba(255, 255, 255, 0.07)',
        },
        line: {
          DEFAULT: '#2A0E61',
          accent: '#7042f8',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          deep: '#7042f8',
          light: '#b49bff',
          cyan: '#22d3ee',
        },
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 4.25rem)', { lineHeight: '1.06', letterSpacing: '-0.03em' }],
        section: ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        subhead: ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139, 92, 246, 0.14), 0 18px 45px -28px rgba(139, 92, 246, 0.55)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
