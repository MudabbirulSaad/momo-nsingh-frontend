/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      primary: 'Poppins',
      secondary: 'DM Sans',
      sketch: 'Cabin Sketch',
      jost: 'Jost'
    },
    colors: {
      white: '#FFFFFF',
      black: '#00000',
      primary: '#9C1D11',
      primaryDark: '#4E0E09',
      secondary: '#68120B',
      darkBrown: '#2B1107',
      lightBrown: '#78491D',

    },
    extend: {
      backgroundImage: {
        'hero-image': "url('../img/1.webp')",
        'second-image': "url('../img/2.webp')",
        'third-image': "url('../img/3.png')",
      },
    },
  },
  plugins: [],
}

