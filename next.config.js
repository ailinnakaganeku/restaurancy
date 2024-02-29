/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
     serverActions: {
      allowedOrigins: ["my-proxy.com", "*.my-proxy.com"],
    },
  },
};

module.exports = nextConfig;
