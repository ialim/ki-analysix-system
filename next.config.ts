import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel serves the application at the domain root and optimizes the
  // framework build automatically.
  images: { unoptimized: true },
};

export default nextConfig;
