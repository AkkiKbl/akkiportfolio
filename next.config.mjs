import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

// Combine the configurations using spread operator
module.exports = withMDX({
  ...nextConfig,
});
