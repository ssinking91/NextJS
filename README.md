# โจ NextJS Introduction

<br />

Learning NextJS by building a tiny movie website.

<br />

# ๐ง ์คํ๋ฐฉ๋ฒ

- npx create-next-app@latest

```javascript
cd nextjs-intro

npm i

npm run dev
```

<br />

# ๐  ์ฃผ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

<br/>

### ๐ฅ Next.js

<br/>

- โญ Universal(์ด๋์๋  ์๋ํ๋ค๋ ์๋ฏธ) ๋ฆฌ์กํธ ์ดํ๋ฆฌ์ผ์ด์์ ์๋ฒ๋ ๋๋ง์ ์ฝ๊ฒ ๊ตฌํ ํ  ์ ์๊ฒ ๋์์ฃผ๋ ๊ฐ๋จํ ํ๋ ์์ํฌ

- โญ pages ํด๋ component๋ฅผ **export default** function์ ํด์ผ๋จ

- โญ pages ํด๋ ํ์ผ๋ช์ด ์ค์  url์ ์ด๋ฆ์ด ๋จ
- โญ pages ํด๋ ์์ ๋ฃ์ ์ ์๋ ๋ช๊ฐ์ง ์์ธ์ฌํญ
  1. index.js : export default function Home ๊ฐ์ component(/)
  2. jsx๋ฅผ ์ฐ๊ณ ์๋ค๋ฉด React.js๋ฅผ importํ  ํ์๊ฐ ์์
- โญ next.js๋ ์ด๊ธฐ ์ํ๋ก pre-rendering์ ํจ
- โญ hydration : react.js๋ฅผ ํ๋ก ํธ์๋ ์์์ ์คํํ๋ ๊ฒ
  1. next.js๋ react.js๋ฅผ ๋ฐฑ์๋์์ ๋์์์ผ์ ํ์ด์ง๋ฅผ ๋ฏธ๋ฆฌ ๋ง๋ฌ
  2. component๋ค์ render ์ํจ ํ, rendering์ด ๋๋ฌ์ ๋ component๋ HTML์ด ๋จ
  3. next.js๋ HTML์ ํ์ด์ง์ ์์ค์ฝ๋์ ๋ฃ์ด์ค
  4. ์ ์ ๋ ์๋ฐ์คํฌ๋ฆฝํธ์ react.js๊ฐ ๋ก๋ฉ๋์ง ์์๋๋ผ๋ ์ฝํ์ธ ๋ฅผ ๋ณผ ์ ์๊ฒ ๋จ
  5. react.js๊ฐ ๋ก๋ฉ ๋์์ ๋, ๊ธฐ๋ณธ์ ์ผ๋ก ์ด๋ฏธ ์กด์ฌํ๋ ๊ฒ๋ค๊ณผ ์ฐ๊ฒฐ์ด ๋์ด์ ์ผ๋ฐ์ ์ธ react.js ์ฑ์ด ๋จ
- โญ anchor(`<a>`)๋ฅผ ๋ค๋น๊ฒ์ดํฐ์ ์ฌ์ฉํ์ง ๋ง๊ฒ => anchor๋ ๋ธ๋ผ์ฐ์ ๊ฐ ๋ค๋ฅธํ์ด์ง๋ก ๋ณด๋ด๊ธฐ ์ํด ์ ์ฒด ํ์ด์ง๋ฅผ ์๋ก๊ณ ์นจ ํจ / anchor(`<a>`) => Link(href) ๋ณ๊ฒฝํด์ ์ฌ์ฉ / anchor(`<a>`)๋ css๋ฅผ ์ํด ์ฌ์ฉ
- โญ router : useRouter()

  <br/>

---

  <br/>

