import React from "react";

const CartItem = () => {
  return (
    <li>
      <a className="ps-header__item" href="#/" id="cart-mini">
        <i className="icon-cart-empty" />
        <span className="badge">2</span>
      </a>
      <div className="ps-cart--mini">
        <ul className="ps-cart__items">
          <li className="ps-cart__item">
            <div className="ps-product--mini-cart">
              <a className="ps-product__thumbnail" href="product-default.html">
                <img src="img/products/055.jpg" alt="alt" />
              </a>
              <div className="ps-product__content">
                <a className="ps-product__name" href="product-default.html">
                  Somersung Sonic X2500 Pro White
                </a>
                <p className="ps-product__meta">
                  <span className="ps-product__price">$399.99</span>
                </p>
              </div>
              <a
                className="ps-product__remove"
                // href="javascript: void(0)"
                href="#/"
              >
                <i className="icon-cross" />
              </a>
            </div>
          </li>
          <li className="ps-cart__item">
            <div className="ps-product--mini-cart">
              <a className="ps-product__thumbnail" href="product-default.html">
                <img src="img/products/001.jpg" alt="alt" />
              </a>
              <div className="ps-product__content">
                <a className="ps-product__name" href="product-default.html">
                  Digital Thermometer X30-Pro
                </a>
                <p className="ps-product__meta">
                  <span className="ps-product__sale">$77.65</span>
                  <span className="ps-product__is-price">$80.65</span>
                </p>
              </div>
              <a
                className="ps-product__remove"
                // href="javascript: void(0)"
                href="#/"
              >
                <i className="icon-cross" />
              </a>
            </div>
          </li>
        </ul>
        <div className="ps-cart__total">
          <span>Subtotal </span>
          <span>$399</span>
        </div>
        <div className="ps-cart__footer">
          <a className="ps-btn ps-btn--outline" href="shopping-cart.html">
            View Cart
          </a>
          <a className="ps-btn ps-btn--warning" href="checkout.html">
            Checkout
          </a>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
