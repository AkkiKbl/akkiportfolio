// next.config.js or next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations
  output: "export", // This is the CRUCIAL line
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
