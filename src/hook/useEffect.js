import React, { useState, useEffect } from "react";

/**
 * 每次运行 effect 的同时，dom已经更新完毕，大多数情况下，不需要同步执行，在每次卸载时会被清除
 */
function Effect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`你点击了${count}次`);
  });
  return (
    <div>
      <div> {count} </div>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}
export default Effect;
