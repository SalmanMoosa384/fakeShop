import React from "react";

export const Compare = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="compare-page-content-wrap">
              <div className="compare-table table-responsive">
                <table className="table table-bordered mb-0">
                  <tbody>
                    <tr>
                      <td className="first-column">Product</td>
                      <td className="product-image-title">
                        <a href="product-details.html" className="image">
                          <img
                            className="img-fluid"
                            src="assets/images/products/small-product/1.jpg"
                            alt="Compare Product"
                          />
                        </a>
                        <a href="#" className="category">
                          Men
                        </a>
                        <a href="product-details.html" className="title">
                          Brother Hoddies in Grey
                        </a>
                      </td>
                      <td className="product-image-title">
                        <a href="product-details.html" className="image">
                          <img
                            className="img-fluid"
                            src="assets/images/products/small-product/2.jpg"
                            alt="Compare Product"
                          />
                        </a>
                        <a href="#" className="category">
                          Basic
                        </a>
                        <a href="product-details.html" className="title">
                          Basic Jogging Shorts
                        </a>
                      </td>
                      <td className="product-image-title">
                        <a href="product-details.htmll" className="image">
                          <img
                            className="img-fluid"
                            src="assets/images/products/small-product/3.jpg"
                            alt="Compare Product"
                          />
                        </a>
                        <a href="#" className="category">
                          Women
                        </a>
                        <a href="product-details.html" className="title">
                          Simple Woven Fashion
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-column">Description</td>
                      <td className="pro-desc">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Provident nulla, explicabo iste a rerum
                          pariatur.
                        </p>
                      </td>
                      <td className="pro-desc">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Sit commodi obcaecati cumque consectetur alias
                          incidunt?
                        </p>
                      </td>
                      <td className="pro-desc">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Eius,facere. Fuga asperiores inventore iste
                          tempora.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-column">Price</td>
                      <td className="pro-price">$95</td>
                      <td className="pro-price">$75</td>
                      <td className="pro-price">$60</td>
                    </tr>
                    <tr>
                      <td className="first-column">Size</td>
                      <td className="pro-color">Medium</td>
                      <td className="pro-color">Small</td>
                      <td className="pro-color">Large</td>
                    </tr>
                    <tr>
                      <td className="first-column">Stock</td>
                      <td className="pro-stock">In Stock</td>
                      <td className="pro-stock">Stock Out</td>
                      <td className="pro-stock">In Stock</td>
                    </tr>
                    <tr>
                      <td className="first-column">Add to cart</td>
                      <td>
                        <a
                          href="cart.html"
                          className="btn btn-dark btn-hover-primary rounded-0"
                        >
                          Add to Cart
                        </a>
                      </td>
                      <td>
                        <a
                          href="cart.html"
                          className="btn btn-dark btn-hover-primary rounded-0 disabled"
                        >
                          Add to Cart
                        </a>
                      </td>
                      <td>
                        <a
                          href="cart.html"
                          className="btn btn-dark btn-hover-primary rounded-0"
                        >
                          Add to Cart
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-column">Rating</td>
                      <td className="product-rating">
                        <span className="ratings mb-0">
                          <span className="rating-wrap">
                            <span className="star"></span>
                          </span>
                        </span>
                      </td>
                      <td className="product-rating">
                        <span className="ratings mb-0">
                          <span className="rating-wrap">
                            <span className="star"></span>
                          </span>
                        </span>
                      </td>
                      <td className="product-rating">
                        <span className="ratings mb-0">
                          <span className="rating-wrap">
                            <span className="star"></span>
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-column">Remove</td>
                      <td className="pro-remove">
                        <button>
                          <i className="pe-7s-trash"></i>
                        </button>
                      </td>
                      <td className="pro-remove">
                        <button>
                          <i className="pe-7s-trash"></i>
                        </button>
                      </td>
                      <td className="pro-remove">
                        <button>
                          <i className="pe-7s-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
