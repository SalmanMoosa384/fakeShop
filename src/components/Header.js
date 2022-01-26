import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = ({ cartItems }) => {
  const styleLogo = {
    fontSize: "27px",
    fontWeight: "600",
    color: "#ff4545",
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((result) => setCategories(result));
  }, []);

  return (
    <>
      <div className="header section">
        <div className="header-bottom">
          <div className="header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-2 col-6">
                  <div className="header-logo">
                    <Link to="/">
                      <p style={styleLogo}>fakeShop</p>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-8 d-none d-xl-block">
                  <div className="main-menu position-relative">
                    <ul>
                      {categories.map((r, index) => {
                        return (
                          <li key={index}>
                            <Link to={`/products/${r}`}>
                              <span>{r}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="col-xl-2 col-6">
                  <div className="header-actions">
                    <Link
                      to="/compare"
                      className="header-action-btn d-none d-md-block"
                    >
                      <i className="pe-7s-refresh"></i>
                    </Link>

                    <a className="header-action-btn header-action-btn-cart cursor-pointer">
                      <i className="pe-7s-shopbag"></i>
                      <span className="header-action-num">
                        {cartItems.length}
                      </span>
                    </a>

                    <a className="header-action-btn header-action-btn-menu d-xl-none d-lg-block">
                      <i className="fa fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
