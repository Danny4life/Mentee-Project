/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#2F80ED",
          2: " #2563EB",
          3: "#E2E8F0",
          4: "#CBD5E1",
        },
        black: {
          1: "#0F172A",
          2: "#475569",
        },
      },
    },
  },
  plugins: [],
};
