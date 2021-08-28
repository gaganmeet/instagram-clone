import React from "react";
import ReactDOM from "react-dom";
import FirebaseContext from "./context/firebase";
import App from "./App";
import { firebase } from "./lib/firebase";
import "./styles/app.css";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
