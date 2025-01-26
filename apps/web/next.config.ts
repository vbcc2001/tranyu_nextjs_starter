import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@tranyu-nextjs-starter/ui"], // 配置 Next.js 需要转译的包
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;