- โญ styles๋ฅผ ์ถ๊ฐํ๋ ๋ฐฉ๋ฒ: 1. .module.css : css๋ชจ๋ => ํ๋ฒํ css๋ฅผ ์ฌ์ฉํ  ์ ์๋๋ก ํด์ค

  - 1. className์ ์ถ๊ฐํด์ค ๋, ํด๋์ค ์ด๋ฆ์ ํ์คํธ๋ก ์ ์ง ์์ => ์๋ฐ์คํฌ๋ฆฝํธ ์ค๋ธ์ ํธ์์์ ํ๋กํผํฐ ํ์์ผ๋ก ์ ์
  - 2. ๋๊ฐ ์ด์์  clssName์ ๋์ผํ ์๋ฆฌ๋จผํธ์ ์ ์ฉ์ํค๋ ๋ฐฉ๋ฒ :

```jsx
className={`
  ${styles.link}
  ${styles.active}
`}
```

  <br/>

- โญ styles๋ฅผ ์ถ๊ฐํ๋ ๋ฐฉ๋ฒ: 2. styled jsx : NextJS ๊ณ ์ ์ ๋ฐฉ๋ฒ
  - **์ปดํฌ๋ํธ ๋ด๋ถ๋ก ๋ฒ์๊ฐ ํ์ ๋์ด(scoped) ์ ์ฉ** => clssName๋ค์ ๋ฌด์์์ ์ผ๋ก ์ด๋ฆ์ด ๋ฐ๋

```jsx
<style jsx>{`
  nav {
    background-color: tomato;
  }
  a {
    text-decoration: none;
  }
  .active {
    color: yellow;
  }
`}</style>
```

  <br/>

- โญ styles๋ฅผ ์ถ๊ฐํ๋ ๋ฐฉ๋ฒ: 3. Global Styles ์ถ๊ฐํ๋ ๋ฐฉ๋ฒ

(1) page Global Styles

```jsx
<style jsx global>{`
  nav {
    background-color: tomato;
  }
  a {
    text-decoration: none;
  }
  .active {
    color: yellow;
  }
`}</style>
```

  <br/>

(2) ๐ก \_app.js : NextJS๊ฐ ๋ชจ๋  ํ์ด์ง๋ฅผ ๋ ๋๋ง ํ  ์ ์๊ฒ ํ๋ ์ปดํฌ๋ํธ์ ์ฒญ์ฌ์ง => ์ปค์คํฐ๋ง์ด์ฆ(\_app.js)

- \_app.js์์๋ .module.css๊ฐ ์๋ .css๋ import๊ฐ ๊ฐ๋ฅ
- Component : ๋ ๋๋งํ๊ธธ ์ํ๋ ํ์ด์ง
- pageProps : ๋ ๋๋งํ๊ธธ ์ํ๋ ํ์ด์ง์ getServerSideProps

```jsx
import "../styles/globals.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
```

  <br/>

- \_app.js(์: Google Analytics, ๊ฒ์์์ง, ์คํฌ๋ฆฝํธ ๋ถ์ ๋ฑ)์ ์ต์ํ ํ ์ฌ์ฉ์ ์ํด Layout.js์ปดํฌ๋ํธ๋ฅผ ์ด์ฉํ์ฌ css ๋ณ๊ฒฝ

<br/>

---

<br/>

- โญ Head component ์ด์ฉํ์ฌ title ๋ณ๊ฒฝ

```jsx
import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
```

<br/>

---

<br/>

- โญ public ํด๋ ํ์ผ ๊ฐ์ ธ์ค๊ธฐ

```jsx
<img src="/vercel.svg" />
```

<br/>

---

<br/>

- โญ useState()์ ๊ธฐ๋ณธ state ๊ฐ์ด ๋น ๋ฐฐ์ด๋ก ์ค์ ๋์ด map ํจ์์ ์ค๋ฅ๊ฐ ๋ฐ์ํ์ง ์์
  - index.js

```jsx
const [movies, setMovies] = useState([]);
...
 {movies?.map((movie) => (
    <div key={movie.id}>
      <h4>{movie.original_title}</h4>
    </div>
  ))}
```

