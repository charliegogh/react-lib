import React, { useRef } from "react";
function UseRef() {
  const ref = useRef(null);
  return (
    <>
      <button ref={ref}></button>
    </>
  );
}

export default UseRef;
