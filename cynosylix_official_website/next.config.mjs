/* eslint-disable import/no-anonymous-default-export */

// next.config.mjs
export default {
  distDir: 'build', // Custom build directory

  async redirects() {
    return [
      {
        source: '/:path*',  // Matches all paths
        destination: '/',   // Redirect to the index.html
        permanent: true,    // Status code 308 (permanent redirect)
      },
    ]
  },
}
