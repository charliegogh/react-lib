import {
  HashRouter,
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate
} from "react-router-dom";
function About() {
  const navigate = useNavigate();
  const target = () => {
    //  接收两个参数，第一个为跳转路径，第二个用来使用replace
    navigate("/home", { replace: true });
  };
  return (
    <div>
      about
      <button onClick={target}> 跳转到Home 路由</button>
    </div>
  );
}
function Home() {
  return <div>Home</div>;
}
export function Routers() {
  return (
    <HashRouter>
      <Link to="home">to home</Link>;<Link to="about">to about</Link>;
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
