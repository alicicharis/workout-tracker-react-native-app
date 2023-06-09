/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(109, 99, 255)",
        overlayColor: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
