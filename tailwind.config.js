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
        primary: {
          DEFAULT: '#C9A168',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
