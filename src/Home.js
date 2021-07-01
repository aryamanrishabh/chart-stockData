import tsla from "../images/tsla.png";
import ibm from "../images/ibm.png";
import tes from "../images/tesco.png";
import rel from "../images/reliance.png";
import ali from "../images/alibaba.png";
import shop from "../images/shopify.jpg";

const Home = () => {
  return (
    <div className="container">
      <h1 className="display-4 m-3 text-center">Popular Stocks</h1>
      <div className="row mt-5">
        <div className="col-md">
          <div className="logo-card">
            <img src={tsla} alt="logo" />
            <h4 className="text-center mt-1">Tesla</h4>
          </div>
        </div>
        <div className="col-md">
          <div className="logo-card p-1">
            <img src={ibm} alt="logo" />
            <h4 className="text-center mt-1">IBM</h4>
          </div>
        </div>
        <div className="col-md">
          <div className="logo-card p-2">
            <img src={shop} alt="logo" />
            <h4 className="text-center mt-1">Shopify</h4>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md">
          <div className="logo-card p-2">
            <img src={tes} alt="logo" />
            <h4 className="text-center mt-1">TESCO</h4>
          </div>
        </div>
        <div className="col-md">
          <div className="logo-card p-2">
            <img src={rel} alt="logo" />
            <h4 className="text-center mt-1">Reliance</h4>
          </div>
        </div>
        <div className="col-md">
          <div className="logo-card p-2">
            <img src={ali} alt="logo" />
            <h4 className="text-center mt-1">Alibaba</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
