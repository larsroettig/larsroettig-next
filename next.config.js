// next.config.js
const withPlugins = require(`next-compose-plugins`);
const withPWA = require(`next-pwa`);
const withPreact = require(`next-plugin-preact`);
const optimizedImages = require(`next-optimized-images`);

const nextConfig = {
  reactStrictMode: true,
  future: {
    webpack5: true
  }
};

const withBundleAnalyzer = require(`@next/bundle-analyzer`)({
  enabled: process.env.ANALYZE === `true`,
});

module.exports = withPlugins(
  [
    withPreact(),
    withPWA({
      pwa: {
        disable: process.env.NODE_ENV === `development`,
        register: true,
        dest: `public`,
      },
    }),
    [withBundleAnalyzer],
    optimizedImages,
    {
      inlineImageLimit: 8192,
      loader: `responsive-loader`,
      handleImages: [`jpeg`, `png`, `webp`],
      removeOriginalExtension: true,
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
        adapter: require(`responsive-loader/sharp`),
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
