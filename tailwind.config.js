/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // This enables dark mode to be toggled via a class
  theme: {
    extend: {},
  },
  plugins: [],
}