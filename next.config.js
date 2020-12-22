// next.config.js
const withPlugins = require(`next-compose-plugins`);
const withPWA = require(`next-pwa`);
const optimizedImages = require(`next-optimized-images`);
const withBundleAnalyzer = require(`@next/bundle-analyzer`);
const withPreact = require(`next-plugin-preact`);

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins(
  [
    withPreact(),
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
      pngquant: false,
      webp: {
        preset: `default`,
        quality: 75,
      },
    },
  ],
  nextConfig,
);
