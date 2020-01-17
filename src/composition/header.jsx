import React, { Component } from "react";
import "./header.less";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
      </div>
    );
  }
}

export default Header;
