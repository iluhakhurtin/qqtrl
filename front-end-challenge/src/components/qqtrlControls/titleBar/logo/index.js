import React, { Component } from "react";
import styles from "./styles.logo.module.css";
import logo from "./logo.svg";

class Logo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <span dangerouslySetInnerHTML={{ __html: logo }} />
      </div>
    );
  }
}

export default Logo;
