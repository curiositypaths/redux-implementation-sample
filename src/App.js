import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

//redux

const mapStateToProps = reduxState => {
  console.log("reduxState is ", reduxState);
  //debugger;
  console.log("In mapStateToProps", ++counter);
  return {
    inputFromRedux: reduxState,
    tomato: "Potato"
  };
};

const OtherComponent = props => {
  return <h1>Other component</h1>;
};

const ConnectInputToComponent = connect(mapStateToProps);

const ConnectedOtherComponent = ConnectInputToComponent(OtherComponent);

class App extends Component {
  constructor(props) {
    super(props);
    // this.props.reduxStore.subscribe(this.props.renderReactApp);
    // this.props.reduxStore.subscribe(function() {
    //   console.log("Ciao from the store");
    // });
  }
  // state = {
  //   input: "Ciao!"
  // };

  // handleReactStateChange = e => this.setState({ input: e.target.value });

  componentDidMount() {
    // setTimeout(() => {
    //   this.props.dispatch({ type: "UPDATE_INPUT", payload: "New string" });
    // }, 2000);
  }

  handleReduxStateChange = e => {
    console.log("Inside event handler");

    const action = {
      type: "UPDATE_INPUT",
      payload: e.target.value
    };

    //console.log("Prev state :", this.props.reduxStore.getState());
    debugger;
    this.props.dispatch(action);

    //console.log("New state :", this.props.reduxStore.getState());
  };

  render() {
    //debugger;
    // console.log("In render");
    // console.log("Redux state is :", this.props.reduxStore.getState());
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleReduxStateChange}
          value={this.props.inputFromRedux}
        />
        <ConnectedOtherComponent />
      </div>
    );
  }
}

let counter = 0;

console.log("Connect", connect);

console.log("ConnectInputToComponent", ConnectInputToComponent);

export default ConnectInputToComponent(App);
