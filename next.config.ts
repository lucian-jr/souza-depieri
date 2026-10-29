import type { NextConfig } from "next";
import { allowIndexing } from "./src/lib/indexing";

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
  async headers() {
    if (allowIndexing()) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
};

export default nextConfig;
