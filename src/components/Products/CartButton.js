import React from "react";

const Cartbutton = () => {
  return (
    <a
      className="ps-btn ps-btn--warning"
      href="#/"
      data-toggle="modal"
      data-target="#popupAddcart"
    >
      Add to cart
    </a>
  );
};

export default Cartbutton;
