import React, { Component } from "react";
import RightButton from "./buttons/right";
import TextView from "./textView";
import Type from "./type";
import styles from "./styles.controlItem.module.css";

class ControlItem extends Component {
  render() {
    let { name, type, maximumRabiRate, polarAngle } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.titleWrapper}>
            <TextView text={name} />
          </div>
        </div>
        <div className={styles.type}>
          <Type type={type} />
        </div>
        <div className={styles.polarAngle}>
          <TextView text={polarAngle} />
        </div>
        <div className={styles.maximumRabiRate}>
          <TextView text={maximumRabiRate} />
        </div>
        <div className={styles.rightButton}>
          <RightButton />
        </div>
      </div>
    );
  }
}

export default ControlItem;
