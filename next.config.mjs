/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_GATEWAY_URL: process.env.NEXT_PUBLIC_GATEWAY_URL,
  },
  rewrites: async () => {
    return [
      {
        source: "/api/graphql",
        destination:
          process?.env?.NEXT_PUBLIC_GATEWAY_URL ??
          "http://localhost:8080/graphql",
      },
    ];
  },
};

export default nextConfig;
