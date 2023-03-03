/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        lgxl: "1200px",
      },
    },
  },
  plugins: [],
};
