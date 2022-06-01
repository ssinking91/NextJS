const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  // redirects : 유저가 URL 변화를 볼 수 있어 API Key를 볼 수 있음
  // 1. source의 URL로 접속할때 destination의 URL로 접속하게 함
  // 2. permanent: 영구적인지 아닌지에 따라, 브라우저나 검색엔진이 이정보를 기억하는지 여부가 결정됨
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },

  // rewrites : 유저가 URL 변화를 볼 수 없어 API Key를 볼 수 없음
  // 즉 유저를 redirect 시키기는 하지만, URL은 변하지 않음
  // source의 URL로 접속할때 destination의 URL로 접속하게 함
  // source와 destination에 들어가는 명칭(/:id)은 동일하게 해줘야 함
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
