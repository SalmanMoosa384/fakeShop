import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcumbs from "./Breadcumbs";
import Loader from "./Loader";

export const Compare = ({ product }) => {
  const [compareProducts, setCompareProducts] = useState(
    localStorage.getItem("compare") !== null
      ? JSON.parse(localStorage.getItem("compare"))
      : []
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    localStorage.setItem("compare", JSON.stringify(compareProducts));
    setLoading(false);
  }, [compareProducts]);

  const productRemoveFromCompare = (product) => {
    let pro = compareProducts.filter((item) => item != product);
    setCompareProducts(pro);
  };

  return (
    <>
      <Breadcumbs title="Compare Products" />
      {loading == true ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="compare-page-content-wrap">
                <div className="compare-table table-responsive">
                  <table className="table table-bordered mt-10 mb-10">
                    <tbody>
                      {compareProducts.length == 0 ? (
                        <tr>
                          <td>Compare Product is Empty</td>
                        </tr>
                      ) : (
                        <>
                          <tr>
                            <td className="first-column">Product</td>

                            {compareProducts.map((item) => {
                              return (
                                <td
                                  className="product-image-title"
                                  key={item.id}
                                >
                                  <Link
                                    to={`/productsDetail/${item.id}`}
                                    className="image"
                                  >
                                    <img
                                      className="img-fluid"
                                      src={item.image}
                                    />
                                  </Link>
                                  <Link
                                    to={`/products/${item.category}`}
                                    className="category"
                                  >
                                    {item.category}
                                  </Link>
                                  <Link
                                    to={`/productsDetail/${item.id}`}
                                    className="title"
                                  >
                                    {item.title}
                                  </Link>
                                </td>
                              );
                            })}
                          </tr>

                          <tr>
                            <td className="first-column">Description</td>
                            {compareProducts.map((item) => {
                              return (
                                <td className="pro-desc" key={item.id}>
                                  <p>{item.description}</p>
                                </td>
                              );
                            })}
                          </tr>

                          <tr>
                            <td className="first-column">Price</td>
                            {compareProducts.map((item) => {
                              return (
                                <td className="pro-price" key={item.id}>
                                  ${item.price}
                                </td>
                              );
                            })}
                          </tr>

                          <tr>
                            <td className="first-column">Rating</td>
                            {compareProducts.map((item) => {
                              return (
                                <td className="product-rating" key={item.id}>
                                  <span className="ratings mb-0">
                                    <span className="rating-wrap">
                                      <span
                                        className="star"
                                        style={{
                                          width: item.rating.rate * 20 + "%",
                                        }}
                                      ></span>
                                    </span>
                                  </span>
                                </td>
                              );
                            })}
                          </tr>

                          <tr>
                            <td className="first-column">Remove</td>
                            {compareProducts.map((item) => {
                              return (
                                <td className="pro-remove" key={item.id}>
                                  <button
                                    onClick={() =>
                                      productRemoveFromCompare(item)
                                    }
                                  >
                                    <i className="pe-7s-trash"></i>
                                  </button>
                                </td>
                              );
                            })}
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Compare;
