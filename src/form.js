import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "charlie"
    };
    this.handleSubmit = this.handleSubmit.bind(this); // bind 改变指向不会立即执行
    this.handleChange = this.handleChange.bind(this); // bind 改变指向不会立即执行
  }
  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>name：</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default Form;
