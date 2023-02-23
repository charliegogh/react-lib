import React, { useState } from "react";
/**
 * useState 返回一个数组，第一项状态值，第二项是一个更新状态的函数即状态更新函数
 * 调用 useState() hook启用函数组件中的状态
 * 调用状态更新后，React 确保重新渲染组件，使新状态变为当前状态
 */
function Bulbs() {
  const [on, setOn] = useState(false);
  const lightSwitch = () => setOn((on) => !on);
  return (
    <>
      <div className={on ? "on" : "off"}>{on ? "on" : "off"} </div>
      <button onClick={lightSwitch}>on/off</button>
    </>
  );
}

export default Bulbs;
