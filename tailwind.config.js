const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      typography: (theme) => ({
        DEFAULT: {
          css: {
            li: {
              marginTop: '0rem',
              marginBottom: '0rem',
            },
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
              code: { color: theme('colors.blue.400') },
            },
            'blockquote > p': {
              color: theme('colors.gray.500'),
            },
            'ul.contains-task-list': {
              marginTop: '1.5rem',
              marginBottom: '3rem',
            },
            'li.task-list-item': {
              height: '2rem',
              paddingLeft: '0',
              display: 'flex',
              alignItems: 'center',
            },
            'li.task-list-item::before': {
              display: 'none',
            },
            input: {
              marginRight: '0.5em',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              borderRadius: '0.25em',
              padding: '0.25em',
            },
            pre: {
              borderWidth: 'thin',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
