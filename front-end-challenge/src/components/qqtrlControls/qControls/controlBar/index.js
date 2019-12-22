import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Title from "./title";
import PlusButton from "./buttons/plus";
import styles from "./styles.controlBar.module.css";

class ControlBar extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className={styles.container}>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <div className={styles.controlBar}>
                <div className={styles.titleContainer}>
                  <Title title={title} />
                </div>
                <div className={styles.buttonsContainer}>
                  <PlusButton />
                </div>
              </div>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ControlBar;
