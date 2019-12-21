import React, { Component } from "react";
import TitleBar from "./titleBar";
import QControls from "./qControls";
import styles from "./styles.css";

class QqtrlControls extends Component {
  render() {
    return (
      <div className={styles.container}>
        <TitleBar />
        <QControls />
      </div>
    );
  }
}

export default QqtrlControls;
