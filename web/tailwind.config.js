/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scandinavian': {
          'bg': '#1a1d29',
          'panel': '#22252e',
          'border': '#2d3139',
          'text': '#c1c2c5',
          'accent': '#4a9eff',
        }
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
