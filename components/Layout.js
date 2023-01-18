import NavBar from "./NavBar";

export default function Layout({ children }) {
  // children은 하나의 Component를 다른 Component안에 넣을 때 쓸 수 있다
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
