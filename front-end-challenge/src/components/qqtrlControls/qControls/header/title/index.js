import React, { Component } from "react";
import "./styles.css";

class Title extends Component {
  render() {
    let { title } = this.props;
    return <div className="container">{title}</div>;
  }
}

export default Title;
