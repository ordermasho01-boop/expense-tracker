/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#eba134",
        secondaryDull: "#2c4b99",
        secondary:"#3d2c99"
      }
    },
  },
  plugins: [],
}