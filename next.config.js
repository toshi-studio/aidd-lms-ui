const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? '/aidd-lms-ui' : '',
  assetPrefix: isProd ? '/aidd-lms-ui/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/aidd-lms-ui' : ''
  }
}

module.exports = nextConfig