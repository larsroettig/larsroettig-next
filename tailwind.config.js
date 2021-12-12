module.exports = {
  content: [`./src/**/*.tsx`, `./content/**/*.mdx`],
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

  plugins: [require(`@tailwindcss/typography`)],
};