<br/>

---

<br/>

- โญ API Key : NextJS๋ฅผ ์ด์ฉํ์ฌ ์จ๊ธฐ๊ธฐ

1. .gitignore์ .env์ด ์ถ๊ฐ

```jsx
.env
```

2. .envํ์ผ ๋ง๋ค๊ธฐ

```jsx
API_KEY=10923b261ba94d897ac6b81148314a3f
```

3. next.config.js ์ค์ 

   - **redirects** : ์ ์ ๊ฐ URL ๋ณํ๋ฅผ ๋ณผ ์ ์์ด API Key๋ฅผ ๋ณผ ์ ์์
   - 1. source์ URL๋ก ์ ์ํ ๋ destination์ URL๋ก ์ ์ํ๊ฒ ํจ
   - 2. permanent: ์๊ตฌ์ ์ธ์ง ์๋์ง์ ๋ฐ๋ผ, ๋ธ๋ผ์ฐ์ ๋ ๊ฒ์์์ง์ด ์ด์ ๋ณด๋ฅผ ๊ธฐ์ตํ๋์ง ์ฌ๋ถ๊ฐ ๊ฒฐ์ ๋จ

   - **rewrites** : ์ ์ ๊ฐ URL ๋ณํ๋ฅผ ๋ณผ ์ ์์ด API Key๋ฅผ ๋ณผ ์ ์์
   - 1. ์ฆ, ์ ์ ๋ฅผ redirect ์ํค๊ธฐ๋ ํ์ง๋ง, URL์ ๋ณํ์ง ์์
   - 2. source์ URL๋ก ์ ์ํ ๋ destination์ URL๋ก ์ ์ํ๊ฒ ํจ
   - 3. source์ destination์ ๋ค์ด๊ฐ๋ ๋ช์นญ(/:id)์ ๋์ผํ๊ฒ ํด์ค์ผ ํจ

```jsx
const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
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
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
```

<br/>

---

<br/>

- โญ getServerSideProps
  1. getServerSideProps์ ์ด๋ฆ์ ๊ณ ์ ์ด๋ฉฐ ๋ค๋ฅธ๊ฑธ๋ก ๋ฐ๊พธ๋ฉด ์๋จ, export ํด์ค์ผ ํจ
  2. getServerSideProps์ ์์ ์ด๋ค ์ฝ๋๋ฅผ ์ฐ๋์ง ๊ฐ์, ๊ทธ ์ฝ๋๋ server์์ ์๋๋จ
  3. ์ฆ, client์ชฝ์ด ์๋๋ผ server์ชฝ์์๋ง ์๋๋จ
  4. API Key๋ ์จ๊ธธ ์ ์์
  5. return์ object๋ props๋ผ๊ณ  ๋ถ๋ฆฌ๋ key ํน์ property๋ฅผ ๊ฐ์ง
  6. object์ props value์๋ ์ํ๋ ๋ฐ์ดํฐ๋ฅผ ๋ฃ์ ์ ์์
  7. ๋ฌด์์ returnํ๋์ง, props๋ก์จ page์๊ฒ ์ ๋ฌ ๋จ

```jsx
// pages/index.js

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
```

<br/>

---

<br/>

- โญ Dynamic URL : URL์ ๋ณ์๋ฅผ ๋ฃ๋ ๋ฐฉ๋ฒ

  - react-router-dom : /movies/:id => NextJS : pages/movies/[id].js
  - pagesํด๋ ์ movies ํด๋๋ฅผ ์์ฑ ํ [๋ณ์].js ํ์ผ์ ๋ง๋ค๋ฉด ๋จ. [ ] (๋๊ดํธ) ํ์

<br/>

1.  next.config.js์ rewrites์ ์ ์

```jsx
module.exports = {

...

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

```

<br/>

2.  index.js์ router.push() ์ ์

    - router.push()์ as๋ฅผ ์ด์ฉํ์ฌ url ์จ๊น

