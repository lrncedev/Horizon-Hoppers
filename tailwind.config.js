/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      	colors: {
				'dodger-blue': '#0791be',
				'watermelon-red': '#f56960', 
				'midnight': '#101F46'
			},
      fontFamily : {
        baloo: ['Baloo 2', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: [ 'Raleway', 'sans-serif' ],
				opensans: [ 'Open Sans', 'sans-serif' ]
      },
    },
  },
  plugins: [],
}


