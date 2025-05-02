/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  outputFileTracingRoot: __dirname, // Necessary for standalone output to locate dependencies
  experimental: {
    // Enables edge compatibility and avoids legacy issues
    appDir: true,
  },
  // Helpful for Azure or containerized environments
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;



