import { useState, useEffect } from "react";
import Chart from "./Chart";
import Description from "./Description";

const Navbar = () => {
  const [symbol, setSymbol] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand pl-4" href="#">
          CEA
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse pr-4" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li value="IBM" className="nav-item">
              <a
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
                value="IBM"
                className="nav-link"
                href="#"
              >
                IBM
              </a>
            </li>
            <li value="TSLA" className="nav-item">
              <a
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
                className="nav-link"
                href="#"
              >
                TSLA
              </a>
            </li>
            <li value="DAX" className="nav-item">
              <a
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
                className="nav-link"
                href="#"
              >
                SHOP
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Description symbol={symbol} />
      <Chart symbol={symbol} />
    </div>
  );
};

export default Navbar;
