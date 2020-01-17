import React from "react";
import ReactDOM from "react-dom";
import Header from "./composition/header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.name}
      </div>
    );
  }
}

var mount = document.getElementById("app");
ReactDOM.render(<App name="This is the droptracker" />, mount);
