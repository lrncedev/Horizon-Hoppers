/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      fontFamily : {
        baloo: ['Baloo 2', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

