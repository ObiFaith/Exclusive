/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      white: colors.white,
      black: colors.black, /* text 2 dark */
      'light': '#D37643', /* primary light */
      'white-200': '#FAFAFA',
      'secondary': '#FEFAF1',
      green: '#00FF66',
      blue: {
        100: 'F5F5F5',
        300: '#A0BCE0',
      },
      red: {
        200: '#E07575',
        400: '#DB4444',
      },
      'dark': {
        200: '#7D8184', /* text 2 light */
        400: '#363738', /* primary dark */
      }
    },
    extend: {},
  },
  plugins: [],
}