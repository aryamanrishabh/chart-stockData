import { useEffect, useState } from "react";

const SearchParams = () => {
  //const [data, setData] = useState({});

  async function fetchStockData() {
    const res = await fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=AWS9D6C31M59ZV8H"
    );

    const json = await res.json();

    console.log(json);

    //setData(res);
  }

  useEffect(() => {
    fetchStockData();
  }, []);

  return <div>{fetchStockData}</div>;
};

export default SearchParams;
