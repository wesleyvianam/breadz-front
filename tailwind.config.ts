import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['var(--font-roboto)'],
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: "#353535",
        secondary: "#898989",
      }
    },
  },
  plugins: [],
}

export default config
