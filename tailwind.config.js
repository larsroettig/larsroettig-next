module.exports = {
  content: [`./src/**/*.tsx`, `./content/**/*.mdx`],
  theme: {
    color: {
      midnight: '#0e0e12',
    },
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
