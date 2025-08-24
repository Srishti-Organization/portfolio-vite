/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        meadow: {
          sage: "#B2AC88",
          blush: "#FE828C",
          wildflower: "#F4D785",
          cream: "#DDC6AB",
          terracotta: "#E2725B",
        },
        rustic: {
          dusty: "#DCAE96",
          lavender: "#E6E6FA",
          teal: "#00555A",
          burnt: "#8A3324",
          powder: "#B0E0E6",
        },
        forest: {
          moss: "#7E8C54",
          olive: "#BAB86C",
          mushroom: "#906E58",
          indigo: "#3A4760",
          lilac: "#C8A2C8",
        },
      },
      borderRadius: {
        "xl-tilt": "1.75rem",
      },
      fontWeight: {
        semiboldcustom: 510// custom weight between medium and semibold
      },
    },
  },
  plugins: [],
};