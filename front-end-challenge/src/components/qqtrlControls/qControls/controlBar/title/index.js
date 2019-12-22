import React, { Component } from "react";
import styles from "./styles.module.css";

class Title extends Component {
  render() {
    let { title } = this.props;
    return <div className={styles.container}>{title}</div>;
  }
}

export default Title;
