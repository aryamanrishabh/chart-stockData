import { useEffect, useState } from "react";
import Table from "./Table";

const Compare = () => {
  const [open1, setOpen1] = useState(0);
  const [close1, setClose1] = useState(0);
  const [high1, setHigh1] = useState(0);
  const [low1, setLow1] = useState(0);

  const [open2, setOpen2] = useState(0);
  const [close2, setClose2] = useState(0);
  const [high2, setHigh2] = useState(0);
  const [low2, setLow2] = useState(0);

  const [stock1, setStock1] = useState("");
  const [stock2, setStock2] = useState("");

  const p1 = "1. open";
  const p2 = "2. high";
  const p3 = "3. low";
  const p4 = "4. close";

  async function fetchStockData() {
    const res1 = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock1}&apikey=AWS9D6C31M59ZV8H`
    );
    const res2 = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock2}&apikey=AWS9D6C31M59ZV8H`
    );

    const json1 = await res1.json();
    const timedataone = json1["Time Series (Daily)"];
    const dateone = Object.keys(timedataone)[0];
    setOpen1(timedataone[dateone][p1]);
    setHigh1(timedataone[dateone][p2]);
    setLow1(timedataone[dateone][p3]);
    setClose1(timedataone[dateone][p4]);

    const json2 = await res2.json();
    const timedatatwo = json2["Time Series (Daily)"];
    const datetwo = Object.keys(timedatatwo)[0];
    setOpen2(timedatatwo[datetwo][p1]);
    setHigh2(timedatatwo[datetwo][p2]);
    setLow2(timedatatwo[datetwo][p3]);
    setClose2(timedatatwo[datetwo][p4]);
  }

  useEffect(() => {
    fetchStockData();
  }, []);

  return (
    <div>
      <form
        className="m-5"
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
            setStock1(e.target.value);
          }}
        />
        <input
          id="stock2"
          value={stock2}
          placeholder="Enter stock symbol"
          onChange={(e) => {
            setStock2(e.target.value);
          }}
        />
        <button>Compare</button>
      </form>
      <Table stock1={stock1} stock2={stock2} open1={open1} open2={open2} high1={high1} high2={high2} low1={low1} low2={low2} close1={close1} close2={close2} />
    </div>
  );
};

export default Compare;
