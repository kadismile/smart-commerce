import React from "react";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  return (
    <div className="col-12 col-md-5 col-lg-3">
      <div className="ps-shopping__label">Cart totals</div>
      <div className="ps-shopping__box">
        <div className="ps-shopping__row">
          <div className="ps-shopping__label">Subtotal</div>
          <div className="ps-shopping__price">$120.46</div>
        </div>
        <div className="ps-shopping__label">Shipping</div>
        <div className="ps-shopping__checkbox">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="cart-free-ship"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="cart-free-ship">
              Free shipping
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" id="cart-ship" />
            <label className="form-check-label" htmlFor="cart-ship">
              Local Pickup: $10.00
            </label>
          </div>
        </div>
        <div className="ps-shopping__row">
          <div className="ps-shopping__label">Total</div>
          <div className="ps-shopping__price">$120.46</div>
        </div>
        <div className="ps-shopping__checkout">
          <a className="ps-btn ps-btn--warning" href="checkout.html">
            Proceed to checkout
          </a>
          <Link to="/" className="ps-shopping__link">
            Continue To Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
