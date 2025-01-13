/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: ["./app/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        shimer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimer: "shimmer 1.5s infinite",
      }
    },
  },
  plugins: [],
};

