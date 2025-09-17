/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tailwindcss.com'],
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  }
}

module.exports = nextConfig
