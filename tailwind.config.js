module.exports = {
  purge: [`./src/**/*.tsx`, `./content/**/*.mdx`],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        default: {
          css: {
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require(`@tailwindcss/typography`)],
};
