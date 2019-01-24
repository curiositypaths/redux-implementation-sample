import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    input: "Ciao!"
  };

  handleChange = e => this.setState({ input: e.target.value });
  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
      </div>
    );
  }
}

export default App;
