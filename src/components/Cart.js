import React, { useEffect, useState } from "react";

export const Cart = ({ cartItems, removeItemCart }) => {
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => {
        total = total + item.price * item.qty;
        setSubTotal(total);
      });
    } else {
      setSubTotal(0);
    }
  }, [cartItems]);

  return (
    <>
      <div className="cart-offcanvas-wrapper">
        <div className="offcanvas-overlay"></div>

        <div className="cart-offcanvas-inner">
          <div className="offcanvas-btn-close">
            <i className="pe-7s-close cart-offcanvas-wrapper-close cursor-pointer"></i>
          </div>

          <div className="offcanvas-cart-content">
            <h2 className="offcanvas-cart-title mb-10">Shopping Cart</h2>
            {cartItems.length == 0 ? "cart is empty" : ""}
            {cartItems.map((item) => {
              return (
                <div className="cart-product-wrapper mb-6">
                  <div className="single-cart-product">
                    <div className="cart-product-thumb">
                      <a href="single-product.html">
                        <img src={item.image} />
                      </a>
                    </div>
                    <div className="cart-product-content">
                      <h3 className="title">
                        <a href="single-product.html">{item.title}</a>
                      </h3>
                      <span className="price">
                        <span className="new">{item.price}</span>&nbsp;x{" "}
                        {item.qty}
                      </span>
                    </div>
                  </div>

                  <div
                    className="cart-product-remove"
                    onClick={() => removeItemCart(item)}
                  >
                    <a>
                      <i className="fa fa-trash"></i>
                    </a>
                  </div>
                </div>
              );
            })}

            <div className="cart-product-total">
              <span className="value">Subtotal</span>
              <span className="price">$ {subTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
