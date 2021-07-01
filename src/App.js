import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import { CanvasJSChart } from "canvasjs-react-charts";
import Compare from "./Compare";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/charts/:id" component={Chart} />
        <Route path="/compare">
          <Compare />
        </Route>
      </Router>
    </div>
  );
};

const Chart = () => {
  let params = useParams();
  const symbol = params.id.toUpperCase();

  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchStockData() {
    setLoading(true);
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${params.id}&apikey=AWS9D6C31M59ZV8H`
    );

    const json = await res.json();

    setStockData(formatStockData(json["Time Series (Daily)"]));
    setLoading(false);
  }

  function formatStockData(stockData) {
    // Converting stockData from an object to an array
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
    <div className={params.id ? "display-block" : "display-none"} id="chart">
      <div
        className="loader"
        id={loading ? "display-block" : "display-none"}
      ></div>
      <CanvasJSChart
        options={{
          theme: "light2",
          title: {
            text: `Stockchart ${symbol}`,
          },
          axisY: {
            title: "Stock Price",
            prefix: "$",
            // Minimum value is 10% less than the lowest price in the dataset
            minimum: Math.min(...stockData.map((data) => data.low)) / 1.1,
            // Minimum value is 10% more than the highest price in the dataset
            maximum: Math.max(...stockData.map((data) => data.high)) * 1.1,
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
            },
          },
          axisX: {
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
            },
            scaleBreaks: {
              spacing: 0,
              fillOpacity: 0,
              lineThickness: 0,
              customBreaks: stockData.reduce((breaks, value, index, array) => {
                // Just return on the first iteration
                // Since there is no previous data point
                if (index === 0) return breaks;

                // Time in UNIX for current and previous data points
                const currentDataPointUnix = Number(new Date(value.date));
                const previousDataPointUnix = Number(
                  new Date(array[index - 1].date)
                );

                // One day converted to milliseconds
                const oneDayInMs = 86400000;

                // Difference between the current and previous data points
                // In milliseconds
                const difference = previousDataPointUnix - currentDataPointUnix;

                return difference === oneDayInMs
                  ? // Difference is 1 day, no scale break is needed
                    breaks
                  : // Difference is more than 1 day, need to create
                    // A new scale break
                    [
                      ...breaks,
                      {
                        startValue: currentDataPointUnix,
                        endValue: previousDataPointUnix - oneDayInMs,
                      },
                    ];
              }, []),
            },
          },
          legend: {
            verticalAlign: "top",
            horizontalAlign: "left",
          },
          data: [
            {
              name: "Price (in USD)",
              type: "candlestick",
              risingColor: "green",
              fallingColor: "red",
              dataPoints: stockData.map((stockData) => ({
                x: new Date(stockData.date),
                y: [
                  stockData.open,
                  stockData.high,
                  stockData.low,
                  stockData.close,
                ],
              })),
            },
          ],
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
