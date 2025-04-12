import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#faf7f2',
          100: '#f5f0e6',
        },
        beige: {
          100: '#f0e9e0',
          200: '#e5dcd0',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)'],
      },
    },
  },
  plugins: [],
}
export default config 