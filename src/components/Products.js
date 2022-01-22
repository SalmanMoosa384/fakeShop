import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Products = ({ productcategory, products }) => {
  const { category } = useParams();

  useEffect(() => {
    productcategory(category);
  }, [productcategory]);

  return (
    <>
      <div className="row">
        {products.map((product) => {
          const { id, title, price, category, image } = product;
          const { rate } = product.rating;
          return (
            <div className="col-md-3 my-10" key={id}>
              <div
                className="product product-border-left mb-10 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="thumb">
                  <a className="image">
                    <img src={image} alt="Product" />
                  </a>
                  <div className="actions">
                    <a className="action wishlist">
                      <i className="pe-7s-like"></i>
                    </a>
                    <a
                      className="action quickview"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalCenter"
                    >
                      <i className="pe-7s-search"></i>
                    </a>
                    <a className="action compare">
                      <i className="pe-7s-shuffle"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h4 className="sub-title">
                    <Link to={`/productsDetail/${id}`}>{category}</Link>
                  </h4>
                  <h5 className="title">
                    <Link to={`/productsDetail/${id}`}>{title}</Link>
                  </h5>
                  <div className="ratings">
                    <div className="rating-wrap">
                      <div
                        className="star"
                        style={{ width: rate * 20 + "%" }}
                      ></div>
                    </div>
                    <div className="rating-num">({rate})</div>
                  </div>
                  <div className="price">
                    <div className="new">${price}</div>
                  </div>
                  <button className="btn btn-sm btn-outline-dark btn-hover-primary">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
