import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 85 is used by the Trajetória portrait; 75 is the Next.js default.
    qualities: [75, 85],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
