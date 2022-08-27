/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    COOKIE_NAME: process.env.COOKIE_NAME,
  },
};

module.exports = nextConfig;
