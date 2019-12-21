import React, { Component } from "react";
import TitleBar from "./titleBar";
import QControls from "./qControls";

class QqtrlControls extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <QControls />
      </div>
    );
  }
}

export default QqtrlControls;
