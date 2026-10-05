import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F7F7F5',
        ink: '#111111',
        muted: '#686868',
        accent: { DEFAULT: '#8B7CF6', light: '#C8C0FF' },
        olive: '#506C31',
        sage: '#8DB073',
        hairline: 'rgba(17, 17, 17, 0.12)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        mega: [
          'clamp(3.75rem, 2.5rem + 15vw, 16rem)',
          { lineHeight: '0.88', letterSpacing: '-0.055em' },
        ],
        giant: ['clamp(3rem, 9.5vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.05em' }],
        h1: ['clamp(2.25rem, 5.4vw, 5rem)', { lineHeight: '0.98', letterSpacing: '-0.045em' }],
        h2: ['clamp(2.25rem, 6vw, 5.75rem)', { lineHeight: '0.98', letterSpacing: '-0.045em' }],
        h3: ['clamp(1.75rem, 3.4vw, 3.25rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        mail: ['clamp(1.6rem, 6.4vw, 6.25rem)', { lineHeight: '1', letterSpacing: '-0.045em' }],
      },
      maxWidth: { page: '1280px' },
      borderRadius: { DEFAULT: '2px', sm: '2px', md: '4px' },
      spacing: { section: 'clamp(5rem, 11vw, 10rem)' },
    },
  },
  plugins: [],
}

export default config
