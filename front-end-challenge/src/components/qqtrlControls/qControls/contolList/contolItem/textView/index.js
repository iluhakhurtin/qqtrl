import React, { Component } from "react";
import styles from "./styles.textView.module.css";

class TextView extends Component {
  render() {
    let { text } = this.props;
    return <div className={styles.container}>{text}</div>;
  }
}

export default TextView;
