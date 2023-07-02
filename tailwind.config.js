/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'model':"url('/src/assets/images/model.png')"
      }
    },
  },
  plugins: [],
}

