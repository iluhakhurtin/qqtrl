import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import styles from "./styles.error.module.css";

class Error extends Component {
  render() {
    let { title, onTryAgain } = this.props;
    return (
      <Modal show={true} dialogClassName={styles.container}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <ModalBody></ModalBody>
        <ModalFooter>This is the footer</ModalFooter>
      </Modal>
    );
  }
}

export default Error;
