import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Chart from "./Chart";
import Compare from "./Compare";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/charts/:id">
          <Chart />
        </Route> */}
        <Route path="/compare">
          <Compare />
        </Route>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
