import react from "react";

/**
 * 组合 类似vue中slot的概念，但是比vue更见灵活
 */
function Main(props) {
  console.log(props, "main");
  return (
    <>
      <div className="z1">{props.z1}</div>
      <div className="z2">{props.z2}</div>
    </>
  );
}

function Z1() {
  return <div>这是组件1</div>;
}
function Z2() {
  return <div>这是组件2</div>;
}

class Z extends react.Component {
  constructor(props) {
    console.log(props, "props");
    super(props);
  }
  render() {
    return <Main z1={<Z1 />} z2={<Z2 />} />;
  }
}

export default Z;
