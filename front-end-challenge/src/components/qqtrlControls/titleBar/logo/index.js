import React, { Component } from "react";
import styles from "./styles.css";
import logo from "./logo.svg";

class Logo extends Component {
  render() {
    return (
      <div>
        <span dangerouslySetInnerHTML={{ __html: logo }} />
      </div>
    );
  }
}

export default Logo;
