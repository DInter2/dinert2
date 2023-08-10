/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.intranet.bombeiros.pe.gov.br',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],

    domains: ['lh3.google.com', "s3.amazonaws.com", "lh3.googleusercontent.com", "via.placeholder.com"],
  },
  experimental: {
    appDir: true,
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  //   domínios: ["lh3.google.com"],
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   formatos: ['imagem/png'],
}

module.exports = nextConfig
