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
        'blue-2': '#2B669F',
        'blue-3': '#56CCf2',
        'blue-4': '#0B86CA',
        'blue-5': '#D1E9FF',
        'green-1': '#D1FADF',
        'green-2': '#27AE60',
        'Success': '#D1FADF',
        'bright': '#D31F61',
        'blue-100': '#D1E9FF',
        'grey-3': '#828282',
        'grey-4': '#F8F9FD',
        'black-0': '#000000',
        'orange-1': '#FEC84B',
        'orange-3': '#FEF0C7',

      },

      fontFamily: {
        logo : ["Hanalei Fill"],
      },

      spacing: {
        '106': '106px',
        '326': '326px',
        '789': '789px',
      },

      boxShadow: {
        '3xl': '0 6px 16px 0px #00000029',
      },

    },
  },
  plugins: [],
}