```jsx
import Link from "next/link";
import { useRouter } from "next/router";

...

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
  };

  ...

      <Link
        href={{
          pathname: `/movies/${movie.id}`,
          query: {
            title: movie.original_title,
          },
        }}
        as={`/movies/${movie.id}`}
      >
        <a>{movie.original_title}</a>
      </Link>

  ...

}
```

<br/>

```jsx
import { useRouter } from "next/router";

// ----------- Dynamic URL -----------
export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
```

<br/>

- router.push(url, as, options)

  - url: [ํ์] ๋ผ์ฐํ ํ๋ ค๋ url / string ๋ฐ object ๊ฐ๋ฅ
  - as: [์ ํ] ๋ธ๋ผ์ฐ์  url ๋ฐ์ ๋ณด์ฌ์ง๋ path / **as**๋ฅผ ์ด์ฉํ์ฌ url ์จ๊ธฐ๊ธฐ ๊ฐ๋ฅ
  - options: [์ ํ] ]scroll(๋ผ์ฐํ ํ ์คํฌ๋กค์), shallow, locale ๋ฑ์ ์ต์์ด ์์ต๋๋ค.
  - ์ฃผ์: router.push๋ ์ธ๋ถ url ์ฌ์ฉ์์๋ ์ ํฉํ์ง ์์ต๋๋ค. a tag์ target="\_blank" ๋ฅผ ์ฌ์ฉํ๊ฑฐ๋ window.location์ ์ฌ์ฉํ๋ ๊ฒ์ด ๋ซ์ต๋๋ค.

<br/>

---

<br/>

- โญ Catch All URL : ๋ญ๋  ์บ์นํด๋ด๋ URL
  - [...๋ณ์] ์ง์  : [...params].js => router.query.params๋ก ๋ถ๋ฌ์ฌ ์ ์๊ณ , ๋ฐฐ์ด ํ์์
  - ๋ฐฑ์๋์์ pre-render ๋๊ธฐ๋๋ฌธ์, server์์ router.query.params๋ ์์ง ์กด์ฌํ์ง ์์ ์๋ฌ๊ฐ ๋จ
  - ์ฆ, ์ปดํฌ๋ํธ ๋ด๋ถ์์ router๋ฅผ ์ฌ์ฉํ๋ฉด router๋ ํ๋ก ํธ์์๋ง ์คํ์ด ๋จ

```jsx
import Seo from "../../components/Seo";
import { useRouter } from "next/router";

// ----------- Catch All URL -----------
export default function Detail({ params }) {
  const router = useRouter();
  // ๋ฐฑ์๋์์ pre-render ๋๊ธฐ๋๋ฌธ์
  // server์ router.query.params๋ ์์ง ์กด์ฌํ์ง ์์ ์๋ฌ๊ฐ ๋จ
  // ์ฆ, ์ปดํฌ๋ํธ ๋ด๋ถ์์ router๋ฅผ ์ฌ์ฉํ๋ฉด router๋ ํ๋ก ํธ์์๋ง ์คํ์ด ๋จ
  // const [title, id] = router.query.params; => ๊ทธ๋์ ์ด ๋ฌธ๋ฒ์ ์ธ์๊ฐ ์์
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// 1. URL์ ๋ค์ด์๋ ์ํ์ ๋ชฉ์ ์ฌ์ฉํด์ ๊ตฌ๊ธ SEO์ ์ต์ ํ ํ  ๋
// 2. ์ ์ ๊ฐ ์ ์ํ๊ธฐ ์  ํญ ์ ๋ชฉ์ ๋ฐ๊ฟ๋
// getServerSideProps๋ฅผ ์คํ
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
```

<br/>

---

<br/>

- โญ 404์๋ฌ ํ์ด์ง : 404.js => pagesํด๋ ์ 404.js ํ์ผ ์์ฑ
