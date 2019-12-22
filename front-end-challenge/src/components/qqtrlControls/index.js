import React, { Component } from "react";
import TitleBar from "./titleBar";
import QControls from "./qControls";
import styles from "./styles.qqtrlControls.module.css";

class QqtrlControls extends Component {
  render() {
    let { controls } = this.props;
    return (
      <div className={styles.container}>
        <TitleBar />
        <QControls controls={controls} />
      </div>
    );
  }
}

export default QqtrlControls;
