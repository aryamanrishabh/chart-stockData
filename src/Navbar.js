import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Chart from "./Chart";

const Navbar = () => {
  const [symbol, setSymbol] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link
          className="navbar-brand pl-5"
          to="/"
          onClick={() => {
            setSymbol("");
          }}
        >
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
              <Link
                className="dropdown-item"
                to="/charts/ibm"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                IBM
              </Link>
              <Link
                className="dropdown-item"
                to="/charts/tsla"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                TSLA
              </Link>
              <Link
                className="dropdown-item"
                to="/charts/shop"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                SHOP
              </Link>
              <Link
                className="dropdown-item"
                to="/charts/tsco"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                TSCO
              </Link>
              <Link
                className="dropdown-item"
                to="/charts/reliance.bse"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                RELIANCE.BSE
              </Link>
              <Link
                className="dropdown-item"
                to="/charts/baba"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                BABA
              </Link>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto pr-5">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/compare"
              onClick={() => {
                setSymbol("");
              }}
            >
              Compare
            </Link>
          </li>
        </ul>
      </nav>

      {/* <Chart symbol={symbol} /> */}
    </div>
  );
};

export default Navbar;
