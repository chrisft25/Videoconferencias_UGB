import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootPage = () => {
  window.location.href = "https://ugb.edu.sv";
};
const routing = (
  <Router>
    <div>
      <Route exact path="/:id" render={(props) => <App {...props} />} />
      <Route exact path="/" render={rootPage} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
