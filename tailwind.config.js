const colors = require('tailwindcss/colors');



module.exports = {
  content: [`./src/**/*.tsx`, `./content/**/*.mdx`],
  theme: {
    extend: {
      typography: {
        xl: {
          css: {
            pre: {
              padding: '0.75rem 0',
              lineHeight: '2.25',
              fontSize: '1rem',
            },
          },
        },
        lg: {
          css: {
            code: {
              '> .line': {
                borderLeft: `2px solid transparent`,
              },
            },
          },
        },
        DEFAULT: {
          css: {

            code: {
              color: '#86e1fc',
              '&::before': {
                content: `"" !important`,
              },
              '&::after': {
                content: `"" !important`,
              },
              fontWeight: 'normal',
            },
            '[data-rehype-pretty-code-fragment]:nth-of-type(2) pre': {
              '.line::before': {
                content: 'counter(line)',
                counterIncrement: 'line',
                display: 'inline-block',
                width: '1rem',
                marginRight: '1rem',
                textAlign: 'right',
                color: colors.slate[600],
              },

              '.line--highlighted::before': {
                color: colors.slate[400],
              },
            },
            pre: {
              marginTop: 0,
              opacity: 0.98,
              background: 'rgba(24, 24, 27,0.95)',
              padding: '0.75rem 0',
              lineHeight: 2,

              '> code': {
                display: 'grid',
                counterReset: 'line',

                '.word': {
                  background: 'rgba(200,200,255,0.15)',
                  padding: '0.25rem',
                  borderRadius: '0.25rem',
                },
                '> .line': {
                  padding: '0 1.25rem',
                  borderLeft: `2px solid transparent`,
                },
                '> .line.line--highlighted': {
                  background: 'rgba(24, 24, 27,0.9)',
                  borderLeftColor: colors.blue[400],
                },
              },
            },
            ':not(pre) > code': {
              background: 'rgba(200,200,255,0.1)',
              color:'rgba(24, 24, 27,0.95)',
              padding: '0.25rem',
              fontSize: '0.95rem !important',
              borderRadius: '0.25rem',
            },
          },
        },
      },
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
};
