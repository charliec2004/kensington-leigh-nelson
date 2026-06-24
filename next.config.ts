import type { NextConfig } from "next";

const repoName = "kensington-leigh-nelson";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repoName}` : "",
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        assetPrefix: `/${repoName}/`,
        basePath: `/${repoName}`,
      }
    : {}),
};

export default nextConfig;
