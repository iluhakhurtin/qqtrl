import React, { Component } from "react";
import ControlsData from "./data/controls.json";
import Error from "./components/error";
import LoadingSpinner from "./components/spinner";
import QqtrlControls from "./components/qqtrlControls";
import styles from "./app.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlsData: {},
      isLoading: true
    };
  }

  componentWillMount() {
    this.getControlsData();
  }

  getControlsData() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      // error on data getting emulation
      let rnd = this.getRandomInt(2);
      let controlsData = {};
      if (rnd > 0) {
        controlsData = ControlsData;
      }
      this.setState({ controlsData, isLoading: false });
    }, 3000);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  onTryAgain() {
    this.getControlsData();
  }

  render() {
    let { controlsData, isLoading } = this.state;
    return (
      <div className={styles.container}>
        <QqtrlControls controls={controlsData.data} />
        {isLoading && <LoadingSpinner />}
        {!isLoading && !controlsData.data && (
          <Error
            error="Unable to load controls"
            onTryAgain={() => this.onTryAgain()}
          />
        )}
      </div>
    );
  }
}

export default App;
