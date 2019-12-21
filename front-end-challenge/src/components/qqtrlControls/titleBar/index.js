import React, { Component } from "react";
import Logo from "./logo";
import "./styles.css";

class TitleBar extends Component {
  render() {
    return (
      <div className="container">
        <Logo />
      </div>
    );
  }
}

export default TitleBar;
