import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.plus.module.css";

class PlusButton extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.iconBackground}></div>
        <FontAwesomeIcon icon={faPlusCircle} className={styles.icon} />
      </div>
    );
  }
}

export default PlusButton;
