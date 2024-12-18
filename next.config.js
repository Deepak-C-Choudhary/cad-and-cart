/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dogapi.dog"], // Ensure image domains are whitelisted
  },
};

module.exports = nextConfig;
