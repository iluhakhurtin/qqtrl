import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import styles from "./styles.spinner.css";

class LoadingSpinner extends Component {
  render() {
    return (
      <Modal show={true} dialogClassName="loadingSpinner" centered>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Modal>
    );
  }
}

export default LoadingSpinner;
