import React, { useState } from "react";
import Slider from "./Slider";
import Feature from "./Feature";
import LatestProduct from "./LatestProduct";
import Loader from "./Loader";
export const Home = ({ cart }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      {loading == true ? (
        <Loader />
      ) : (
        <>
          <Slider />
          <Feature />
          <LatestProduct cart={cart} />
        </>
      )}
    </>
  );
};

export default Home;
