/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        code: 'url("/assets/code.png"), auto',
      },
      screens: {
        sm: "480px",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        nuts: ["Grape Nuts", "cursive"]
      },
    },
  },
  plugins: [],
};
