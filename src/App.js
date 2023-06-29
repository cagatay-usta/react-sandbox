import "./App.css";
import React, { Component } from "react";
import TestComponent from "./testComponent";
import Counter from "./counter.js";
class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("Button has been clicked");
  }

  render() {
    return (
      <div>
        <TestComponent title="React" onButtonClicked={this.onClickBtn} />
        <Counter />
      </div>
    );
  }
}

export default App;
