import React from "react";
// 函数式组件
function C1(props) {
  return <div className="c1"> 函数式组件 {props.name}</div>;
}
/**
 * 组件 props：接收唯一数据源，不能修改props，
 * state:
 * 1. 不能直接修改state
 * 2. state 更新异步问题
 *    - props 和 state 可能会异步更新，所以不要依赖他们的值去更新下一个状态
 **/
class C2 extends React.Component {
  state = {};
  constructor(props) {
    super(props); // 一定调用，将子类this指向父类
    console.log(this.props, "~~~~~~~~~~~~");
    this.state = { date: new Date() };
  }
  // 组件已经渲染到dom后运行
  componentDidMount() {
    console.log("组件被渲染到dom");
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  // 清除定时器
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // 更新数据方法

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return <div> class 组件 {this.state.date.toLocaleTimeString()}</div>;
  }
}
export { C1, C2 };
