/* eslint-disable import/no-anonymous-default-export */
// next.config.mjs
export default {
  distDir: 'build', // Custom build directory

  async redirects() {
    return [
      {
        source: '/:path*',  // Matches all paths
        destination: '/',   // Redirect all paths to homepage
        permanent: true,    // Status code 308 (permanent redirect)
      },
    ]
  },

  // Set base path if your site is served from a subdirectory on the domain
  // basePath: '/subdirectory', 
}
