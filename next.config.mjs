/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/blog/direiros-demissao-justa-causa',
        destination: '/blog/direitos-demissao-justa-causa',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
