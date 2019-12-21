import React, { Component } from "react";
import Header from "./header";
import "./styles.css";

class QControls extends Component {
  render() {
    let title = "Controls";
    return (
      <div className="container">
        <Header title={title} />
      </div>
    );
  }
}

export default QControls;
