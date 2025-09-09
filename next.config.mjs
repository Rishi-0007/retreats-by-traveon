/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'placehold.co' },
    ]
  },
  experimental: {
    // appDir is default in Next 13+
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
