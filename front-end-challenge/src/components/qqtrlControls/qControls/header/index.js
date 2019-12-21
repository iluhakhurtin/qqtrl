import React, { Component } from "react";
// import CssModules from "react-css-modules";
import styles from "./styles.css";
import Title from "./title";

class Header extends Component {
  render() {
    let { title } = this.props;
    return (
      <div>
        <Title title={title} />
      </div>
    );
  }
}

// export default CssModules(Header, styles);
export default Header;
