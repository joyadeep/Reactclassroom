/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'netflix': " linear-gradient(to bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.3),rgba(0,0,0,0.7)),url('/src/assets/images/netflix.jpg') "
      }
    },
  },
  plugins: [],
}

