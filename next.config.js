// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      imagesFolder: `src/images`,
      inlineImageLimit: 8192,
      handleImages: ['jpeg', 'png', 'webp'],
      removeOriginalExtension: false,
      optimizeImages: true,
      optimizeImagesInDev: true,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      webp: {
        preset: 'default',
        quality: 75,
      },
    },
  ],
]);
