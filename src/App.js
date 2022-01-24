import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Compare from "./components/Compare";
import { ProductDetail } from "./components/ProductDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="container-fluid">
          <Switch>
            <Route path="/products/:category">
              <Products />
            </Route>
            <Route path="/productsDetail/:id">
              <ProductDetail />
            </Route>
            <Route path="/compare">
              <Compare />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
