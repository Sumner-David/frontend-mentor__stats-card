const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./js/**/*.js', './index.html'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      colors: {
        'primary' : '#aa5cdb',
        'secondary': '#1b1938',
        'dark-blue': '#090b1a',
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.serif],
        'secondary': ['Lexend Deca', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
