// next.config.js
const withPlugins = require(`next-compose-plugins`);
const withPWA = require(`next-pwa`);
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
  },
  async redirects() {
    return [
      {
        source: '/how-to-create-a-graph-ql-endpoint-for-magento-2-3',
        destination: '/how-to-create-a-graph-ql-endpoint-for-magento', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/how-to-create-a-graph-ql-mutation-endpoint-for-magento-2-3',
        destination: '/how-to-create-a-graph-ql-mutation-endpoint-for-magento', // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};

const withBundleAnalyzer = require(`@next/bundle-analyzer`)({
  enabled: process.env.ANALYZE === `true`,
});

module.exports = withPlugins(
  [
    withPWA({
      pwa: {
        disable: process.env.NODE_ENV === `development`,
        register: true,
        dest: `public`,
      },
    }),
    [withBundleAnalyzer],
    [withContentlayer()],
  ],
  nextConfig,
);
