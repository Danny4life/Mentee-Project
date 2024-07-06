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
        'grey-4': '#F8F9FD',
      },

      fontFamily: {
        logo : ["Hanalei Fill"],
      },

      spacing: {
        '106': '106px',
        '326': '326px',
        '789': '789px'
      },
    },
  },
  plugins: [],
}

