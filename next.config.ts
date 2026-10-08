import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "jqrwjkcknumxejgesmxe.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "towvnjmieprruexvhadc.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
