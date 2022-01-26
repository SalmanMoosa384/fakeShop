import React from "react";
import Products from "./Products";

export const LatestProduct = ({ cart }) => {
  return (
    <>
      <div className="container">
        <div className="section-title">
          <h1 className="title">Latest Products</h1>
          <hr />
        </div>

        <Products limit="4" sort="desc" breadcumbs={false} cart={cart} />
      </div>
    </>
  );
};

export default LatestProduct;
