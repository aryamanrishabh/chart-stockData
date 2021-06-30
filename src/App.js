import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Compare from "./Compare";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/">
          <header>
            <Navbar />
          </header>
        </Route>
        <Route path="/compare">
          <Compare />
        </Route>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
