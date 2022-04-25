import React from "react";

const CartFooter = () => {
  return (
    <div className="ps-shopping__footer">
      <div className="ps-shopping__coupon">
        <input
          className="form-control ps-input"
          type="text"
          placeholder="Coupon code"
        />
        <button className="ps-btn ps-btn--primary" type="button">
          Apply coupon
        </button>
      </div>
      <div className="ps-shopping__button">
        <button className="ps-btn ps-btn--primary" type="button">
          Clear All
        </button>
        <button className="ps-btn ps-btn--primary" type="button">
          Update cart
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
