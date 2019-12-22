import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./header";
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
            </Col>
            <Col xs lg="2"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ControlList;
