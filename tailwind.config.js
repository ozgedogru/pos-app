/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        navy: "#0B192C",
        beige: "#EEEEEE",
        blue: "#1E3E62",
        red: "#B8001F",
      },
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(150px, 2fr))",
      },
    },
  },
  plugins: [],
};
