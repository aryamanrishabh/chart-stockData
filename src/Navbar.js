import { useState, useEffect } from "react";

const Navbar = () => {
  const [symbol, setSymbol] = useState("");
  const [stockData, setStockData] = useState([]);

  async function fetchStockData() {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=AWS9D6C31M59ZV8H`
    );

    const json = await res.json();

    setStockData(formatStockData(json["Time Series (Daily)"]));

    //console.log(stockData);
  }

  function formatStockData(stockData) {
    // Convert stockData from an object to an array
    return Object.entries(stockData).map((entries) => {
      const [date, priceData] = entries;

      return {
        date,
        open: Number(priceData["1. open"]),
        high: Number(priceData["2. high"]),
        low: Number(priceData["3. low"]),
        close: Number(priceData["4. close"]),
      };
    });
  }

  useEffect(() => {
    fetchStockData();
  }, [symbol]);

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand pl-4" href="#">
        Navbar
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
              DAX
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
