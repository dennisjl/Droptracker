import React from "react";
import ReactDOM from "react-dom";
import Header from "./composition/header";



class App extends React.Component {
  render() {
    return <div>
      <Header/>
        Hello {this.props.name}, endringer for npm start
        </div>;
  }
}

var mount = document.getElementById("app");
ReactDOM.render(<App name="Dennis" />, mount);