module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            li: {
              marginTop: '0rem',
              marginBottom: '0rem',
            },
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'none',
            },
            'a:hover': {
              color: theme('colors.blue.800'),
              textDecoration: 'underline',
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
            },
            'li.task-list-item::before': {
              display: 'none',
            },
            input: {
              marginRight: '0.7em',
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
