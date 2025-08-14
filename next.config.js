/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.cashrewards.com.au"],
  },
};

module.exports = nextConfig;