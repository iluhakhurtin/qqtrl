import React, { Component } from "react";
import ControlBar from "./controlBar";
import ControlList from "./contolList";
import styles from "./styles.qControls.module.css";

class QControls extends Component {
  render() {
    let title = "Controls";
    let { controls } = this.props;
    return (
      <div className={styles.container}>
        {controls && <ControlBar title={title} />}
        {controls && <ControlList controls={controls} />}
      </div>
    );
  }
}

export default QControls;
