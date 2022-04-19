import React from "react";
import ProductPrice from "../Products/ProductPrice";
import ProductTitle from "../Products/ProductTitle";
import RemoveFromCart from "./RemoveFromCart";
import Subtotal from "./Subtotal";

const CartBasket = () => {
  return (
    <div className="ps-cart--mini">
      <ul className="ps-cart__items">
        <li className="ps-cart__item">
          <div className="ps-product--mini-cart">
            <a className="ps-product__thumbnail" href="product-default.html">
              <img src="img/products/001.jpg" alt="alt" />
            </a>
            <div className="ps-product__content">
              <ProductTitle />
              <ProductPrice />
            </div>
            <RemoveFromCart />
          </div>
        </li>
      </ul>
      <Subtotal />
      <div className="ps-cart__footer">
        <a className="ps-btn ps-btn--outline" href="shopping-cart.html">
          View Cart
        </a>
        <a className="ps-btn ps-btn--warning" href="checkout.html">
          Checkout
        </a>
      </div>
    </div>
  );
};

export default CartBasket;
