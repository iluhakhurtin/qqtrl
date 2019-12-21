import React, { Component } from "react";
import ControlBar from "./controlBar";
import styles from "./styles.css";

class QControls extends Component {
  render() {
    let title = "Controls";
    return (
      <div className={styles.container}>
        <ControlBar title={title} />
      </div>
    );
  }
}

export default QControls;
