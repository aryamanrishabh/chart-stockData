import { useEffect, useState } from "react";

const Description = ({ symbol }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  //const [loading, setLoading] = useState(true);

  async function fetchStockDescription() {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=AWS9D6C31M59ZV8H`
    );

    const json = await res.json();

    setDescription(json.Description);
    setName(json.Name);
    //setLoading(false);
  }

  useEffect(() => {
    fetchStockDescription();
  }, [symbol]);

  return (
    <div id="description" className={name ? "display-block" : "display-none"}>
      <h2>{`${name} (${symbol})`}</h2>
      <p>{`${description}`}</p>
    </div>
  );
};

export default Description;
