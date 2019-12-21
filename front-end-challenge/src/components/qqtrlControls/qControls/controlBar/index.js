import React, { Component } from "react";
import Title from "./title";
import styles from "./styles2.css";

class ControlBar extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className={styles.container}>
        <Title title={title} />
      </div>
    );
  }
}

export default ControlBar;
