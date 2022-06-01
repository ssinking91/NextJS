import NavBar from "./NavBar";

// children(prop) : 하나의 component를 또 다른 component안에 넣을 때 쓸 수 있음
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
