import { createRoot } from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
/**
 * 使用 strictMode class 组件被渲染两次问题，是为了检测一些附作用，只会在开发环境中执行
 * https://juejin.cn/post/6858508463274885134
 */

root.render(
  <App />
  // <StrictMode>
  // </StrictMode>
);
