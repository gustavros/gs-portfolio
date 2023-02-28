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

      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, top: "40px" }, // from
          "100%": { opacity: 1, top: "0" }, // to
        },
      },

      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
