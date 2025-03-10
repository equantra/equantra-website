import type { NextConfig } from "next";

// Import bundle analyzer conditionally based on environment variable
const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? require('@next/bundle-analyzer')({
      enabled: true,
    })
  : (config: NextConfig) => config;

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'],
    } : false,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'framer-motion',
      'swiper',
      'react-particles',
      'tsparticles',
    ],
  },
  // Improve image performance
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'equantra.in',
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
