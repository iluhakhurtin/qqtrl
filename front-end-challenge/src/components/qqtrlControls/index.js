import React, { Component } from "react";
import TitleBar from "./titleBar";
import QControls from "./qControls";
import styles from "./styles.module.css";

class QqtrlControls extends Component {
  render() {
    let { controlsData } = this.props;
    let { data } = controlsData;
    return (
      <div className={styles.container}>
        <TitleBar />
        <QControls controls={data} />
      </div>
    );
  }
}

export default QqtrlControls;
