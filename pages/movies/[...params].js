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

export function getServerSideProps({ params: { params } }) {
  // getServerSideProps() => 서버에서 확인 가능
  // console.log(ctx);
  return {
    props: {
      params,
    },
  };
}
