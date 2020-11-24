const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [
    './src/**/*.[jt]sx?',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover', 'focus', 'first'],
    },
  },
  plugins: [],
}
