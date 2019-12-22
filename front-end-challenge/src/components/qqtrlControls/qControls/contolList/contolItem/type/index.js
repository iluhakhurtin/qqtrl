import React, { Component } from "react";
import styles from "./styles.type.module.css";

class Type extends Component {
  render() {
    let { type } = this.props;

    return <div className={styles.container}>{type}</div>;
  }
}

export default Type;
