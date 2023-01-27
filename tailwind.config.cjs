/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          200: "#ebdb9e",
          900: "#3c3d2d",
        },
      },
    },
  },
  plugins: [],
};
