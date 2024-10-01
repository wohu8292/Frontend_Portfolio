/** @type {import('tailwindcss').Config} */
import tailwindScrollBar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ["Edu AU VIC WA NT Dots", "cursive"]
      }
    },
  },
  plugins: [tailwindScrollBar],
}

