import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fadadoussama.github.io",
        port: "",
        pathname: "/fashionShop_api/**",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
