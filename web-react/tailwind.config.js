/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'panel-bg': 'rgba(10, 16, 28, 0.78)',
        'panel-border': '#2b3a4d',
        'accent-blue': '#4a90e2',
        'text-primary': '#e8eaed',
        'text-secondary': '#9ca3af',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'panel': '0 4px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glow': '0 0 10px rgba(74, 144, 226, 0.3)',
      },
    },
  },
  plugins: [],
}
