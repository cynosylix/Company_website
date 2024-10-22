/* eslint-disable import/no-anonymous-default-export */
// next.config.mjs
export default {
    async redirects() {
      return [
        {
          source: '/:path*',  // Matches all paths
          destination: '/',  // Redirect to the index.html
          permanent: true,  // Status code 308 (permanent redirect)
        },
      ]
    },
  }
  