import React from "react";

function Home() {
  return (
    <div className="ps-home ps-home--1">
      <section className="ps-section--banner">
        <div className="ps-section__overlay">
          <div className="ps-section__loading" />
        </div>
        <div
          className="owl-carousel"
          data-owl-auto="false"
          data-owl-loop="true"
          data-owl-speed={15000}
          data-owl-gap={0}
          data-owl-nav="true"
          data-owl-dots="true"
          data-owl-item={1}
          data-owl-item-xs={1}
          data-owl-item-sm={1}
          data-owl-item-md={1}
          data-owl-item-lg={1}
          data-owl-duration={1000}
          data-owl-mousedrag="on"
        >
          <div className="ps-banner" style={{ background: "#DAECFA" }}>
            <div className="container container-initial">
              <div className="ps-banner__block">
                <div className="ps-banner__content">
                  <h2 className="ps-banner__title">
                    Candid <br /> Whitening Kit
                  </h2>
                  <div className="ps-banner__desc">
                    Only in this week. Don’t misss!
                  </div>
                  <div className="ps-banner__price">
                    <span>$15.99</span>
                    <del>$29.99</del>
                  </div>
                  <a className="bg-warning ps-banner__shop" href="#/">
                    Shop now
                  </a>
                  <div className="ps-banner__persen bg-warning ps-center">
                    -30%
                  </div>
                </div>
                <div className="ps-banner__thumnail">
                  <img
                    className="ps-banner__round"
                    src="img/round2.png"
                    alt="alt"
                  />
                  <img
                    className="ps-banner__image"
                    src="img/promotion/slide1.png"
                    alt="alt"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ps-banner" style={{ background: "#F0F2F5" }}>
            <div className="container container-initial">
              <div className="ps-banner__block">
                <div className="ps-banner__content">
                  <h2 className="ps-banner__title">
                    Antibacterial
                    <br /> Medical Mask
                  </h2>
                  <div className="ps-banner__desc">
                    Just a few seconds to measure your body temperature.
                  </div>
                  <div className="ps-banner__btn-group">
                    <div className="ps-banner__btn">
                      <img src="img/icon/bacterial.svg" alt="alt" />
                      Anti-Bacterial
                    </div>
                    <div className="ps-banner__btn">
                      <img src="img/icon/virus.svg" alt="alt" />
                      Anti-Virus
                    </div>
                  </div>
                  <a className="bg-warning ps-banner__shop" href="#/">
                    Shop now
                  </a>
                  <div className="ps-banner__persen bg-yellow ps-top">
                    <small>only</small>$25
                  </div>
                </div>
                <div className="ps-banner__thumnail">
                  <img
                    className="ps-banner__round"
                    src="img/round5.png"
                    alt="alt"
                  />
                  <img
                    className="ps-banner__image"
                    src="img/promotion/slide3.png"
                    alt="alt"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ps-banner" style={{ background: "#FFCC00" }}>
            <div className="container container-initial">
              <div className="ps-banner__block">
                <div className="ps-banner__content">
                  <h2 className="ps-banner__title">
                    Get rid of bacteria <br />
                    in your home
                  </h2>
                  <div className="ps-banner__desc">
                    Get rid of all bacteria!
                  </div>
                  <div className="ps-banner__btn-group">
                    <div className="ps-banner__btn">
                      <img src="img/icon/bacterial.svg" alt="alt" />
                      Anti-Bacterial
                    </div>
                    <div className="ps-banner__btn">
                      <img src="img/icon/virus.svg" alt="alt" />
                      Anti-Virus
                    </div>
                  </div>
                  <a className="bg-white ps-banner__shop" href="#/">
                    Shop now
                  </a>
                  <div className="ps-banner__persen bg-primary">-25%</div>
                </div>
                <div className="ps-banner__thumnail">
                  <img
                    className="ps-banner__round"
                    src="img/round2.png"
                    alt="alt"
                  />
                  <img
                    className="ps-banner__image"
                    src="img/promotion/slide4.png"
                    alt="alt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ps-home__content">
        <div className="container">
          <section className="ps-section--category">
            <h3 className="ps-section__title">Most popular categories</h3>
            <div className="ps-category--block">
              <div className="ps-category__thumbnail">
                <a className="ps-category__image" href="category-grid.html">
                  <img src="img/promotion/dental-cat.png" alt="" />
                </a>
                <div className="ps-category__content">
                  <a className="ps-category__name" href="category-grid.html">
                    Food Mart
                  </a>
                  <a className="ps-category__more" href="category-grid.html">
                    More
                  </a>
                </div>
              </div>
              <div className="ps-category__thumbnail">
                <a className="ps-category__image" href="category-grid.html">
                  <img src="img/promotion/uniforms-cat.png" alt="" />
                </a>
                <div className="ps-category__content">
                  <a className="ps-category__name" href="category-grid.html">
                    Household
                  </a>
                  <a className="ps-category__more" href="category-grid.html">
                    More
                  </a>
                </div>
              </div>
              <div className="ps-category__thumbnail">
                <a className="ps-category__image" href="category-grid.html">
                  <img src="img/promotion/pressure-cat.png" alt="" />
                </a>
                <div className="ps-category__content">
                  <a className="ps-category__name" href="category-grid.html">
                    Beer, Wine & Spirits
                  </a>
                  <a className="ps-category__more" href="category-grid.html">
                    More
                  </a>
                </div>
              </div>
              <div className="ps-category__thumbnail">
                <a className="ps-category__image" href="category-grid.html">
                  <img src="img/promotion/dental-cat.png" alt="" />
                </a>
                <div className="ps-category__content">
                  <a className="ps-category__name" href="category-grid.html">
                    Baby Products
                  </a>
                  <a className="ps-category__more" href="category-grid.html">
                    More
                  </a>
                </div>
              </div>
              <div className="ps-category__thumbnail">
                <a className="ps-category__image" href="category-grid.html">
                  <img src="img/promotion/uniforms-cat.png" alt="" />
                </a>
                <div className="ps-category__content">
                  <a className="ps-category__name" href="category-grid.html">
                    Fragrances
                  </a>
                  <a className="ps-category__more" href="category-grid.html">
                    More
                  </a>
                </div>
              </div>
              <div className="ps-category__thumbnail">
                <a className="ps-category__image" href="category-grid.html">
                  <img src="img/promotion/pressure-cat.png" alt="" />
                </a>
                <div className="ps-category__content">
                  <a className="ps-category__name" href="category-grid.html">
                    Oral Care
                  </a>
                  <a className="ps-category__more" href="category-grid.html">
                    More
                  </a>
                </div>
              </div>
            </div>
          </section>
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepDown();
                              }}
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepUp();
                              }}
                            >
                              <i className="icon-plus" />
                            </button>
                          </div>
                        </div>
                        <div className="ps-product__cart">
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepDown();
                              }}
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepUp();
                              }}
                            >
                              <i className="icon-plus" />
                            </button>
                          </div>
                        </div>
                        <div className="ps-product__cart">
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepDown();
                              }}
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepUp();
                              }}
                            >
                              <i className="icon-plus" />
                            </button>
                          </div>
                        </div>
                        <div className="ps-product__cart">
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepDown();
                              }}
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepUp();
                              }}
                            >
                              <i className="icon-plus" />
                            </button>
                          </div>
                        </div>
                        <div className="ps-product__cart">
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepDown();
                              }}
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepUp();
                              }}
                            >
                              <i className="icon-plus" />
                            </button>
                          </div>
                        </div>
                        <div className="ps-product__cart">
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepDown();
                              }}
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepUp();
                              }}
                            >
                              <i className="icon-plus" />
                            </button>
                          </div>
                        </div>
                        <div className="ps-product__cart">
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepDown();
                              }}
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepUp();
                              }}
                            >
                              <i className="icon-plus" />
                            </button>
                          </div>
                        </div>
                        <div className="ps-product__cart">
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
                        <a href="product1.html">
                          Extractor used to remove teeth
                        </a>
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepDown();
                              }}
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepUp();
                              }}
                            >
                              <i className="icon-plus" />
                            </button>
                          </div>
                        </div>
                        <div className="ps-product__cart">
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepDown();
                              }}
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
                              onClick={() => {
                                this.parentNode
                                  .querySelector("input[type=number]")
                                  .stepUp();
                              }}
                            >
                              <i className="icon-plus" />
                            </button>
                          </div>
                        </div>
                        <div className="ps-product__cart">
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
        <div className="container">
          <div
            className="ps-delivery"
            data-background="img/promotion/banner-delivery-2.jpg"
          >
            <div className="ps-delivery__content">
              <div className="ps-delivery__text">
                <i className="icon-shield-check" />
                <span>
                  {" "}
                  <strong>100% Secure delivery </strong>without contacting the
                  courier
                </span>
              </div>
              <a className="ps-delivery__more" href="#/">
                More
              </a>
            </div>
          </div>
          <section className="ps-section--featured">
            <h3 className="ps-section__title">Featured products</h3>
            <div className="ps-section__content">
              <div className="row m-0">
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
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
                          <div className="ps-badge ps-badge--sale">Sale</div>
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown();
                                }}
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp();
                                }}
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
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
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
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
                          <div className="ps-badge ps-badge--sale">Sale</div>
                        </div>
                      </div>
                      <div className="ps-product__content">
                        <h5 className="ps-product__title">
                          <a href="product1.html">
                            Digital Thermometer X30-Pro
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price sale">$60.39</span>
                          <span className="ps-product__del">$89.99</span>
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown();
                                }}
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp();
                                }}
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
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
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
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
                          <div className="ps-badge ps-badge--sale">Sale</div>
                        </div>
                      </div>
                      <div className="ps-product__content">
                        <h5 className="ps-product__title">
                          <a href="product1.html">
                            Oxygen concentrator model KTS-5000
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price">$53.99</span>
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown();
                                }}
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp();
                                }}
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
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
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/002.jpg" alt="alt" />
                            <img src="img/products/017.jpg" alt="alt" />
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
                            Blue Hot Water Bottle, 2 Quart Capacity
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price sale">$38.39</span>
                          <span className="ps-product__del">
                            $14.52 - $15.52
                          </span>
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown();
                                }}
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp();
                                }}
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
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
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/003.jpg" alt="alt" />
                            <img src="img/products/008.jpg" alt="alt" />
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
                            Automatic blood pressure monitor
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price sale">$90.65</span>
                          <span className="ps-product__del">$60.65</span>
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown();
                                }}
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp();
                                }}
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
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
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/007.jpg" alt="alt" />
                            <img src="img/products/004.jpg" alt="alt" />
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
                            Mild Binocular Compound Light Microscope
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown();
                                }}
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp();
                                }}
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
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
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/015.jpg" alt="alt" />
                            <img src="img/products/040.jpg" alt="alt" />
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
                            Lens Frame Professional Adjustable Multifunctional
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price sale">$89.65</span>
                          <span className="ps-product__del">$60.65</span>
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown();
                                }}
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp();
                                }}
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
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
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown();
                                }}
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp();
                                }}
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
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
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
                  <div className="ps-section__product">
                    <div className="ps-product ps-product--standard">
                      <div className="ps-product__thumbnail">
                        <a className="ps-product__image" href="product1.html">
                          <figure>
                            <img src="img/products/019.jpg" alt="alt" />
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
                        <div className="ps-product__badge"></div>
                      </div>
                      <div className="ps-product__content">
                        <h5 className="ps-product__title">
                          <a href="product1.html">Radio-fluoroscopy system</a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price">$389.65</span>
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown();
                                }}
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp();
                                }}
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
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
                <div className="col-6 col-md-4 col-lg-2dot4 p-0">
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
                            Bronze Blood Pressure Monitor
                          </a>
                        </h5>
                        <div className="ps-product__meta">
                          <span className="ps-product__price">
                            $56.65 - $97.65
                          </span>
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepDown();
                                }}
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
                                onClick={() => {
                                  this.parentNode
                                    .querySelector("input[type=number]")
                                    .stepUp();
                                }}
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="ps-product__cart">
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
              <div className="ps-shop__more">
                <a href="#/">Show all</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
