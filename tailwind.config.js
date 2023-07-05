/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'model':"url('/src/assets/images/model.png')"
      },
      fontFamily:{
        'bill': ['"Stick No Bills"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

