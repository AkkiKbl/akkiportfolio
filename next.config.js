import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

try {
  export default withMDX(nextConfig);
} catch (err) {
  console.error("Error exporting configuration: ", err);
  throw new Error("Configuration export failed.");
}
