/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.zamaro.ae",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
