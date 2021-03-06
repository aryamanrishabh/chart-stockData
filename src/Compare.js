import { useEffect, useState } from "react";
import Table from "./Table";

const Compare = () => {
  const [loading, setLoading] = useState(false);

  const [open1, setOpen1] = useState(0);
  const [close1, setClose1] = useState(0);
  const [high1, setHigh1] = useState(0);
  const [low1, setLow1] = useState(0);
  const [stockname1, setStockname1] = useState("");

  const [open2, setOpen2] = useState(0);
  const [close2, setClose2] = useState(0);
  const [high2, setHigh2] = useState(0);
  const [low2, setLow2] = useState(0);
  const [stockname2, setStockname2] = useState("");

  const [stock1, setStock1] = useState("");
  const [stock2, setStock2] = useState("");

  const p1 = "1. open";
  const p2 = "2. high";
  const p3 = "3. low";
  const p4 = "4. close";

  async function fetchStockData() {
    setLoading(true);
    try {
      const res1 = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock1}&apikey=AWS9D6C31M59ZV8H`
      );
      const res2 = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock2}&apikey=AWS9D6C31M59ZV8H`
      );

      const json1 = await res1.json();
      const timedataone = json1["Time Series (Daily)"];
      const dateone = Object.keys(timedataone)[0];
      setStockname1(json1["Meta Data"]["2. Symbol"]);
      setOpen1(timedataone[dateone][p1]);
      setHigh1(timedataone[dateone][p2]);
      setLow1(timedataone[dateone][p3]);
      setClose1(timedataone[dateone][p4]);

      const json2 = await res2.json();
      const timedatatwo = json2["Time Series (Daily)"];
      const datetwo = Object.keys(timedatatwo)[0];
      setStockname2(json2["Meta Data"]["2. Symbol"]);
      setOpen2(timedatatwo[datetwo][p1]);
      setHigh2(timedatatwo[datetwo][p2]);
      setLow2(timedatatwo[datetwo][p3]);
      setClose2(timedatatwo[datetwo][p4]);
    } catch (e) {
      alert("API response error, try clicking compare 2-3 times");
    }
    setLoading(false);
  }

  return (
    <div>
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
          fetchStockData();
        }}
      >
        <input
          id="stock1"
          value={stock1}
          placeholder="Enter stock symbol"
          onChange={(e) => {
            setStock1(e.target.value.toUpperCase());
          }}
        />
        <input
          id="stock2"
          value={stock2}
          placeholder="Enter stock symbol"
          onChange={(e) => {
            setStock2(e.target.value.toUpperCase());
          }}
        />
        <button className="btn btn-primary">Compare</button>
      </form>
      <div
        className="loader"
        id={loading ? "display-block" : "display-none"}
      ></div>
      <Table
        stock1={stockname1}
        stock2={stockname2}
        open1={open1}
        open2={open2}
        high1={high1}
        high2={high2}
        low1={low1}
        low2={low2}
        close1={close1}
        close2={close2}
      />
    </div>
  );
};

export default Compare;
