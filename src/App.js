import React, { useEffect, useState, useReducer } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";

import { ProductDetail } from "./components/ProductDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

export const App = () => {
  const [categories, setCategories] = useState([]);
  const [productcategory, setProductcategory] = useState();
  const [products, setProducts] = useState([]);
  const [productdetail, setProductDetail] = useState([]);
  const [productid, setProductid] = useState("");

  const product_detail = (id) => {
    if (id != "") {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((result) => setProductDetail(result));
    }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((result) => setCategories(result));
  }, []);

  useEffect(() => {
    if (productcategory != null) {
      get_products(null, productcategory);
    }
  }, [productcategory]);

  useEffect(() => {
    product_detail(productid);
  }, [productid]);

  const get_products = (limit = null, $cat = null) => {
    const category = $cat != null ? `/category/${$cat}` : "";

    fetch(`https://fakestoreapi.com/products${category}?limit=${limit}`)
      .then((res) => res.json())
      .then((result) => setProducts(result));
  };

  return (
    <>
      <Router>
        <Header categories={categories} />
        <div className="container-fluid">
          <Switch>
            <Route
              path="/products/:category"
              render={() => {
                return (
                  <Products
                    productcategory={(v) => setProductcategory(v)}
                    products={products}
                  />
                );
              }}
            ></Route>
            <Route
              path="/productsDetail/:id"
              render={() => {
                return (
                  <ProductDetail
                    productdetail={productdetail}
                    productid={(v) => setProductid(v)}
                  />
                );
              }}
            ></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
