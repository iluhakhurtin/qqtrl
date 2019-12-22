import React, { Component } from "react";
import Title from "./title";
import styles from "./styles.header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <Title title="title" />
        </div>
        <div className={styles.type}>
          <Title title="type" />
        </div>
        <div className={styles.polarAngle}>
          <Title title="polar angle" />
        </div>
        <div className={styles.maximumRabiRate}>
          <Title title="max rabi rate" />
        </div>
      </div>
    );
  }
}

export default Header;
