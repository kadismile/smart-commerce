import React from "react";

const InterestedIn = () => {
  return (
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
                    <a href="product1.html">Manual Blood Pressure Apparatus</a>
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
                    <a href="product1.html">Backrest Biotec Dental Equipment</a>
                  </h5>
                  <div className="ps-product__meta">
                    <span className="ps-product__price sale">$497.65</span>
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
                    <span className="ps-product__price sale">$511.65</span>
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
                    <a href="product1.html">FDA&amp;ISO Osstem Dental Chair</a>
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
  );
};

export default InterestedIn;
