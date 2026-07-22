import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves project sites below /<repository>. The workflow sets
  // this dynamically, while the Sites build continues to use the root path.
  output: process.env.GITHUB_ACTIONS ? "export" : undefined,
  basePath: process.env.PAGES_BASE_PATH || "",
  assetPrefix: process.env.PAGES_BASE_PATH || "",
  trailingSlash: Boolean(process.env.GITHUB_ACTIONS),
  images: { unoptimized: true },
  typescript: process.env.GITHUB_ACTIONS
    ? { tsconfigPath: "tsconfig.pages.json" }
    : undefined,
};

export default nextConfig;
