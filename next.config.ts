import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Uncomment for static export build:
  // output: 'export',
  // trailingSlash: true,
  // distDir: 'out',
};

export default nextConfig;
