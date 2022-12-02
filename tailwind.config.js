/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        mono:  ['VT323', 'monospace']
      },
      height:{
        '168': '42rem'
      }
    },
  },
  plugins: [],
};
