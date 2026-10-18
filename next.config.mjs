/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // images never change, keep optimized copies for 31 days
    minimumCacheTTL: 2678400,
  },
}

export default nextConfig
