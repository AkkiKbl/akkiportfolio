import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */

try {
  const nextConfig = {
    pageExtensions: ["ts", "tsx", "md", "mdx"],
    output: "export",
  };
  export default withMDX(nextConfig);
} catch (e) {
  console.log(e);
}
