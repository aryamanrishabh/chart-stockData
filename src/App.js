import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Compare from "./Compare";

const App = () => {
  return (
    <div>
      <Navbar />
      <Compare />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
