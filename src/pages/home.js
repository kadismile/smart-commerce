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
          <div className="ps-promo ps-not-padding">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="ps-promo__item">
                  <img
                    className="ps-promo__banner"
                    src="img/promotion/bg-banner1.jpg"
                    alt="alt"
                  />
                  <div className="ps-promo__content">
                    <span className="ps-promo__badge">New</span>
                    <h4 className="mb-20 ps-promo__name">
                      Vaprorizer <br />
                      Charger <br />
                      X200 5KW
                    </h4>
                    <a className="ps-promo__btn" href="category-grid.html">
                      More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="ps-promo__item">
                  <img
                    className="ps-promo__banner"
                    src="img/promotion/bg-banner2.jpg"
                    alt="alt"
                  />
                  <div className="ps-promo__content">
                    <h4 className="ps-promo__name">
                      Digital <br />
                      Thermometer <br />
                      X30-Pro
                    </h4>
                    <div className="ps-promo__sale">-10%</div>
                    <a className="ps-promo__btn" href="category-grid.html">
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="ps-promo__item">
                  <img
                    className="ps-promo__banner"
                    src="img/promotion/bg-banner3.jpg"
                    alt="alt"
                  />
                  <div className="ps-promo__content">
                    <h4 className="text-white ps-promo__name">
                      SuperBrush <br />
                      X200 Higenic
                    </h4>
                    <div className="ps-promo__meta">
                      <p className="ps-promo__price">$119.00</p>
                      <p className="ps-promo__del">$129.00</p>
                    </div>
                    <a className="ps-promo__btn" href="category-grid.html">
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="ps-section--category">
            <h3 className="ps-section__title">
              Check out the most popular categories
            </h3>
            <div className="ps-category--block">
              <div className="ps-category__thumbnail">
                <a className="ps-category__image" href="category-grid.html">
                  <img src="img/promotion/facemask-cat.png" alt="" />
                </a>
                <div className="ps-category__content">
                  <a className="ps-category__name" href="category-grid.html">
                    Face masks
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
                    Uniforms
                  </a>
                  <a className="ps-category__more" href="category-grid.html">
                    More
                  </a>
                </div>
              </div>
              <div className="ps-category__thumbnail">
                <a className="ps-category__image" href="category-grid.html">
                  <img src="img/promotion/protectcover-cat.png" alt="" />
                </a>
                <div className="ps-category__content">
                  <a className="ps-category__name" href="category-grid.html">
                    Protective covers
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
                    Dental
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
                    Blood pressure
                  </a>
                  <a className="ps-category__more" href="category-grid.html">
                    More
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-2">
                <div className="ps-category__nav">
                  <div className="ps-category__title">Wound Care</div>
                  <ul className="ps-category__list">
                    <li>
                      <a href="category-grid.html">Accessories</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Bandages</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Gypsum foundations</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Patches and tapes</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Surgical sutures</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Swabs</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Wound healing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2">
                <div className="ps-category__nav">
                  <div className="ps-category__title">Higiene</div>
                  <ul className="ps-category__list">
                    <li>
                      <a href="category-grid.html">Disinfectants</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Disposable products</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Face Masks - protective</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Gloves</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Protective clothing</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Sterilization</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Surgical foils</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2">
                <div className="ps-category__nav">
                  <div className="ps-category__title">Laboratory</div>
                  <ul className="ps-category__list">
                    <li>
                      <a href="category-grid.html">Accessories</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Devices</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Diagnostic tests</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Dyes</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Pipettes</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Tubes</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Test-tubes</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2">
                <div className="ps-category__nav">
                  <div className="ps-category__title">Tools</div>
                  <ul className="ps-category__list">
                    <li>
                      <a href="category-grid.html">Care products</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Claws and forceps</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Electrosurgery</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Needles</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Plaster tools</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Scalpels, blades</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Scissors</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2">
                <div className="ps-category__nav">
                  <div className="ps-category__title">Diagnosis</div>
                  <ul className="ps-category__list">
                    <li>
                      <a href="category-grid.html">Accessories</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Biopsy tools</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Endoscopes</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Monitoring</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Otoscopes</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Oxygen concentrators</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Thermometers</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2">
                <div className="ps-category__nav">
                  <div className="ps-category__title">Equipment</div>
                  <ul className="ps-category__list">
                    <li>
                      <a href="category-grid.html">Blades</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Education</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Germicidal lamps</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Infusion stands</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Lighting</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Machines</a>
                    </li>
                    <li>
                      <a href="category-grid.html">Tables and assistants</a>
                    </li>
                  </ul>
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
                          <option value={5} selected="selected">
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                          <option value={5} selected="selected">
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                          <option value={4} selected="selected">
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                          <option value={5} selected="selected">
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                          <option value={5} selected="selected">
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                          <option value={5} selected="selected">
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                          <option value={5} selected="selected">
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                          <option value={5} selected="selected">
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                          <option value={4} selected="selected">
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
          <section className="ps-section--deals">
            <div className="ps-section__header">
              <h3 className="ps-section__title">Best Deals of the week!</h3>
              <div className="ps-countdown">
                <div className="ps-countdown__content">
                  <div className="ps-countdown__block ps-countdown__days">
                    <div className="ps-countdown__number">
                      <span className="first-1st">0</span>
                      <span className="first">0</span>
                      <span className="last">0</span>
                    </div>
                    <div className="ps-countdown__ref">Days</div>
                  </div>
                  <div className="ps-countdown__block ps-countdown__hours">
                    <div className="ps-countdown__number">
                      <span className="first">0</span>
                      <span className="last">0</span>
                    </div>
                    <div className="ps-countdown__ref">Hours</div>
                  </div>
                  <div className="ps-countdown__block ps-countdown__minutes">
                    <div className="ps-countdown__number">
                      <span className="first">0</span>
                      <span className="last">0</span>
                    </div>
                    <div className="ps-countdown__ref">Mins</div>
                  </div>
                  <div className="ps-countdown__block ps-countdown__seconds">
                    <div className="ps-countdown__number">
                      <span className="first">0</span>
                      <span className="last">0</span>
                    </div>
                    <div className="ps-countdown__ref">Secs</div>
                  </div>
                </div>
              </div>
            </div>
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
                          <img src="img/products/030.jpg" alt="alt" />
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
                      <div className="ps-product__percent">-26%</div>
                    </div>
                    <div className="ps-product__content">
                      <h5 className="ps-product__title">
                        <a href="product1.html">
                          Multi hook retractor surgical spinal retractors
                        </a>
                      </h5>
                      <div className="ps-product__meta">
                        <span className="ps-product__price sale">$65.39</span>
                        <span className="ps-product__del">$48.99</span>
                      </div>
                      <div className="ps-product__rating">
                        <select className="ps-rating" data-read-only="true">
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5} selected="selected">
                            5
                          </option>
                        </select>
                        <span className="ps-product__review">( Reviews)</span>
                      </div>
                      <div className="ps-product__footer">
                        No of pcs available <span>3 </span>
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                          <img src="img/products/051.jpg" alt="alt" />
                          <img src="img/products/052.jpg" alt="alt" />
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
                      <div className="ps-product__percent">-54%</div>
                    </div>
                    <div className="ps-product__content">
                      <h5 className="ps-product__title">
                        <a href="product1.html">
                          3-Ply Ear-Loop Disposable Blue Face Mask
                        </a>
                      </h5>
                      <div className="ps-product__meta">
                        <span className="ps-product__price sale">$32.39</span>
                        <span className="ps-product__del">$14.99</span>
                      </div>
                      <div className="ps-product__rating">
                        <select className="ps-rating" data-read-only="true">
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                        <span className="ps-product__review">( Reviews)</span>
                      </div>
                      <div className="ps-product__footer">
                        No of pcs available <span>13 </span>
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                          <img src="img/products/050.jpg" alt="alt" />
                          <img src="img/products/052.jpg" alt="alt" />
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
                      <div className="ps-product__percent">-61%</div>
                    </div>
                    <div className="ps-product__content">
                      <h5 className="ps-product__title">
                        <a href="product1.html">
                          Disposable Face Mask for Unisex
                        </a>
                      </h5>
                      <div className="ps-product__meta">
                        <span className="ps-product__price sale">$20.39</span>
                        <span className="ps-product__del">$8.15</span>
                      </div>
                      <div className="ps-product__rating">
                        <select className="ps-rating" data-read-only="true">
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5} selected="selected">
                            5
                          </option>
                        </select>
                        <span className="ps-product__review">( Reviews)</span>
                      </div>
                      <div className="ps-product__footer">
                        No of pcs available <span>10 </span>
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                      <div className="ps-product__badge"></div>
                      <div className="ps-product__percent">-30%</div>
                    </div>
                    <div className="ps-product__content">
                      <h5 className="ps-product__title">
                        <a href="product1.html">
                          Blue Hot Water Bottle, 2 Quart Capacity
                        </a>
                      </h5>
                      <div className="ps-product__meta">
                        <span className="ps-product__price">
                          $14.52 - $15.52
                        </span>
                      </div>
                      <div className="ps-product__rating">
                        <select className="ps-rating" data-read-only="true">
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5} selected="selected">
                            5
                          </option>
                        </select>
                        <span className="ps-product__review">( Reviews)</span>
                      </div>
                      <div className="ps-product__footer">
                        No of pcs available <span>22 </span>
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                        <span className="ps-product__price sale">$53.75</span>
                        <span className="ps-product__del">$38.24</span>
                      </div>
                      <div className="ps-product__rating">
                        <select className="ps-rating" data-read-only="true">
                          <option value={1}>1</option>
                          <option value={2} selected="selected">
                            2
                          </option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                        <span className="ps-product__review">( Reviews)</span>
                      </div>
                      <div className="ps-product__footer">
                        No of pcs available <span>10 </span>
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
          </section>
          <section className="ps-section--sellers">
            <h3 className="ps-section__title">Top 5 Bestsellers in: </h3>
            <div className="ps-section__tab">
              <ul className="nav nav-tabs" id="bestsellerTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="blood-tab"
                    data-toggle="tab"
                    href="#blood"
                    role="tab"
                    aria-controls="blood"
                    aria-selected="true"
                  >
                    Blood pressure
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="mask-tab"
                    data-toggle="tab"
                    href="#mask"
                    role="tab"
                    aria-controls="mask"
                    aria-selected="false"
                  >
                    Face masks
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="stomatology-tab"
                    data-toggle="tab"
                    href="#stomatology"
                    role="tab"
                    aria-controls="stomatology"
                    aria-selected="false"
                  >
                    Stomatology
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="bestsellerTabContent">
                <div
                  className="tab-pane fade show active"
                  id="blood"
                  role="tabpanel"
                  aria-labelledby="blood-tab"
                >
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
                            <div className="ps-badge ps-badge--sold">
                              Sold Out
                            </div>
                          </div>
                        </div>
                        <div className="ps-product__content">
                          <h5 className="ps-product__title">
                            <a href="product1.html">
                              Digital Thermometer X30-Pro
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price sale">
                              $77.65
                            </span>
                            <span className="ps-product__del">$80.65</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5} selected="selected">
                                5
                              </option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <div className="ps-badge ps-badge--hot">Hot</div>
                          </div>
                        </div>
                        <div className="ps-product__content">
                          <h5 className="ps-product__title">
                            <a href="product1.html">
                              Automatic blood pressure monitor
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price sale">
                              $90.65
                            </span>
                            <span className="ps-product__del">$60.65</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5} selected="selected">
                                5
                              </option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <img src="img/products/008.jpg" alt="alt" />
                              <img src="img/products/003.jpg" alt="alt" />
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
                              Home Blood Pressure Monitors
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price sale">
                              $90.65
                            </span>
                            <span className="ps-product__del">$60.65</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5} selected="selected">
                                5
                              </option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <img src="img/products/009.jpg" alt="alt" />
                              <img src="img/products/001.jpg" alt="alt" />
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
                              Blood Pressure Monitor with Stroke Risk Detection
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price sale">
                              $77.65
                            </span>
                            <span className="ps-product__del">$80.65</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5} selected="selected">
                                5
                              </option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <div className="ps-badge ps-badge--sold">
                              Sold Out
                            </div>
                          </div>
                        </div>
                        <div className="ps-product__content">
                          <h5 className="ps-product__title">
                            <a href="product1.html">
                              Digital Thermometer X30-Pro
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price sale">
                              $60.39
                            </span>
                            <span className="ps-product__del">$89.99</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4} selected="selected">
                                4
                              </option>
                              <option value={5}>5</option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <img src="img/products/049.jpg" alt="alt" />
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
                          <div className="ps-product__badge">
                            <div className="ps-badge ps-badge--sale">Sale</div>
                          </div>
                        </div>
                        <div className="ps-product__content">
                          <h5 className="ps-product__title">
                            <a href="product1.html">
                              Technical Classicpod Micro Stethoscope Case
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price">
                              $38.24 - $60.39
                            </span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4} selected="selected">
                                4
                              </option>
                              <option value={5}>5</option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                <div
                  className="tab-pane fade"
                  id="mask"
                  role="tabpanel"
                  aria-labelledby="mask-tab"
                >
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
                              <img src="img/products/006.jpg" alt="alt" />
                              <img src="img/products/052.jpg" alt="alt" />
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
                              Protectiva Soft absorbent pads, 30 pcs.
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price sale">
                              $38.39
                            </span>
                            <span className="ps-product__del">$35.99</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5} selected="selected">
                                5
                              </option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <img src="img/products/051.jpg" alt="alt" />
                              <img src="img/products/052.jpg" alt="alt" />
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
                            <div className="ps-badge ps-badge--sold">
                              Sold Out
                            </div>
                          </div>
                        </div>
                        <div className="ps-product__content">
                          <h5 className="ps-product__title">
                            <a href="product1.html">
                              3-Ply Ear-Loop Disposable Blue Face Mask
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price sale">
                              $32.39
                            </span>
                            <span className="ps-product__del">$14.99</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <img src="img/products/050.jpg" alt="alt" />
                              <img src="img/products/052.jpg" alt="alt" />
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
                              Disposable Face Mask for Unisex
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price sale">
                              $20.39
                            </span>
                            <span className="ps-product__del">$8.15</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5} selected="selected">
                                5
                              </option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <img src="img/products/033.jpg" alt="alt" />
                              <img src="img/products/052.jpg" alt="alt" />
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
                            <div className="ps-badge ps-badge--sold">
                              Sold Out
                            </div>
                          </div>
                        </div>
                        <div className="ps-product__content">
                          <h5 className="ps-product__title">
                            <a href="product1.html">
                              3 Layer Disposable Protective Face Masks
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price sale">
                              $15.52
                            </span>
                            <span className="ps-product__del">$14.52</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5} selected="selected">
                                5
                              </option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <img src="img/products/052.jpg" alt="alt" />
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
                            <div className="ps-badge ps-badge--sale">Sale</div>
                          </div>
                        </div>
                        <div className="ps-product__content">
                          <h5 className="ps-product__title">
                            <a href="product1.html">
                              3-layer mask with an elastic band (1 piece)
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price">$38.24</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2} selected="selected">
                                2
                              </option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <img src="img/products/051.jpg" alt="alt" />
                              <img src="img/products/052.jpg" alt="alt" />
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
                              3-Ply Ear-Loop Disposable Blue Face Mask
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price sale">
                              $32.84
                            </span>
                            <span className="ps-product__del">$14.99</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2} selected="selected">
                                2
                              </option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                <div
                  className="tab-pane fade"
                  id="stomatology"
                  role="tabpanel"
                  aria-labelledby="stomatology-tab"
                >
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
                              <option value={4} selected="selected">
                                4
                              </option>
                              <option value={5}>5</option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <a href="product1.html">
                              Somersung Sonic X500 Basic
                            </a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price sale">
                              $38.39
                            </span>
                            <span className="ps-product__del">$53.99</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5} selected="selected">
                                5
                              </option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <option value={5} selected="selected">
                                5
                              </option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <option value={5} selected="selected">
                                5
                              </option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <img src="img/products/010.jpg" alt="alt" />
                              <img src="img/products/011.jpg" alt="alt" />
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
                            <a href="product1.html">Hill-Rom P8000 Stretcher</a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price">$511.64</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4} selected="selected">
                                4
                              </option>
                              <option value={5}>5</option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                              <img src="img/products/013.jpg" alt="alt" />
                              <img src="img/products/012.jpg" alt="alt" />
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
                            <a href="product1.html">Hill-Rom VersaCare</a>
                          </h5>
                          <div className="ps-product__meta">
                            <span className="ps-product__price">$136.87</span>
                          </div>
                          <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4} selected="selected">
                                4
                              </option>
                              <option value={5}>5</option>
                            </select>
                            <span className="ps-product__review">
                              ( Reviews)
                            </span>
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                  onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
            </div>
          </section>
          <div className="ps-promo">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="ps-promo__item">
                  <img
                    className="ps-promo__banner"
                    src="img/promotion/bg-banner4.jpg"
                    alt="alt"
                  />
                  <div className="ps-promo__content">
                    <span className="ps-promo__badge">New</span>
                    <h4 className="mb-20 ps-promo__name">
                      Get rid of bacteria <br />
                      in your home
                    </h4>
                    <a className="ps-promo__btn" href="category-grid.html">
                      More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="ps-promo__item">
                  <img
                    className="ps-promo__banner"
                    src="img/promotion/bg-banner5.jpg"
                    alt="alt"
                  />
                  <div className="ps-promo__content">
                    <h4 className="ps-promo__name">
                      Candid <br />
                      Whitening Kit
                    </h4>
                    <div className="ps-promo__sale">-10%</div>
                    <a className="ps-promo__btn" href="category-grid.html">
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
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
                            <option value={4} selected="selected">
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <option value={4} selected="selected">
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <option value={3} selected="selected">
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <option value={5} selected="selected">
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <option value={5} selected="selected">
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <option value={5} selected="selected">
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <option value={5} selected="selected">
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <option value={5} selected="selected">
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <option value={5} selected="selected">
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
                            <option value={4} selected="selected">
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
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
                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
        <section
          className="ps-section--reviews"
          data-background="img/roundbg.png"
        >
          <h3 className="ps-section__title">
            <img src="img/quote-icon.png" alt="" />
            Latest reviews
          </h3>
          <div className="ps-section__content">
            <div
              className="owl-carousel"
              data-owl-auto="false"
              data-owl-loop="true"
              data-owl-speed={13000}
              data-owl-gap={0}
              data-owl-nav="true"
              data-owl-dots="true"
              data-owl-item={5}
              data-owl-item-xs={1}
              data-owl-item-sm={1}
              data-owl-item-md={3}
              data-owl-item-lg={5}
              data-owl-item-xl={5}
              data-owl-duration={1000}
              data-owl-mousedrag="on"
            >
              <div className="ps-review">
                <div className="ps-review__text">
                  There was a small mistake in the order. In return, I got the
                  correct order and I could keep the wrong one for myself.
                </div>
                <div className="ps-review__name">Esther Howard</div>
                <div className="ps-review__review">
                  <select className="ps-rating" data-read-only="true">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4} selected="selected">
                      4
                    </option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
              <div className="ps-review">
                <div className="ps-review__text">
                  I ordered on Friday evening and on Monday at 12:30 the package
                  was with me. I have never encountered such a fast order
                  processing.
                </div>
                <div className="ps-review__name">Albert Flores</div>
                <div className="ps-review__review">
                  <select className="ps-rating" data-read-only="true">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4} selected="selected">
                      4
                    </option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
              <div className="ps-review">
                <div className="ps-review__text">
                  I ordered on Friday evening and on Monday at 12:30 the package
                  was with me. I have never encountered such a fast order
                  processing.
                </div>
                <div className="ps-review__name">Dianne Russell</div>
                <div className="ps-review__review">
                  <select className="ps-rating" data-read-only="true">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4} selected="selected">
                      4
                    </option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
              <div className="ps-review">
                <div className="ps-review__text">
                  Everything is perfect. I would recommend!
                </div>
                <div className="ps-review__name">Darlene Robertson</div>
                <div className="ps-review__review">
                  <select className="ps-rating" data-read-only="true">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4} selected="selected">
                      4
                    </option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
              <div className="ps-review">
                <div className="ps-review__text">
                  There was a small mistake in the order. In return, I got the
                  correct order and I could keep the wrong one for myself.
                </div>
                <div className="ps-review__name">Brooklyn Simmons</div>
                <div className="ps-review__review">
                  <select className="ps-rating" data-read-only="true">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4} selected="selected">
                      4
                    </option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
              <div className="ps-review">
                <div className="ps-review__text">
                  Everything is perfect. I would recommend!
                </div>
                <div className="ps-review__name">Kristin Watson</div>
                <div className="ps-review__review">
                  <select className="ps-rating" data-read-only="true">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4} selected="selected">
                      4
                    </option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
              <div className="ps-review">
                <div className="ps-review__text">
                  I ordered on Friday evening and on Monday at 12:30 the package
                  was with me. I have never encountered such a fast order
                  processing.
                </div>
                <div className="ps-review__name">Mark J.</div>
                <div className="ps-review__review">
                  <select className="ps-rating" data-read-only="true">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4} selected="selected">
                      4
                    </option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="ps-section--instagram">
            <h3 className="ps-section__title">
              Follow <strong>@MYMEDI </strong>on instagram
            </h3>
            <div className="ps-section__content">
              <div className="row m-0">
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    className="ps-image--transition"
                    href="https://www.instagram.com/p/CDf7FC7pwae/"
                  >
                    {" "}
                    <img src="img/instagram/instagram1.jpg" alt="" />
                    <span className="ps-image__overlay">
                      <i className="fa fa-instagram" />
                    </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    className="ps-image--transition"
                    href="https://www.instagram.com/p/CDf7D5zJqwo/"
                  >
                    {" "}
                    <img src="img/instagram/instagram2.jpg" alt="" />
                    <span className="ps-image__overlay">
                      <i className="fa fa-instagram" />
                    </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    className="ps-image--transition"
                    href="https://www.instagram.com/p/CDf7BnapGmv/"
                  >
                    {" "}
                    <img src="img/instagram/instagram3.jpg" alt="" />
                    <span className="ps-image__overlay">
                      <i className="fa fa-instagram" />
                    </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    className="ps-image--transition"
                    href="https://www.instagram.com/p/CDf7Af8JWDj/"
                  >
                    {" "}
                    <img src="img/instagram/instagram4.jpg" alt="" />
                    <span className="ps-image__overlay">
                      <i className="fa fa-instagram" />
                    </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    className="ps-image--transition"
                    href="https://www.instagram.com/p/CDf6_QEpWYv/"
                  >
                    {" "}
                    <img src="img/instagram/instagram5.jpg" alt="" />
                    <span className="ps-image__overlay">
                      <i className="fa fa-instagram" />
                    </span>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a
                    className="ps-image--transition"
                    href="https://www.instagram.com/p/CDf69FupFee/"
                  >
                    {" "}
                    <img src="img/instagram/instagram6.jpg" alt="" />
                    <span className="ps-image__overlay">
                      <i className="fa fa-instagram" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            className="ps-section--newsletter"
            data-background="img/newsletter-bg.jpg"
          >
            <h3 className="ps-section__title">
              Join our newsletter and get <br />
              $20 discount for your first order
            </h3>
            <div className="ps-section__content">
              <form
                action="http://nouthemes.net/html/mymedi/do_action"
                method="post"
              >
                <div className="ps-form--subscribe">
                  <div className="ps-form__control">
                    <input
                      className="form-control ps-input"
                      type="email"
                      placeholder="Enter your email address"
                    />
                    <button className="ps-btn ps-btn--warning">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
