module.exports = {
  theme: {
    screens: {
      md: '640px',
      lg: '1024px',
      xl: '1500px',
    },

    extend: {
      zIndex: {
        '-10': '-10',
      },
      
      fontSize: {
        xl: '1.375rem', // 22px
        '2xl': '1.5625rem', // 25px
        '3xl': '1.875rem', // 30px
        '4xl': '2.5rem', // 40px
        '5xl': '3.125rem', // 50px
        '6xl': '3.75rem', // 60px
        '7xl': '4.375rem', // 70px
      },
      gridTemplateRows: {
        'max-content': 'max-content',
      },
      spacing: {
        '5vw': '5vw', // pull featured sections and navbar in the margin
        '8vw': '8vw', // positions hero img inside the margin
        '10vw': '10vw', // page margin
      },
      height: {
        hero: 'min(60rem, calc(100vh - 10rem))', // screen - navbar height (lg: only)
      },
      maxWidth: {
        '8xl': '96rem',
      },
      maxHeight: {
        '50vh': '50vh', // max height for medium size hero images
        '75vh': '75vh', // max height for giant size hero images
      },
      rotate: {
        '-135': '-135deg',
        135: '135deg',
      },

      typography: theme => {
        // some fontSizes return [size, props], others just size :/
        const fontSize = size => {
          const result = theme(`fontSize.${size}`)
          return Array.isArray(result) ? result[0] : result
        }

        const breakout = {
          marginLeft: 0,
          marginRight: 0,
          gridColumn: '2 / span 10',
        }

        return {
          // DEFAULT only holds shared stuff and not the things that change
          // between light/dark
          DEFAULT: {
            css: [
              {
                '> *': {
                  gridColumn: '1 / -1',

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    gridColumn: '3 / span 8',
                  },
                },
                p: {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                  fontSize: fontSize('lg'),
                },
                '> div': {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                  fontSize: fontSize('lg'),
                },
                a: {
                  color: '#4c3399',
                  textDecoration: 'none',
                },
                'a:hover,a:focus': {
                  textDecoration: 'underline',
                  outline: 'none',
                },
                strong: {
                  fontWeight: theme('fontWeight.medium'),
                  fontSize: fontSize('lg'),
                },
                hr: {
                  marginTop: theme('spacing.8'),
                  marginBottom: theme('spacing.16'),
                },
                pre: {
                  color: 'var(--base05)',
                  backgroundColor: 'var(--base00)',
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                  marginLeft: `-${theme('spacing.10vw')}`,
                  marginRight: `-${theme('spacing.10vw')}`,
                  padding: theme('spacing.8'),
                  borderRadius: 0,

                  '> code': {
                    display: 'grid',
                    counterReset: 'line',

                    '.word': {
                      background: '#023751',
                      padding: '0.25rem',
                      borderRadius: '0.25rem',
                    },
                    '> .line': {
                      padding: '0 1.25rem',
                      borderLeft: `2px solid transparent`,
                    },
                    '> .line.line--highlighted': {
                      background: '#023751',
                      borderLeftColor: theme('colors.blue.400'),
                    },
                  },

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    borderRadius: theme('borderRadius.lg'),
                    ...breakout,
                  },
                },
                '.embed': {
                  position: 'relative',
                  marginLeft: '-10vw',
                  marginRight: '-10vw',
                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    ...breakout,
                  },
                },
                '.embed > div': {
                  height: '0px',
                },
                '.embed > div > iframe': {
                  height: '100% !important',
                  width: '100% !important',
                  top: '0',
                  left: '0',
                  position: 'absolute',
                  border: 'none',
                  borderRadius: '0 !important',
                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    borderRadius: '0.5rem !important',
                  },
                },
                ul: {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                },
                ol: {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                },
                'h1, h2, h3, h4, h5, h6': {
                  marginTop: 0,
                  marginBottom: 0,
                  fontWeight: theme('fontWeight.normal'),

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontWeight: theme('fontWeight.medium'),
                  },
                },
                // tailwind doesn't stick to this property order, so we can't make 'h3' overrule 'h2, h3, h4'
                'h1, h2': {
                  fontSize: fontSize('2xl'),
                  marginTop: theme('spacing.20'),
                  marginBottom: theme('spacing.10'),
                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('3xl'),
                  },
                },
                h3: {
                  fontSize: fontSize('xl'),
                  marginTop: theme('spacing.16'),
                  marginBottom: theme('spacing.10'),
                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('2xl'),
                  },
                },
                'h4, h5, h6': {
                  fontSize: fontSize('lg'),
                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('xl'),
                  },
                },
                img: {
                  // images are wrapped in <p>, which already has margin
                  marginTop: 0,
                  marginBottom: 0,
                  borderRadius: theme('borderRadius.lg'),
                },
                blockquote: {
                  fontWeight: theme('fontWeight.normal'),
                  border: 'none',
                  borderRadius: theme('borderRadius.lg'),
                  padding: theme('spacing.8'),
                  marginTop: 0,
                  marginBottom: theme('spacing.10'),
                },
                'blockquote > :last-child': {
                  marginBottom: 0,
                },
              },
            ],
          },
          // use prose-light instead of default, so it's easier to see theme differences
          light: {
            css: [
              {
                color: theme('colors.gray.500'),
                a: {
                  color: theme('colors.team.current'),
                },
                strong: {
                  color: theme('colors.black'),
                },
                hr: {
                  borderColor: theme('colors.gray.200'),
                },
                code: {
                  color: theme('colors.gray.800'),
                },
                'h1, h2, h3, h4, h5, h6': {
                  color: theme('colors.black'),
                },
                blockquote: {
                  color: theme('colors.gray.500'),
                  backgroundColor: theme('colors.gray.100'),
                },
                'thead, tbody tr': {
                  borderBottomColor: theme('colors.gray.200'),
                },
              },
            ],
          },
          dark: {
            css: [
              {
                color: theme('colors.blueGray.500'),
                a: {
                  color: theme('colors.team.current'),
                },
                strong: {
                  color: theme('colors.white'),
                },
                hr: {
                  borderColor: theme('colors.gray.600'),
                },
                code: {
                  color: theme('colors.gray.100'),
                },
                'h1, h2, h3, h4, h5, h6': {
                  color: theme('colors.white'),
                },
                blockquote: {
                  color: theme('colors.blueGray.500'),
                  backgroundColor: theme('colors.gray.800'),
                },
                'thead, tbody tr': {
                  borderBottomColor: theme('colors.gray.600'),
                },
              },
            ],
          },
        };
      },
    },
  },
  purge: {
    mode: 'layers',
    enabled: process.env.NODE_ENV === 'production',
    content: [`./src/**/*.tsx`, `./content/**/*.mdx`],
  },
  plugins: [require('@tailwindcss/typography')],
}