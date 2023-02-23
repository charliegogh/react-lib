import "./styles.css";
// 列表渲染
import List from "./list";
// 组件
import { C1, C2 } from "./component";
// 事件
import Event from "./event";
// 表单
import Form from "./form";
// 组合
import Combination from "./combination";
// hook useState
import Bulbs from "./hook/useState";
import Effect from "./hook/useEffect";
// router
import { Routers } from "./router";

export default function App() {
  return (
    <div className="App">
      <p>react router</p>
      <Routers />
      <p>hook useEffect</p>
      <Effect />
      <p>hook useState</p>
      <Bulbs />
      <p>组合</p>
      <Combination />
      <p>表单</p>
      <Form />
      <p>事件</p>
      <Event />
      <p>组件</p>
      <C1 name="C1" />
      <C2 name="C2" date="1111" />
      <p>列表 & key</p>
      <List name="List" />
    </div>
  );
}
