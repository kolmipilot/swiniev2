/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sofadi': ['Sofadi One', 'sans-serif'], // Dodaj czcionkę Sofadi One
      },
    },
  },
  plugins: [],
}

