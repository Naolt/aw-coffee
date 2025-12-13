import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@sanity/ui', '@sanity/vision', 'sanity'],
};

export default nextConfig;
