// next.config.js
const withPlugins = require(`next-compose-plugins`);
const withPWA = require(`next-pwa`);
const optimizedImages = require(`next-optimized-images`);
const withBundleAnalyzer = require(`@next/bundle-analyzer`);

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: [`en`],
    defaultLocale: `en`,
  },
  webpack: (config) => {
    Object.assign(config.resolve.alias, {
      react: `preact/compat`,
      'react-dom/test-utils': `preact/test-utils`,
      'react-dom': `preact/compat`,
    });

    return config;
  },
};

module.exports = withPlugins(
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === `true`,
    }),
    withPWA({
      pwa: {
        disable: process.env.NODE_ENV === `development`,
        register: true,
        dest: `public`,
      },
    }),
    optimizedImages,
    {
      inlineImageLimit: 8192,
      loader: `responsive-loader`,
      handleImages: [`jpeg`, `png`, `webp`],
      removeOriginalExtension: false,
      optimizeImages: true,
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      responsive: {
        // eslint-disable-next-line global-require
        adapter: require('responsive-loader/sharp'),
      },
      pngquant: false,
      webp: {
        preset: `default`,
        quality: 75,
      },
    },
  ],
  nextConfig,
);
