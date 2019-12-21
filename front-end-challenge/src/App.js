import React, { Component } from "react";
import ControlsData from "./data/controls.json";
import QqtrlControls from "./components/qqtrlControls";

class App extends Component {
  render() {
    let { data } = ControlsData;
    return <QqtrlControls data={data} />;
  }
}

export default App;
