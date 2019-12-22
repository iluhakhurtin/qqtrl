import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./header";
import ControlItem from "./contolItem";
import styles from "./styles.controlList.module.css";

class ControlList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <div className={styles.header}>
                <Header />
              </div>
              <div className={styles.controlItem}>
                <ControlItem
                  name="Single-Qubit Driven"
                  type="Primitive"
                  maximumRabiRate="63.16731"
                  polarAngle="0.05671"
                />
              </div>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ControlList;
