import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  // router.push(url, as, options)
  const handleOnClick = (id, title) => {
    // ----------- Dynamic URL -----------
    // router.push(
    //   {
    //     pathname: `/movies/${id}`,
    //     query: {
    //       title,
    //     },
    //   },
    //   `/movies/${id}`
    // );

    // ----------- Catch All URL -----------
    router.push(`/movies/${title}/${id}`);
  };

  // HTML 4.01 요건을 보면 <a> 요소는 인라인 요소만 감쌀 수 있도록 규정되어있다.
  // <div>는 블록 요소이므로 <a> 태그 안에 위치시키면 안 된다.
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => handleOnClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            {/* <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link> */}
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// getServerSideProps
// 1. getServerSideProps의 이름은 고정이며 다른걸로 바꾸면 안됨
// 2. getServerSideProps의 안에 어떤 코드를 쓰던지 간에, 그 코드는 server에서 작동됨
// 3. 즉, client쪽이 아니라 server쪽에서만 작동됨
// 4. API Key도 숨길 수 있음
// 5. return의 object는 props라고 불리는 key 혹은 property를 가짐
// 6. object안 props value에는 원하는 데이터를 넣을 수 있음
// 7. 무엇을 return하던지, props로써 page에게 전달 됨
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
