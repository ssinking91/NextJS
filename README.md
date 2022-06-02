# ✨ NextJS Introduction

<br />

Learning NextJS by building a tiny movie website.

<br />

# 🔧 실행방법

- npx create-next-app@latest

```javascript
cd nextjs-intro

npm i

npm run dev
```

<br />

# 🛠 주요 라이브러리

<br/>

- Next.js

  - ⭐ Universal(어디서든 작동한다는 의미) 리액트 어플리케이션의 서버렌더링을 쉽게 구현 할 수 있게 도와주는 간단한 프레임워크

  - ⭐ pages 폴더 component를 **export default** function을 해야됨

  - ⭐ pages 폴더 파일명이 실제 url의 이름이 됨
  - ⭐ pages 폴더 안에 넣을 수 있는 몇가지 예외사항
    - 1. index.js : export default function Home 같은 component(/)
    - 2. jsx를 쓰고있다면 React.js를 import할 필요가 없음
  - ⭐ next.js는 초기 상태로 pre-rendering을 함
  - ⭐ hydration : react.js를 프론트엔드 안에서 실행하는 것
    - 1. next.js는 react.js를 백엔드에서 동작시켜서 페이지를 미리 만듬
    - 2. component들을 render 시킨 후, rendering이 끝났을 때 component는 HTML이 됨
    - 3. next.js는 HTML을 페이지의 소스코드에 넣어줌
    - 4. 유저는 자바스크립트와 react.js가 로딩되지 않았더라도 콘텐츠를 볼 수 있게 됨
    - 5. react.js가 로딩 되었을 때, 기본적으로 이미 존재하는 것들과 연결이 되어서 일반적인 react.js 앱이 됨
  - ⭐ anchor(`<a>`)를 네비게이터에 사용하지 말것 => anchor는 브라우저가 다른페이지로 보내기 위해 전체 페이지를 새로고침 함 / anchor(`<a>`) => Link(href) 변경해서 사용 / anchor(`<a>`)는 css를 위해 사용
  - router : useRouter()
  - ⭐ styles를 추가하는 방법: 1. .module.css : css모듈 => 평범한 css를 사용할 수 있도록 해줌
    - 1. className을 추가해줄 때, 클래스 이름을 텍스트로 적지 않음 => 자바스크립트 오브젝트에서의 프로퍼티 형식으로 적음
    - 2. 두개 이상읠 clssName을 동일한 엘리먼트에 적용시키는 방법 :
    ```jsx
    className={`
      ${styles.link}
      ${styles.active}
    `}
    ```
  - ⭐ styles를 추가하는 방법: 2. styled jsx : NextJS 고유의 방법
    - **컴포넌트 내부로 범위가 한정되어(scoped) 적용** => clssName들은 무작위적으로 이름이 바뀜

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

  - ⭐ styles를 추가하는 방법: 3. Global Styles 추가하는 방법
    <br/>

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

  (2) \_app.js : NextJS가 모든 페이지를 렌더링 할 수 있게 하는 컴포넌트의 청사진 => 커스터마이즈(\_app.js)

  - \_app.js에서는 .module.css가 아닌 .css도 import가 가능
  - Component : 렌더링하길 원하는 페이지
  - pageProps : 렌더링하길 원하는 페이지의 getServerSideProps

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

- \_app.js(예: Google Analytics, 검색엔진, 스크립트 분석 등)의 최소화 한 사용을 위해 Layout.js컴포넌트를 이용하여 css 변경

<br/>

- ⭐ Head component 이용하여 title 변경

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

- public 폴더 파일 가져오기

```jsx
<img src="/vercel.svg" />
```

- useState()의 기본 state 값이 빈 배열로 설정되어 map 함수의 오류가 발생하지 않음
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

- ⭐ API Key : NextJS를 이용하여 숨기기
- 1. .gitignore에 .env이 추가

```jsx
.env
```

- 2. .env파일 만들기

```jsx
API_KEY=10923b261ba94d897ac6b81148314a3f
```

- 3. next.config.js 설정

  - **redirects** : 유저가 URL 변화를 볼 수 있어 API Key를 볼 수 있음
  - 1. source의 URL로 접속할때 destination의 URL로 접속하게 함
  - 2. permanent: 영구적인지 아닌지에 따라, 브라우저나 검색엔진이 이정보를 기억하는지 여부가 결정됨

  - **rewrites** : 유저가 URL 변화를 볼 수 없어 API Key를 볼 수 없음
  - 1. 즉, 유저를 redirect 시키기는 하지만, URL은 변하지 않음
  - 2. source의 URL로 접속할때 destination의 URL로 접속하게 함
  - 3. source와 destination에 들어가는 명칭(/:id)은 동일하게 해줘야 함

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

- ⭐ getServerSideProps
  - 1. getServerSideProps의 이름은 고정이며 다른걸로 바꾸면 안됨, export 해줘야 함
  - 2. getServerSideProps의 안에 어떤 코드를 쓰던지 간에, 그 코드는 server에서 작동됨
  - 3. 즉, client쪽이 아니라 server쪽에서만 작동됨
  - 4. API Key도 숨길 수 있음
  - 5. return의 object는 props라고 불리는 key 혹은 property를 가짐
  - 6. object안 props value에는 원하는 데이터를 넣을 수 있음
  - 7. 무엇을 return하던지, props로써 page에게 전달 됨

```jsx
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

- ⭐ Dynamic URL : URL에 변수를 넣는 방법

  - react-router-dom : /movies/:id => NextJS : pages/movies/[id].js
  - pages폴더 안 movies 폴더를 생성 후 [변수].js 파일을 만들면 됨. [ ] (대괄호) 필수

- 1. next.config.js의 rewrites에 정의

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

- 2. index.js의 router.push() 정의
  - router.push()의 as를 이용하여 url 숨김

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

- router.push(url, as, options)

  - url: [필수] 라우팅 하려는 url / string 및 object 가능
  - as: [선택] 브라우저 url 바에 보여지는 path / **as**를 이용하여 url 숨기기 가능
  - options: [선택] ]scroll(라우팅 후 스크롤업), shallow, locale 등의 옵션이 있습니다.
  - 주의: router.push는 외부 url 사용시에는 적합하지 않습니다. a tag의 target="\_blank" 를 사용하거나 window.location을 사용하는 것이 낫습니다.

<br/>

- ⭐ Catch All URL : 뭐든 캐치해내는 URL
  - [...변수] 지정 : [...params].js => router.query.params로 불러올 수 있고, 배열 형식임
  - 백엔드에서 pre-render 되기때문에, server에서 router.query.params는 아직 존재하지 않아 에러가 남
  - 즉, 컴포넌트 내부에서 router를 사용하면 router는 프론트에서만 실행이 됨

```jsx
import Seo from "../../components/Seo";
import { useRouter } from "next/router";

// ----------- Catch All URL -----------
export default function Detail({ params }) {
  const router = useRouter();
  // 백엔드에서 pre-render 되기때문에
  // server에 router.query.params는 아직 존재하지 않아 에러가 남
  // 즉, 컴포넌트 내부에서 router를 사용하면 router는 프론트에서만 실행이 됨
  // const [title, id] = router.query.params; => 그래서 이 문법은 쓸수가 없음
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// 1. URL에 들어있는 영화제목을 사용해서 구글 SEO에 최적화 할 때
// 2. 유저가 접속하기 전 탭 제목을 바꿀때
// getServerSideProps를 실행
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
```

- ⭐ 404에러 페이지 : 404.js => pages폴더 안 404.js 파일 생성
