import React from "react";
export const Quickview = ({ productdetail }) => {
  return (
    <>
      {productdetail.id != null ? (
        <div
          className="modalquickview modal fade"
          id="quickview"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button className="btn close" data-bs-dismiss="modal">
                ×
              </button>

              <div className="row">
                <div className="col-md-4 col-12">
                  <img src={productdetail.image} className="w-100" alt="" />
                </div>
                <div className="col-md-8 col-12 overflow-hidden position-relative">
                  <div className="product-summery">
                    <div className="product-head mb-3">
                      <h2 className="product-title">{productdetail.title}</h2>
                    </div>

                    <div className="price-box mb-2">
                      <span className="regular-price">
                        {productdetail.price}
                      </span>
                    </div>

                    <span className="ratings justify-content-start">
                      <span className="rating-wrap">
                        <span
                          className="star"
                          style={{
                            width: productdetail.rating.rate * 20 + "%",
                          }}
                        ></span>
                      </span>
                      <span className="rating-num">
                        {productdetail.rating.rate}
                      </span>
                    </span>
                    <div className="sku mb-3">
                      <span>{productdetail.category}</span>
                    </div>

                    <p className="desc-content mb-5">
                      {productdetail.description}
                    </p>

                    <div className="cart-wishlist-btn pb-4 mb-n3">
                      <div className="add-to_cart mb-3">
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
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Quickview;
