/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'www.smallcitybigpersonality.co.uk',
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'jimvsechno.cz',
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'miro.medium.com',
      },
    ],
  },
};

export default nextConfig;
