import React from "react";

class Event extends React.Component {
  click(e, p) {
    console.log(this);
    // console.log("点击事件");
    // console.log("点击事件", e, p);
  }
  render() {
    return (
      <div>
        {/* 如果方法之后没有() this回事undefined，这与js函数工作原理有关，解决方式
         1、绑定this
         2、使用箭头函数（推荐）
         3、使用 class fields 实验方法
         */}
        <button onClick={this.click}>点击事件</button>
        {/* bind 绑定this */}
        <button onClick={this.click.bind(this, "111")}>bind 绑定this</button>
        <button onClick={(e) => this.click(e, "~~~")}>
          箭头函数传递额外参数
        </button>
      </div>
    );
  }
}

export default Event;
