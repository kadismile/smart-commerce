import React from "react";

const CartItemTable = () => {
  return (
    <tbody>
      <tr>
        <td className="ps-product__remove">
          {" "}
          <a href="#/">
            <i className="icon-cross" />
          </a>
        </td>
        <td className="ps-product__thumbnail">
          <a className="ps-product__image" href="product1.html">
            <figure>
              <img src="img/products/001.jpg" alt="" />
            </figure>
          </a>
        </td>
        <td className="ps-product__name">
          {" "}
          <a href="product1.html">Digital Thermometer X30-Pro</a>
        </td>
        <td className="ps-product__meta">
          {" "}
          <span className="ps-product__price sale">$77.65</span>
          <span className="ps-product__del">$80.65</span>
        </td>
        <td className="ps-product__quantity">
          <div className="def-number-input number-input safari_only">
            <button
              className="minus"
              onClick={() =>
                this.parentNode.querySelector("input[type=number]").stepDown()
              }
            >
              <i className="icon-minus" />
            </button>
            <input
              className="quantity"
              min={0}
              name="quantity"
              defaultValue={1}
              type="number"
            />
            <button
              className="plus"
              onClick={() =>
                this.parentNode.querySelector("input[type=number]").stepUp()
              }
            >
              <i className="icon-plus" />
            </button>
          </div>
        </td>
        <td className="ps-product__subtotal">$77.65</td>
      </tr>
    </tbody>
  );
};

export default CartItemTable;
