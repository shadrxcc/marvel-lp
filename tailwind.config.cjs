/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-bg": "rgba(21, 21, 21, 1)",
        "danger": "rgba(237, 29, 36, 1)",
      },
    },
  },
  plugins: [],
};
