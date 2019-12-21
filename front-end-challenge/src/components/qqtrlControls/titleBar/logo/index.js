import React, { Component } from "react";
import LogoData from "./logo.svg";

class Logo extends Component {
  render() {
    return (
      <div>
        <img src={LogoData} alt="logo" />
      </div>
    );
  }
}

export default Logo;
