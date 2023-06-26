// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_DEFAULT_END_POINT}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
