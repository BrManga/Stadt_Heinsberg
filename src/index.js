import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import  HeinsbergContextProvider  from "./context";
import alldata from "./data";

ReactDOM.render(
  <HeinsbergContextProvider data={alldata}>
    <Router>
      <App />
    </Router>
  </HeinsbergContextProvider>,
  document.getElementById("root")
);
