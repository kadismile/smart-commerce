import React from "react";

const NotFound = () => {
  return (
    <div className="ps-page--notfound">
      <div className="container">
        <ul className="ps-breadcrumb">
          <li className="ps-breadcrumb__item">
            <a href="index-2.html">Home</a>
          </li>
          <li className="ps-breadcrumb__item active" aria-current="page">
            404
          </li>
        </ul>
        <div className="ps-page__content text-center">
          <div className="d-flex justify-content-center">
            <div className="col-12 col-md-6 col-lg-7">
              <h1 className="ps-page__name">404</h1>
              <h5>This page has been probably moved somewhere...</h5>
              <p>Please back to homepage or check our offer</p>
              <div>
                <a className="ps-btn ps-btn--primary" href="index-2.html">
                  Back to homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="ps-section--latest">
        <div className="container">
          <h3 className="ps-section__title">Latest products</h3>
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
                        <img src="img/products/001.jpg" alt="alt" />
                        <img src="img/products/009.jpg" alt="alt" />
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
                      <div className="ps-badge ps-badge--sold">Sold Out</div>
                    </div>
                  </div>
                  <div className="ps-product__content">
                    <h5 className="ps-product__title">
                      <a href="product1.html">Digital Thermometer X30-Pro</a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price sale">$77.65</span>
                      <span className="ps-product__del">$80.65</span>
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
                        <img src="img/products/053.jpg" alt="alt" />
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
                      <a href="product1.html">Somersung Sonic X500 Basic</a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price sale">$38.39</span>
                      <span className="ps-product__del">$53.99</span>
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
                        <img src="img/products/054.jpg" alt="alt" />
                        <img src="img/products/057.jpg" alt="alt" />
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
                      <div className="ps-badge ps-badge--hot">Hot</div>
                    </div>
                  </div>
                  <div className="ps-product__content">
                    <h5 className="ps-product__title">
                      <a href="product1.html">
                        Somersung Sonic X2000 Pro Black
                      </a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price">$299.99</span>
                    </div>
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option
                          value={4}
                          // selected="selected"
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
                        <img src="img/products/055.jpg" alt="alt" />
                        <img src="img/products/056.jpg" alt="alt" />
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
                        Somersung Sonic X2500 Pro White
                      </a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price">$39.99</span>
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
                        <img src="img/products/006.jpg" alt="alt" />
                        <img src="img/products/051.jpg" alt="alt" />
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
                      <div className="ps-badge ps-badge--sold">Sold Out</div>
                    </div>
                  </div>
                  <div className="ps-product__content">
                    <h5 className="ps-product__title">
                      <a href="product1.html">
                        GAnti-Dust Filter, Breathable, 3 Layers of Purifying
                      </a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price">$17.99</span>
                    </div>
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option
                          value={5}
                          // selected="selected"
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
                        <img src="img/products/017.jpg" alt="alt" />
                        <img src="img/products/002.jpg" alt="alt" />
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
                        Red Hot Water Bottle, 2 Quart Capacity
                      </a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price">$13.64</span>
                    </div>
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option
                          value={5}
                          // selected="selected"
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
                        <img src="img/products/028.jpg" alt="alt" />
                        <img src="img/products/045.jpg" alt="alt" />
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
                      <div className="ps-badge ps-badge--sold">Sold Out</div>
                    </div>
                  </div>
                  <div className="ps-product__content">
                    <h5 className="ps-product__title">
                      <a href="product1.html">Digital Thermometer X30-Pro</a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price sale">$88.39</span>
                      <span className="ps-product__del">$60.23</span>
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
                        <img src="img/products/042.jpg" alt="alt" />
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
                      <a href="product1.html">Extractor used to remove teeth</a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price">$53.64</span>
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
                        <img src="img/products/016.jpg" alt="alt" />
                        <img src="img/products/021.jpg" alt="alt" />
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
                      <div className="ps-badge ps-badge--hot">Hot</div>
                    </div>
                  </div>
                  <div className="ps-product__content">
                    <h5 className="ps-product__title">
                      <a href="product1.html">
                        Oxygen concentrator model KTS-5000
                      </a>
                    </h5>
                    <div className="ps-product__meta">
                      <span className="ps-product__price">$432.64</span>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
