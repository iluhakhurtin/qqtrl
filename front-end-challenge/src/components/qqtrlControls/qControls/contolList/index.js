import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./header";
import ControlItem from "./contolItem";
import styles from "./styles.controlList.module.css";
import { retry } from "async";

class ControlList extends Component {
  renderControls(controls) {
    if (controls) {
      return controls.map(control => {
        if (control.attributes) {
          return (
            <div key={control.id} className={styles.controlItem}>
              <ControlItem
                key={control.id}
                name={control.attributes.name || ""}
                type={control.attributes.type || ""}
                polarAngle={control.attributes.polar_angle || ""}
                maximumRabiRate={control.attributes.maximum_rabi_rate || ""}
              />
            </div>
          );
        }
        return <div>No attributes for the control.</div>;
      });
    }
    return <div>No data</div>;
  }

  render() {
    let { controls } = this.props;
    return (
      <div className={styles.container}>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <div className={styles.header}>
                <Header />
              </div>
              {this.renderControls(controls)}
            </Col>
            <Col xs lg="2"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ControlList;
