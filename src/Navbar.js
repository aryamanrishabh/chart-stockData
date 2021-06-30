import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const Navbar = () => {
  const [symbol, setSymbol] = useState("");

  return (
    <div>
      {/* <nav className="navbar navbar-expand-md bg-dark navbar-dark">
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
      </nav> */}

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link className="navbar-brand pl-5" to="/">
          CEA
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbardrop"
              data-toggle="dropdown"
            >
              Stocks
            </a>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                IBM
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                TSLA
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                SHOP
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                TSCO
              </a>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto pr-5">
          <li className="nav-item">
            <Link className="nav-link" to="/compare">
              Compare
            </Link>
          </li>
        </ul>
      </nav>

      <Chart symbol={symbol} />
    </div>
  );
};

export default Navbar;
