/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/users',
        destination: 'https://coiner.org/api/users',
      },
    ];
  },
};
// next.config.js
// next.config.js
module.exports = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};
