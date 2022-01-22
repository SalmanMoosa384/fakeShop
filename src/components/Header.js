import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const styleLogo = {
    fontSize: "27px",
    fontWeight: "600",
    color: "#ff4545",
  };

  return (
    <>
      <div className="header section">
        <div className="header-bottom">
          <div className="header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-2 col-6">
                  <div className="header-logo">
                    <a href="index.html">
                      <p style={styleLogo}>fakeShop</p>
                    </a>
                  </div>
                </div>

                <div className="col-xl-8 d-none d-xl-block">
                  <div className="main-menu position-relative">
                    <ul>
                      {props.categories.map((r, index) => {
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
                    <a
                      href="login-register.html"
                      className="header-action-btn d-none d-md-block"
                    >
                      <i className="pe-7s-user"></i>
                    </a>

                    <a
                      href="wishlist.html"
                      className="header-action-btn header-action-btn-wishlist d-none d-md-block"
                    >
                      <i className="pe-7s-like"></i>
                    </a>
                    <a className="header-action-btn header-action-btn-cart">
                      <i className="pe-7s-shopbag"></i>
                      <span className="header-action-num">3</span>
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
