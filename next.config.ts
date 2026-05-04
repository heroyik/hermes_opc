import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
  // Ensure that trailing slashes are handled correctly for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
