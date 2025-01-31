import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Other Next.js config options if you have any
};

// Apply the MDX configuration
const withMDXConfig = mdx({
  extension: /\.mdx?$/,
  options: {},
});

// Use `withMDXConfig` to wrap the nextConfig
module.exports = withMDXConfig(nextConfig);
