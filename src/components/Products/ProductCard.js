import React from "react";
import ProductPrice from "./ProductPrice";
import ProductQty from "./ProductQty";

const ProductCard = () => {
  return (
    <div className="ps-categogy--list">
      <div className="ps-product ps-product--list">
        <div className="ps-product__content">
          <div className="ps-product__thumbnail">
            <a className="ps-product__image" href="#/">
              <figure>
                <img src="img/products/006.jpg" alt="alt" />
                <img src="img/products/052.jpg" alt="alt" />
              </figure>
            </a>
            <div className="ps-product__actions">
              <div
                className="ps-product__item"
                data-toggle="tooltip"
                data-placement="left"
                title="Quick view"
              >
                <a href="#/" data-toggle="modal" data-target="#popupQuickview">
                  <i className="fa fa-search" />
                </a>
              </div>
            </div>
            <div className="ps-product__badge">
              <div className="ps-badge ps-badge--sale">Sale</div>
            </div>
          </div>
          <div className="ps-product__info d-flex justify-content-center align-items-center">
            <h5 className="ps-product__title mb-0">
              <a href="#/">Protectiva Soft absorbent pads, 30 pcs.</a>
            </h5>
          </div>
        </div>
        <div className="ps-product__footer">
          <ProductPrice />
          <ProductQty />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
