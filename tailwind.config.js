/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f8fafc',
          dark: '#030712', // nearly black
        },
        surface: {
          light: '#ffffff',
          dark: '#111827', // slightly lighter for cards
        },
        accent: {
          neon: '#00f3ff', // neon cyan
          purple: '#bc13fe', // neon purple
          blue: '#2563eb'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
