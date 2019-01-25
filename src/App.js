import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";

// Reducer
// "Hi"
// {
//   type: "UPDATE_INPUT",
//   payload: "New input vaue"
// };

const reducer = (state = "Default state", action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return action.payload;
    default:
      return state;
  }
};

// const addToCollection = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TO_COLLECTION":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

const action = {
  type: "UPDATE_INPUT",
  payload: "Updated state"
};

const stateForStore = reducer("Some other default state", action);

console.log("The redux state will be ", stateForStore);

console.log("Create store is :", createStore);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("Store is :", store);
console.log("The current state of the store is :", store.getState());

store.dispatch(action);
console.log("The new store state is :", store.getState());

//////////////////////////////////////////////

class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.props.renderReactApp);
    store.subscribe(function() {
      console.log("Ciao from the store");
    });
  }
  // state = {
  //   input: "Ciao!"
  // };

  // handleReactStateChange = e => this.setState({ input: e.target.value });

  handleReduxStateChange = e => {
    console.log("Inside event handler");

    const action = {
      type: "UPDATE_INPUT",
      payload: e.target.value
    };

    console.log("Prev state :", store.getState());

    store.dispatch(action);

    console.log("New state :", store.getState());
  };

  render() {
    console.log("In render");
    console.log("Redux state is :", store.getState());
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleReduxStateChange}
          value={store.getState()}
        />
      </div>
    );
  }
}

export default App;
