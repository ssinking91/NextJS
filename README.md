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

  - Universal(어디서든 작동한다는 의미) 리액트 어플리케이션의 서버렌더링을 쉽게 구현 할 수 있게 도와주는 간단한 프레임워크

  - pages 폴더 component를 **export default** function을 해야됨

  - pages 폴더 파일명이 실제 url의 이름이 됨
  - pages 폴더 안에 넣을 수 있는 몇가지 예외사항
    - 1. index.js : export default function Home 같은 component(/)
    - 2. jsx를 쓰고있다면 React.js를 import할 필요가 없음
  - next.js는 초기 상태로 pre-rendering을 함
  - hydration : react.js를 프론트엔드 안에서 실행하는 것
    - 1. next.js는 react.js를 백엔드에서 동작시켜서 페이지를 미리 만듬
    - 2. component들을 render 시킨 후, rendering이 끝났을 때 component는 HTML이 됨
    - 3. next.js는 HTML을 페이지의 소스코드에 넣어줌
    - 4. 유저는 자바스크립트와 react.js가 로딩되지 않았더라도 콘텐츠를 볼 수 있게 됨
    - 5. react.js가 로딩 되었을 때, 기본적으로 이미 존재하는 것들과 연결이 되어서 일반적인 react.js 앱이 됨
  - anchor(`<a>`)를 네비게이터에 사용하지 말것 => anchor는 브라우저가 다른페이지로 보내기 위해 전체 페이지를 새로고침 함 / anchor(`<a>`) => Link(href) 변경해서 사용 / anchor(`<a>`)는 css를 위해 사용
  - router : useRouter()
  - styles를 추가하는 방법: 1. .module.css : css모듈 => 평범한 css를 사용할 수 있도록 해줌
    - 1. className을 추가해줄 때, 클래스 이름을 텍스트로 적지 않음 => 자바스크립트 오브젝트에서의 프로퍼티 형식으로 적음
    - 2. 두개 이상읠 clssName을 동일한 엘리먼트에 적용시키는 방법 :
    ```jsx
    className={`
      ${styles.link}
      ${styles.active}
    `}
    ```
  - styles를 추가하는 방법: 2. styled jsx : NextJS 고유의 방법
    - 컴포넌트 내부로 범위가 한정되어(scoped) 적용 => clssName들은 무작위적으로 이름이 바뀜

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

  - styles를 추가하는 방법: 3. Global Styles 추가하는 방법<br/>
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
