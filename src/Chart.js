import { useState, useEffect } from "react";

const Chart = ({ symbol }) => {
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
};
