import React, { Component } from "react";
import Logo from "./logo";
import styles from "./styles.css";

class TitleBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Logo />
      </div>
    );
  }
}

export default TitleBar;
