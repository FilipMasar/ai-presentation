/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  devIndicators: false,
  // Remove or update these domains as needed for your deployment
  // allowedDevOrigins: [
  //   "*.macaly.dev",
  //   "*.macaly.app", 
  //   "*.macaly-app.com",
  //   "*.macaly-user-data.dev",
  // ],
};

module.exports = nextConfig;
