import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // For production build, uncomment the following lines:
  // output: 'export',
  // trailingSlash: true,
  // distDir: 'out',
};

export default nextConfig;
