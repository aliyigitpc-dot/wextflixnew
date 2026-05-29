/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#e5293a',
        background: '#141210',
        card: '#1e1b18',
        border: '#2e2b28',
        muted: '#7a7673',
      },
    },
  },
  plugins: [],
}
