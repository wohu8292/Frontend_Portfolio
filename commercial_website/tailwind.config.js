/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      //font
      fontFamily: {
      'qwitcher': ["Qwitcher Grypen", "cursive"]},
      
      //colors
      colors: {
        primary: "#fea928",
        secondary: "#ed8900"
      },

      //container
      container: {
        center: true,
        padding: {DEFAULT:"1rem", sm:"3rem"}
      }
    },
  },
  plugins: [],
}