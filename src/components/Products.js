import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import Quickview from "./Quickview";
import Breadcumbs from "./Breadcumbs";
import { toast } from "react-toastify";

export const Products = ({
  limit = null,
  sort = "asc",
  breadcumbs = true,
  cart,
}) => {
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  const [productList, setProductsList] = useState([]);
  const [productdetail, setProductDetail] = useState([]);
  const [compareProducts, setCompareProducts] = useState(
    localStorage.getItem("compare") !== null
      ? JSON.parse(localStorage.getItem("compare"))
      : []
  );

  const addCompareProduct = (v) => {
    if (compareProducts.find(({ id }) => id == v.id) === undefined) {
      setCompareProducts([...compareProducts, v]);
      toast.success("Item add for compare");
    } else {
      toast.error("Item already added for compare");
    }
  };

  useEffect(() => {
    if (compareProducts.length > 0) {
      localStorage.setItem("compare", JSON.stringify(compareProducts));
    } else {
      localStorage.removeItem("compare");
    }
  }, [compareProducts]);

  useEffect(() => {
    get_products(limit, category, sort);
  }, [category]);

  const get_products = async (limit, cat, sort) => {
    setLoading(true);
    const category = cat != null ? `/category/${cat}` : "";
    await fetch(
      `https://fakestoreapi.com/products${category}?limit=${limit}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((result) => setProductsList(result));
    setLoading(false);
  };

  return (
    <>
      {breadcumbs == true ? <Breadcumbs title={category} /> : ""}
      <div className="row">
        {loading == true ? (
          <Loader />
        ) : (
          productList.map((product) => {
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
                      <a
                        className="action quickview cursor-pointer"
                        onClick={() => setProductDetail(product)}
                      >
                        <i className="pe-7s-search"></i>
                      </a>
                      <a
                        className="action compare cursor-pointer"
                        onClick={() => addCompareProduct(product)}
                      >
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
                    <button
                      className="btn btn-sm btn-outline-dark btn-hover-primary"
                      onClick={() => cart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Quickview productdetail={productdetail}  cart={cart}/>
    </>
  );
};

export default Products;
