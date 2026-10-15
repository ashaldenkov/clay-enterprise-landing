/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/**',
      },
    ],
    // images never change, keep optimized copies for 31 days
    minimumCacheTTL: 2678400,
  },
}

export default nextConfig
