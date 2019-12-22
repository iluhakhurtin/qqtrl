import React, { Component } from "react";
import styles from "./styles.error.module.css";

class Error extends Component {
  render() {
    let { title, onTryAgain } = this.props;
    return <div className={styles.container}>error</div>;
  }
}

export default Error;
