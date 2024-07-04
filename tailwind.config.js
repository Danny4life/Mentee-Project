/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-1': '#2F80ED',
        'green-2': '#27AE60',
        'Success': '#D1FADF',
        'blue-100': '#D1E9FF',
        'grey-3': '#828282',
      },

      fontFamily: {
        logo : ["Hanalei Fill"],
      }
    },
  },
  plugins: [],
}

