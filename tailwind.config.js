/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "image" : "url('./assets/Loginpage.jpg') "
      },
      color : {
        "color" : "rgba(0, 0, 0, 0.9)" 
      }
    },
  },
  plugins: [],
}