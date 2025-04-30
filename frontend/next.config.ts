import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  experimental: {
    serverActions: {},
  },
}

export default nextConfig

