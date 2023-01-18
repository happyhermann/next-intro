const API_KEY = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 리다이렉트
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
  // 리다이렉트랑 비슷하긴한데 유저가 url을 볼 수 없다
};

module.exports = nextConfig;
