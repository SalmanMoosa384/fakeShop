import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = ({ productdetail, productid }) => {
  const { id } = useParams();

  useEffect(() => {
    productid(id);
  }, [productid]);

  const { image, title, id: pid, description, price, category } = productdetail;
  return (
    <>
      {pid != null ? (
        <div className="container">
          <div className="row pt-10 pb-10">
            <div className="col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-custom">
              <div className="product-details-img">
                <img src={image} alt="" className="h-25  w-75" />
              </div>
            </div>

            <div className="col-lg-7 col-custom">
              <div className="product-summery position-relative">
                <div className="product-head mb-3">
                  <h2 className="product-title">{title}</h2>
                </div>
                <div className="price-box mb-2">
                  <span className="regular-price">${price}</span>
                </div>
                <div className="ratings justify-content-start">
                  <span className="rating-wrap">
                    <span
                      className="star"
                      style={{ width: productdetail.rating.rate * 20 + "%" }}
                    ></span>
                  </span>
                  <span className="rating-num">
                    {productdetail.rating.rate}
                  </span>
                </div>
                <div className="sku mb-3">
                  <span>{category}</span>
                </div>

                <div className="desc-content mb-5">{description}</div>

                <div className="cart-wishlist-btn mb-4">
                  <div className="add-to_cart">
                    <a
                      className="btn btn-outline-dark btn-hover-primary"
                      href="cart.html"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
