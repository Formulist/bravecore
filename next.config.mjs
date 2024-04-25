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
          "https://formulist-gateway.onrender.com/graphql",
      },
    ];
  },
};

export default nextConfig;
