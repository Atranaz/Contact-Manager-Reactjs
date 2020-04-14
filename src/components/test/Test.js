import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
        })
      );
  }

  render() {
    const { title } = this.state;
    return <div>{title}</div>;
  }
}
