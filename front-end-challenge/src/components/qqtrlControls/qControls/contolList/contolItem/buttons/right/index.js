import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.right.module.css";

class RightButton extends Component {
  render() {
    return (
      <div className={styles.container}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
      </div>
    );
  }
}

export default RightButton;
