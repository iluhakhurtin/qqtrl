import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import controls from "./data/controls.json";
import "./App.css";
import QqtrlControls from "./components/qqtrlControls";

class App extends Component {
  render() {
    let { data } = controls;

    return (
      <div className="App">
        <QqtrlControls data={data} />
      </div>
    );
  }
}

export default App;
