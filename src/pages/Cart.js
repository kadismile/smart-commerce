import React from "react";

const Cart = () => {
  return (
    <div className="ps-shopping">
      <div className="container">
        <ul className="ps-breadcrumb">
          <li className="ps-breadcrumb__item">
            <a href="index-2.html">Home</a>
          </li>
          <li className="ps-breadcrumb__item active" aria-current="page">
            Shopping cart
          </li>
        </ul>
        <h3 className="ps-shopping__title">
          Shopping cart<sup>(3)</sup>
        </h3>
        <div className="ps-shopping__content">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-9">
              <table
                className="table ps-shopping__list"
                style={{
                  maxWidth: "100%",
                  color: "#103178",
                }}
              >
                <thead>
                  <tr
                    style={{
                      color: "#103178",
                    }}
                  >
                    <th className="align-middle text-center" colSpan={2}>
                      Product
                    </th>
                    <th className="align-middle text-center">Price</th>
                    <th className="align-middle text-center">Qty</th>
                    <th className="align-middle text-center">Subtotal</th>
                    <th className="align-middle text-center" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2} className="align-middle text-center">
                      <a
                        href="product1.html"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {/* <figure style={{ height: "3rem", width: "3rem" }}> */}
                        <img
                          style={{
                            height: "3rem",
                            width: "3rem",
                            marginRight: "1rem",
                          }}
                          src="img/products/001.jpg"
                          alt=""
                        />
                        Digital Thermometer X30-Pro
                        {/* </figure> */}
                      </a>
                    </td>
                    <td className="align-middle text-center">
                      {" "}
                      <span>$77.65</span>
                    </td>
                    <td className="align-middle text-center">
                      <div>
                        <input
                          style={{ width: "2rem" }}
                          min={0}
                          name="quantity"
                          defaultValue={1}
                          type="number"
                        />
                      </div>
                    </td>
                    <td
                      style={{ color: "#fd8d27" }}
                      className="align-middle text-center"
                    >
                      $77.65
                    </td>
                    <td className="align-middle text-center">
                      {" "}
                      <a href="#/">
                        <i className="icon-cross" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="align-middle text-center">
                      <a
                        href="product1.html"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {/* <figure style={{ height: "3rem", width: "3rem" }}> */}
                        <img
                          style={{
                            height: "3rem",
                            width: "3rem",
                            marginRight: "1rem",
                          }}
                          src="img/products/001.jpg"
                          alt=""
                        />
                        Digital Thermometer X30-Pro
                        {/* </figure> */}
                      </a>
                    </td>
                    <td className="align-middle text-center">
                      {" "}
                      <span>$77.65</span>
                    </td>
                    <td className="align-middle text-center">
                      <div>
                        <input
                          style={{ width: "2rem" }}
                          min={0}
                          name="quantity"
                          defaultValue={1}
                          type="number"
                        />
                      </div>
                    </td>
                    <td
                      style={{ color: "#fd8d27" }}
                      className="align-middle text-center"
                    >
                      $77.65
                    </td>
                    <td className="align-middle text-center">
                      {" "}
                      <a href="#/">
                        <i className="icon-cross" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="align-middle text-center">
                      <a
                        href="product1.html"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {/* <figure style={{ height: "3rem", width: "3rem" }}> */}
                        <img
                          style={{
                            height: "3rem",
                            width: "3rem",
                            marginRight: "1rem",
                          }}
                          src="img/products/001.jpg"
                          alt=""
                        />
                        Digital Thermometer X30-Pro
                        {/* </figure> */}
                      </a>
                    </td>
                    <td className="align-middle text-center">
                      {" "}
                      <span>$77.65</span>
                    </td>
                    <td className="align-middle text-center">
                      <div>
                        <input
                          style={{ width: "2rem" }}
                          min={0}
                          name="quantity"
                          defaultValue={1}
                          type="number"
                        />
                      </div>
                    </td>
                    <td
                      style={{ color: "#fd8d27" }}
                      className="align-middle text-center"
                    >
                      $77.65
                    </td>
                    <td className="align-middle text-center">
                      {" "}
                      <a href="#/">
                        <i className="icon-cross" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <ul className="ps-shopping__list">
                <li>
                  <div className="ps-product ps-product--wishlist">
                    <div className="ps-product__remove">
                      <a href="#/">
                        <i className="icon-cross" />
                      </a>
                    </div>
                    <div className="ps-product__thumbnail">
                      <a className="ps-product__image" href="product1.html">
                        <figure>
                          <img src="img/products/055.jpg" alt="alt" />
                        </figure>
                      </a>
                    </div>
                    <div className="ps-product__content">
                      <h5 className="ps-product__title">
                        <a href="product1.html">
                          Somersung Sonic X2500 Pro White
                        </a>
                      </h5>
                      <div className="ps-product__row">
                        <div className="ps-product__label">Price:</div>
                        <div className="ps-product__value">
                          <span className="ps-product__price">$399.99</span>
                        </div>
                      </div>
                      <div className="ps-product__row ps-product__stock">
                        <div className="ps-product__label">Stock:</div>
                        <div className="ps-product__value">
                          <span className="ps-product__in-stock">In Stock</span>
                        </div>
                      </div>
                      <div className="ps-product__cart">
                        <button className="ps-btn">Add to cart</button>
                      </div>
                      <div className="ps-product__row ps-product__quantity">
                        <div className="ps-product__label">Quantity:</div>
                        <div className="ps-product__value">1</div>
                      </div>
                      <div className="ps-product__row ps-product__subtotal">
                        <div className="ps-product__label">Subtotal:</div>
                        <div className="ps-product__value">$399.99</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ps-product ps-product--wishlist">
                    <div className="ps-product__remove">
                      <a href="#/">
                        <i className="icon-cross" />
                      </a>
                    </div>
                    <div className="ps-product__thumbnail">
                      <a className="ps-product__image" href="product1.html">
                        <figure>
                          <img src="img/products/001.jpg" alt="alt" />
                        </figure>
                      </a>
                    </div>
                    <div className="ps-product__content">
                      <h5 className="ps-product__title">
                        <a href="product1.html">Digital Thermometer X30-Pro</a>
                      </h5>
                      <div className="ps-product__row">
                        <div className="ps-product__label">Price:</div>
                        <div className="ps-product__value">
                          <span className="ps-product__price sale">$77.65</span>
                          <span className="ps-product__del">$80.65</span>
                        </div>
                      </div>
                      <div className="ps-product__row ps-product__stock">
                        <div className="ps-product__label">Stock:</div>
                        <div className="ps-product__value">
                          <span className="ps-product__in-stock">In Stock</span>
                        </div>
                      </div>
                      <div className="ps-product__cart">
                        <button className="ps-btn">Add to cart</button>
                      </div>
                      <div className="ps-product__row ps-product__quantity">
                        <div className="ps-product__label">Quantity:</div>
                        <div className="ps-product__value">1</div>
                      </div>
                      <div className="ps-product__row ps-product__subtotal">
                        <div className="ps-product__label">Subtotal:</div>
                        <div className="ps-product__value">$77.65</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}
              <div className="ps-shopping__table">
                <table className="table ps-table ps-table--product">
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
                              this.parentNode
                                .querySelector("input[type=number]")
                                .stepDown()
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
                              this.parentNode
                                .querySelector("input[type=number]")
                                .stepUp()
                            }
                          >
                            <i className="icon-plus" />
                          </button>
                        </div>
                      </td>
                      <td className="ps-product__subtotal">$77.65</td>
                    </tr>
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
                              this.parentNode
                                .querySelector("input[type=number]")
                                .stepDown()
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
                              this.parentNode
                                .querySelector("input[type=number]")
                                .stepUp()
                            }
                          >
                            <i className="icon-plus" />
                          </button>
                        </div>
                      </td>
                      <td className="ps-product__subtotal">$77.65</td>
                    </tr>
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
                              this.parentNode
                                .querySelector("input[type=number]")
                                .stepDown()
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
                              this.parentNode
                                .querySelector("input[type=number]")
                                .stepUp()
                            }
                          >
                            <i className="icon-plus" />
                          </button>
                        </div>
                      </td>
                      <td className="ps-product__subtotal">$77.65</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
            </div>
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
                    <label
                      className="form-check-label"
                      htmlFor="cart-free-ship"
                    >
                      Free shipping
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="cart-ship"
                    />
                    <label className="form-check-label" htmlFor="cart-ship">
                      Local Pickup: $10.00
                    </label>
                  </div>
                </div>
                <div className="ps-shopping__text">
                  Shipping options will be updated during checkout.
                </div>
                <a className="ps-shopping__toggle" href="#/">
                  Calculate shipping
                </a>
                <div className="ps-shopping__form">
                  <div className="ps-shopping__group">
                    <select className="js-example-basic-single" name="state">
                      <option
                      // selected
                      >
                        Select a country / region…
                      </option>
                      <option>Afghanistan</option>
                      <option>Åland Islands</option>
                      <option>Albania</option>
                      <option>Andorra</option>
                      <option>American Samoa</option>
                      <option>Andorra</option>
                    </select>
                  </div>
                  <div className="ps-shopping__group">
                    <input
                      className="form-control ps-input"
                      type="text"
                      placeholder="County"
                    />
                  </div>
                  <div className="ps-shopping__group">
                    <input
                      className="form-control ps-input"
                      type="text"
                      placeholder="Town / City"
                    />
                  </div>
                  <div className="ps-shopping__group">
                    <input
                      className="form-control ps-input"
                      type="text"
                      placeholder="Postcode"
                    />
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
                  <a className="ps-shopping__link" href="category-list.html">
                    Continue To Shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section className="ps-section--latest">
            <div className="container">
              <h3 className="ps-section__title">You may be interested in…</h3>
              <div className="ps-section__carousel">
                <div
                  className="owl-carousel"
                  data-owl-auto="false"
                  data-owl-loop="true"
                  data-owl-speed={13000}
                  data-owl-gap={0}
                  data-owl-nav="true"
                  data-owl-dots="true"
                  data-owl-item={5}
                  data-owl-item-xs={2}
                  data-owl-item-sm={2}
                  data-owl-item-md={3}
                  data-owl-item-lg={5}
                  data-owl-item-xl={5}
                  data-owl-duration={1000}
                  data-owl-mousedrag="on"
                >
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/033.jpg" alt="alt" />
                          </figure>
                        </a>
                        <div className="ps-product__actions">
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="#/">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupCompare"
                            >
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupQuickview"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                        </div>
                        <div className="ps-product__badge"></div>
                      </div>
                      <div className="ps-product__content">
                        <h5 className="ps-product__title">
                          <a href="product1.html">
                            3 Layer Disposable Protective Face masks
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price sale">$14.52</span>
                          <span className="ps-product__del">$17.24</span>
                        </div>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option
                              value={3}
                              // selected="selected"
                            >
                              3
                            </option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                          <span className="ps-product__review">( Reviews)</span>
                        </div>
                        <div className="ps-product__desc">
                          <ul className="ps-product__list">
                            <li>Study history up to 30 days</li>
                            <li>Up to 5 users simultaneously</li>
                            <li>Has HEALTH certificate</li>
                          </ul>
                        </div>
                        <div className="ps-product__actions ps-product__group-mobile">
                          <div className="ps-product__quantity">
                            <div className="def-number-input number-input safari_only">
                              <button
                                className="minus"
                                onClick={() =>
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown()
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
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp()
                                }
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
                            {" "}
                            <a
                              className="ps-btn ps-btn--warning"
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              Add to cart
                            </a>
                          </div>
                          <div
                            className="ps-product__item cart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a href="#/">
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a href="compare.html">
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/048.jpg" alt="alt" />
                            <img src="img/products/049.jpg" alt="alt" />
                          </figure>
                        </a>
                        <div className="ps-product__actions">
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="#/">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupCompare"
                            >
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupQuickview"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                        </div>
                        <div className="ps-product__badge">
                          <div className="ps-badge ps-badge--sale">Sale</div>
                        </div>
                      </div>
                      <div className="ps-product__content">
                        <h5 className="ps-product__title">
                          <a href="product1.html">
                            Manual Blood Pressure Apparatus
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price sale">$90.65</span>
                          <span className="ps-product__del">$60.39</span>
                        </div>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option
                              value={4}
                              //  selected="selected"
                            >
                              4
                            </option>
                            <option value={5}>5</option>
                          </select>
                          <span className="ps-product__review">( Reviews)</span>
                        </div>
                        <div className="ps-product__desc">
                          <ul className="ps-product__list">
                            <li>Study history up to 30 days</li>
                            <li>Up to 5 users simultaneously</li>
                            <li>Has HEALTH certificate</li>
                          </ul>
                        </div>
                        <div className="ps-product__actions ps-product__group-mobile">
                          <div className="ps-product__quantity">
                            <div className="def-number-input number-input safari_only">
                              <button
                                className="minus"
                                onClick={() =>
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown()
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
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp()
                                }
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
                            {" "}
                            <a
                              className="ps-btn ps-btn--warning"
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              Add to cart
                            </a>
                          </div>
                          <div
                            className="ps-product__item cart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a href="#/">
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a href="compare.html">
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/039.jpg" alt="alt" />
                            <img src="img/products/048.jpg" alt="alt" />
                          </figure>
                        </a>
                        <div className="ps-product__actions">
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="#/">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupCompare"
                            >
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupQuickview"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                        </div>
                        <div className="ps-product__badge"></div>
                      </div>
                      <div className="ps-product__content">
                        <h5 className="ps-product__title">
                          <a href="product1.html">
                            Generic Stethoscope Hearing Heartbeat Tool
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price sale">$38.39</span>
                          <span className="ps-product__del">$53.99</span>
                        </div>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option
                              value={3}
                              //  selected="selected"
                            >
                              3
                            </option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                          <span className="ps-product__review">( Reviews)</span>
                        </div>
                        <div className="ps-product__desc">
                          <ul className="ps-product__list">
                            <li>Study history up to 30 days</li>
                            <li>Up to 5 users simultaneously</li>
                            <li>Has HEALTH certificate</li>
                          </ul>
                        </div>
                        <div className="ps-product__actions ps-product__group-mobile">
                          <div className="ps-product__quantity">
                            <div className="def-number-input number-input safari_only">
                              <button
                                className="minus"
                                onClick={() =>
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown()
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
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp()
                                }
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
                            {" "}
                            <a
                              className="ps-btn ps-btn--warning"
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              Add to cart
                            </a>
                          </div>
                          <div
                            className="ps-product__item cart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a href="#/">
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a href="compare.html">
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/018.jpg" alt="alt" />
                            <img src="img/products/037.jpg" alt="alt" />
                          </figure>
                        </a>
                        <div className="ps-product__actions">
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="#/">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupCompare"
                            >
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupQuickview"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                        </div>
                        <div className="ps-product__badge">
                          <div className="ps-badge ps-badge--sale">Sale</div>
                        </div>
                      </div>
                      <div className="ps-product__content">
                        <h5 className="ps-product__title">
                          <a href="product1.html">
                            Backrest Biotec Dental Equipment
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price sale">
                            $497.65
                          </span>
                          <span className="ps-product__del">$369.65</span>
                        </div>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option
                              value={5}
                              //  selected="selected"
                            >
                              5
                            </option>
                          </select>
                          <span className="ps-product__review">( Reviews)</span>
                        </div>
                        <div className="ps-product__desc">
                          <ul className="ps-product__list">
                            <li>Study history up to 30 days</li>
                            <li>Up to 5 users simultaneously</li>
                            <li>Has HEALTH certificate</li>
                          </ul>
                        </div>
                        <div className="ps-product__actions ps-product__group-mobile">
                          <div className="ps-product__quantity">
                            <div className="def-number-input number-input safari_only">
                              <button
                                className="minus"
                                onClick={() =>
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown()
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
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp()
                                }
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
                            {" "}
                            <a
                              className="ps-btn ps-btn--warning"
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              Add to cart
                            </a>
                          </div>
                          <div
                            className="ps-product__item cart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a href="#/">
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a href="compare.html">
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/046.jpg" alt="alt" />
                            <img src="img/products/037.jpg" alt="alt" />
                          </figure>
                        </a>
                        <div className="ps-product__actions">
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="#/">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupCompare"
                            >
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupQuickview"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                        </div>
                        <div className="ps-product__badge">
                          <div className="ps-badge ps-badge--sale">Sale</div>
                        </div>
                      </div>
                      <div className="ps-product__content">
                        <h5 className="ps-product__title">
                          <a href="product1.html">
                            Blood Ketone Monitoring Starter Kit
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price sale">$39.65</span>
                          <span className="ps-product__del">$38.65</span>
                        </div>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option
                              value={5}
                              //  selected="selected"
                            >
                              5
                            </option>
                          </select>
                          <span className="ps-product__review">( Reviews)</span>
                        </div>
                        <div className="ps-product__desc">
                          <ul className="ps-product__list">
                            <li>Study history up to 30 days</li>
                            <li>Up to 5 users simultaneously</li>
                            <li>Has HEALTH certificate</li>
                          </ul>
                        </div>
                        <div className="ps-product__actions ps-product__group-mobile">
                          <div className="ps-product__quantity">
                            <div className="def-number-input number-input safari_only">
                              <button
                                className="minus"
                                onClick={() =>
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown()
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
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp()
                                }
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
                            {" "}
                            <a
                              className="ps-btn ps-btn--warning"
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              Add to cart
                            </a>
                          </div>
                          <div
                            className="ps-product__item cart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a href="#/">
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a href="compare.html">
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/037.jpg" alt="alt" />
                            <img src="img/products/047.jpg" alt="alt" />
                          </figure>
                        </a>
                        <div className="ps-product__actions">
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="#/">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupCompare"
                            >
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupQuickview"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                        </div>
                        <div className="ps-product__badge"></div>
                      </div>
                      <div className="ps-product__content">
                        <h5 className="ps-product__title">
                          <a href="product1.html">Hill-Rom CareAssist</a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price">$816.65</span>
                        </div>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option
                              value={5}
                              //  selected="selected"
                            >
                              5
                            </option>
                          </select>
                          <span className="ps-product__review">( Reviews)</span>
                        </div>
                        <div className="ps-product__desc">
                          <ul className="ps-product__list">
                            <li>Study history up to 30 days</li>
                            <li>Up to 5 users simultaneously</li>
                            <li>Has HEALTH certificate</li>
                          </ul>
                        </div>
                        <div className="ps-product__actions ps-product__group-mobile">
                          <div className="ps-product__quantity">
                            <div className="def-number-input number-input safari_only">
                              <button
                                className="minus"
                                onClick={() =>
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown()
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
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp()
                                }
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
                            {" "}
                            <a
                              className="ps-btn ps-btn--warning"
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              Add to cart
                            </a>
                          </div>
                          <div
                            className="ps-product__item cart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a href="#/">
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a href="compare.html">
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/032.jpg" alt="alt" />
                            <img src="img/products/038.jpg" alt="alt" />
                          </figure>
                        </a>
                        <div className="ps-product__actions">
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="#/">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupCompare"
                            >
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupQuickview"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                        </div>
                        <div className="ps-product__badge">
                          <div className="ps-badge ps-badge--sale">Sale</div>
                        </div>
                      </div>
                      <div className="ps-product__content">
                        <h5 className="ps-product__title">
                          <a href="product1.html">
                            Health care portable cardiac monitoring
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price sale">
                            $511.65
                          </span>
                          <span className="ps-product__del">$135.65</span>
                        </div>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option
                              value={5}
                              //  selected="selected"
                            >
                              5
                            </option>
                          </select>
                          <span className="ps-product__review">( Reviews)</span>
                        </div>
                        <div className="ps-product__desc">
                          <ul className="ps-product__list">
                            <li>Study history up to 30 days</li>
                            <li>Up to 5 users simultaneously</li>
                            <li>Has HEALTH certificate</li>
                          </ul>
                        </div>
                        <div className="ps-product__actions ps-product__group-mobile">
                          <div className="ps-product__quantity">
                            <div className="def-number-input number-input safari_only">
                              <button
                                className="minus"
                                onClick={() =>
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown()
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
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp()
                                }
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
                            {" "}
                            <a
                              className="ps-btn ps-btn--warning"
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              Add to cart
                            </a>
                          </div>
                          <div
                            className="ps-product__item cart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a href="#/">
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a href="compare.html">
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/043.jpg" alt="alt" />
                            <img src="img/products/038.jpg" alt="alt" />
                          </figure>
                        </a>
                        <div className="ps-product__actions">
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="#/">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupCompare"
                            >
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick view"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupQuickview"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                        </div>
                        <div className="ps-product__badge"></div>
                      </div>
                      <div className="ps-product__content">
                        <h5 className="ps-product__title">
                          <a href="product1.html">
                            FDA&amp;ISO Osstem Dental Chair
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price">$488.65</span>
                        </div>
                        <div className="ps-product__rating">
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option
                              value={5}
                              //  selected="selected"
                            >
                              5
                            </option>
                          </select>
                          <span className="ps-product__review">( Reviews)</span>
                        </div>
                        <div className="ps-product__desc">
                          <ul className="ps-product__list">
                            <li>Study history up to 30 days</li>
                            <li>Up to 5 users simultaneously</li>
                            <li>Has HEALTH certificate</li>
                          </ul>
                        </div>
                        <div className="ps-product__actions ps-product__group-mobile">
                          <div className="ps-product__quantity">
                            <div className="def-number-input number-input safari_only">
                              <button
                                className="minus"
                                onClick={() =>
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown()
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
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp()
                                }
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
                            {" "}
                            <a
                              className="ps-btn ps-btn--warning"
                              href="#/"
                              data-toggle="modal"
                              data-target="#popupAddcart"
                            >
                              Add to cart
                            </a>
                          </div>
                          <div
                            className="ps-product__item cart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to cart"
                          >
                            <a href="#/">
                              <i className="fa fa-shopping-basket" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          >
                            <a href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </div>
                          <div
                            className="ps-product__item rotate"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to compare"
                          >
                            <a href="compare.html">
                              <i className="fa fa-align-left" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cart;
