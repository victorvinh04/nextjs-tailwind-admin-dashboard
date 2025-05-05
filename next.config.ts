import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
    experimental:{
      dynamicIO: true,
      authInterrupts: true
    },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.resolve.alias['@/features'] = path.join(__dirname, 'src/features');
    return config;
  },
};

export default nextConfig;
