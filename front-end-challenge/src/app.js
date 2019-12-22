import React, { Component } from "react";
import ControlsData from "./data/controls.json";
import Error from "./components/error";
import QqtrlControls from "./components/qqtrlControls";
import styles from "./app.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getControlsData();
  }

  getControlsData() {
    // error on data getting emulation
    let rnd = this.getRandomInt(2);
    let controlsData = null;
    if (rnd > 0) {
      controlsData = ControlsData;
    }
    this.setState({ controlsData });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  renderControls(controlsData) {
    return (
      <div className={styles.container}>
        <QqtrlControls controls={controlsData.data} />
      </div>
    );
  }

  onTryAgain() {
    this.getControlsData();
  }

  renderError() {
    return (
      <div className={styles.container}>
        <QqtrlControls controls={null} />
        <Error
          error="Unable to load controls"
          onTryAgain={() => this.onTryAgain()}
        />
      </div>
    );
  }

  render() {
    let { controlsData } = this.state;
    if (controlsData) return this.renderControls(controlsData);
    return this.renderError();
  }
}

export default App;
