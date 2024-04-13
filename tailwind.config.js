/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color:{
        primary:"#000000"
      },
      fontFamily:{
        Raleway:"Mundo-Medium"
      }
    },
  },
  plugins: [],
})

