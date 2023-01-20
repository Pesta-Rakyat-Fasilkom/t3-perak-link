"/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n}\n\nmodule.exports = nextConfig\n"

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path',
        destination: '/api/:path', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
}
