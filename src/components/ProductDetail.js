import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Breadcumbs from "./Breadcumbs";

export const ProductDetail = ({ cart }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductDetail(id);
  }, [id]);

  const getProductDetail = async (id) => {
    if (id != null) {
      setLoading(true);
      await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((result) => setProduct(result));
    }
    setLoading(false);
  };

  return (
    <>
      {loading == true ? (
        <Loader />
      ) : (
        <>
          <Breadcumbs title="Product Detail" />

          <div className="container">
            <div className="row pt-10 pb-10">
              <div className="col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-custom">
                <div className="product-details-img">
                  <img src={product.image} alt="" className="h-25  w-75" />
                </div>
              </div>

              <div className="col-lg-7 col-custom">
                <div className="product-summery position-relative">
                  <div className="product-head mb-3">
                    <h2 className="product-title">{product.title}</h2>
                  </div>
                  <div className="price-box mb-2">
                    <span className="regular-price">${product.price}</span>
                  </div>
                  <div className="ratings justify-content-start">
                    <span className="rating-wrap">
                      <span
                        className="star"
                        style={{
                          width:
                            (product.rating != undefined
                              ? product.rating.rate
                              : "") *
                              20 +
                            "%",
                        }}
                      ></span>
                    </span>
                    <span className="rating-num">
                      {product.rating != undefined ? product.rating.rate : ""}
                    </span>
                  </div>
                  <div className="sku mb-3">
                    <span>{product.category}</span>
                  </div>

                  <div className="desc-content mb-5">{product.description}</div>

                  <div className="cart-wishlist-btn mb-4">
                    <div className="add-to_cart">
                      <a
                        className="btn btn-outline-dark btn-hover-primary"
                        onClick={() => cart(product)}
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
