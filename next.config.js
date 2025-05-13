/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'n-powerplus.s3.ap-northeast-1.amazonaws.com',
        },
      ],
    },
  };

module.exports = nextConfig 