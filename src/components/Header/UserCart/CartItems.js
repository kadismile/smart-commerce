import React from "react";
import CartBasket from "../../Cart/CartBasket";

const CartItem = () => {
  return (
    <li>
      <a className="ps-header__item" href="#/" id="cart-mini">
        <i className="icon-cart-empty" />
        <span className="badge">2</span>
      </a>
      <CartBasket />
    </li>
  );
};

export default CartItem;
