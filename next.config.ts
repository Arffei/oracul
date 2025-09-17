import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: true,
  },
}

module.exports = nextConfig
