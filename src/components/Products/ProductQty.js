import React from "react";
import Cartbutton from "./CartButton";

function ProductQty() {
  return (
    <div className="ps-product__quantity">
      <h6>Quantity</h6>
      <div className="def-number-input number-input safari_only">
        <button
          className="minus"
          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
        >
          <i className="icon-plus" />
        </button>
      </div>
      <Cartbutton />
    </div>
  );
}

export default ProductQty;
