/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "cursive":["Edu AU VIC WA NT Dots", "cursive"]
      },
      colors:{
        primary: "#B9E3C6",
        secondary: "#ed8900" 
      },
      container:{
        center: true,
        padding: {default:"1rem", sm:"3rem"}
      }
    },
  },
  plugins: [],
}