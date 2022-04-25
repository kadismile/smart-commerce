import React from "react";

const CartTableHead = () => {
  return (
    <thead>
      <tr>
        <th className="ps-product__remove" />
        <th className="ps-product__thumbnail" />
        <th className="ps-product__name">Product name</th>
        <th className="ps-product__meta">Unit price</th>
        <th className="ps-product__quantity">Quantity</th>
        <th className="ps-product__subtotal">Subtotal</th>
      </tr>
    </thead>
  );
};

export default CartTableHead;
