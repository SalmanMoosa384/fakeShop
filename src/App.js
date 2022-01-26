import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Compare from "./components/Compare";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { ProductDetail } from "./components/ProductDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems") !== null
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const removeItemCart = (product) => {
    setCartItems(cartItems.filter((item) => item !== product));
  };
  const cart = (product) => {
    if (cartItems.find(({ id }) => id == product.id) === undefined) {
      product.qty = 1;
      setCartItems([...cartItems, product]);
      toast("Item add to cart");
    } else {
      let products = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      setCartItems(products);
      toast("Item qty exceed");
    }
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Cart cartItems={cartItems} removeItemCart={removeItemCart} />
        <Switch>
          <Route exact path="/">
            <Home cart={cart} />
          </Route>
          <Route path="/products/:category">
            <Products cart={cart} />
          </Route>
          <Route path="/productsDetail/:id">
            <ProductDetail cart={cart} />
          </Route>
          <Route path="/compare">
            <Compare />
          </Route>
        </Switch>

        <Footer />

        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
