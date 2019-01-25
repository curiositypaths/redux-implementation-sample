import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import { createStore } from "redux";

// Reducer
// "Hi"
// {
//   type: "UPDATE_INPUT",
//   payload: "New input vaue"
// };

const reducer = (state = "Our default string", action) => {
  //debugger;
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

//const stateForStore = reducer("Some other default state", action);

// console.log("The redux state will be ", stateForStore);

// console.log("Create store is :", createStore);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const originalSubscribe = store.subscribe;
store.subscribe = function() {
  console.log("Inside subscribe. Arguments are ", arguments);
  originalSubscribe(...arguments);
};

// console.log("Store is :", store);
// console.log("The current state of the store is :", store.getState());

// //store.dispatch(action);
// console.log("The new store state is :", store.getState());

//////////////////////////////////////////////

const renderReactApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

renderReactApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
