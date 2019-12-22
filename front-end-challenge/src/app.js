import React, { Component } from "react";
import ControlsData from "./data/controls.json";
import QqtrlControls from "./components/qqtrlControls";

class App extends Component {
  render() {
    return <QqtrlControls controlsData={ControlsData} />;
  }
}

export default App;
