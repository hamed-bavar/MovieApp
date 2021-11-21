const withImages = require("next-images");

/** @type {import('next').NextConfig} */
// module.exports = withTypescript(
//   withSass({
//     reactStrictMode: true,

//     cssModules: true,
//     async redirects() {
//       return [
//         {
//           source: '/about',
//           destination: '/',
//           permanent: true,
//         },
//       ]
//     },
//   })
// );

module.exports = {
  images: {
    domains: ["image.tmdb.org", "localhost", "reverse-proxy-movie-app.herokuapp.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/popular/1",
        permanent: false,
      },
    ];
  },
};
