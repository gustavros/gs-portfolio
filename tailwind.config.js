/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["Unbounded", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      backgroundImage: {
        "gradient-line":
          "linear-gradient(to left, #121212 2%, #E6E6E6 50%, #121212 98%)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
