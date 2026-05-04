import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = isGitHubActions && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
  // Ensure that trailing slashes are handled correctly for GitHub Pages
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
