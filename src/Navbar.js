import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                RELIANCE.BSE
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                  setSymbol(e.currentTarget.innerHTML);
                }}
              >
                BABA
              </a>
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

      <Chart symbol={symbol} />
    </div>
  );
};

export default Navbar;
