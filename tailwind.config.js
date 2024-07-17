/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< HEAD
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage:{
        'background': "url('./images/bg.jpg')"
      }
=======
    extend: {

      maxWidth: {
        '8xl': '547px',
      },
      fontSize: {
        'xm': '0.6rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
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
<<<<<<< HEAD
        'grey-4': '#F8F9FD',
        'black-0': '#000000',
        'orange-1': '#FEC84B',
        'orange-3': '#FEF0C7',
        customGray: "#828282",
        customBlue: "#2F80ED",
        customBabyBlue: "#56CCF2",
        customGreen: "#D1FADF",
        customText: "#2F80ED",
        customGreenText: "#32D583",
=======
        'black-1': '#101828',
        
>>>>>>> kingsley

      },

      fontFamily: {
        logo : ["Hanalei Fill"],
<<<<<<< HEAD
        inter: ["Inter", "sans-serif"],
        hanalei: ["Hanalei Fill", "cursive"],
      },

      spacing: {
        '106': '106px',
        '326': '326px',
        '789': '789px',
      },

      boxShadow: {
        '3xl': '0 6px 16px 0px #00000029',
      },
      
=======
        inter: ['Inter', 'sans-serif'],
      }
>>>>>>> kingsley
>>>>>>> 46c95e312480a8f3a29b93bb3a22235c706db3a0
    },
  },
  plugins: [],
}

