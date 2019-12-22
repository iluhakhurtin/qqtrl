import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import styles from "./styles.error.module.css";
import "./styles.error.css";

class Error extends Component {
  render() {
    let { error, onTryAgain } = this.props;
    return (
      <Modal
        show={true}
        dialogClassName={(styles.container, "error")}
        onHide={e => onTryAgain()}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>ERROR</Modal.Title>
        </Modal.Header>
        <ModalBody>{error}</ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={e => onTryAgain()}>
            Try again
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default Error;
