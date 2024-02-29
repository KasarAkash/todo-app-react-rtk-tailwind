/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BrightBlue: "hsl(220,98%,61%)",

        // Light Colors
        VeryLightGray: "hsl(0,0%,98%)",
        VeryLightGrayishBlue: "hsl(236,33%,92%)",
        LightGrayishBlue: "hsl(233,11%,84%)",
        DarkGrayishBlue1: "hsl(236,9%,61%)",
        VeryDarkGrayishBlue: "hsl(235,19%,35%)",

        // Dark Colors
        VeryDarkBlue: "hsl(235,21%,11%)",
        VeryDarkDesaturatedBlue: "hsl(235,24%,19%)",
        LightGrayishBlue1: "hsl(234,39%,85%)",
        //  (hover)
        LightGrayishBlue2: "hsl(236,33%,92%)",

        DarkGrayishBlue2: "hsl(234,11%,52%)",
        VeryDarkGrayishBlue1: "hsl(233,14%,35%)",
        VeryDarkGrayishBlue2: "hsl(237,14%,26%)",
      },
    },
    fontFamily: {
      Josefin: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class",
};
