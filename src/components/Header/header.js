import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserCart from "./UserCart/UserCart";

function Header() {
  return (
    <>
      <header className="ps-header ps-header--1">
        {/*<div className="ps-noti">
            <div className="container">
              <p className="m-0">Due to the <strong>COVID 19 </strong>epidemic, orders may be processed with a slight
                delay</p>
            </div>
            <a className="ps-noti__close"><i className="icon-cross"/></a>
          </div>*/}
        <div className="ps-header__top">
          <div className="container">
            <div className="ps-header__text">
              Need help? <strong>0020 500 - MYMEDI - 000</strong>
            </div>
          </div>
        </div>
        <div className="ps-header__middle">
          <div className="container">
            <Logo />
            <a className="ps-menu--sticky" href="#/">
              <i className="fa fa-bars" />
            </a>
            <div className="ps-header__right">
              <UserCart />
              {/* <div className="ps-language-currency">
                <a
                  className="ps-dropdown-value"
                  // href="javascript:void(0);"
                  href="#/"
                  data-toggle="modal"
                  data-target="#popupLanguage"
                >
                  English
                </a>
                <a
                  className="ps-dropdown-value"
                  // href="javascript:void(0);"
                  href="#/"
                  data-toggle="modal"
                  data-target="#popupCurrency"
                >
                  USD
                </a>
              </div> */}
              <div className="ps-header__search">
                <form
                  action="http://nouthemes.net/html/mymedi/do_action"
                  method="post"
                >
                  <SearchBar />
                </form>
                <div className="ps-search--result">
                  <div className="ps-result__content">
                    <div className="row m-0">
                      <div className="col-12 col-lg-6">
                        <div className="ps-product ps-product--horizontal">
                          <div className="ps-product__thumbnail">
                            <a className="ps-product__image" href="#/">
                              <figure>
                                <img src="img/products/052.jpg" alt="alt" />
                              </figure>
                            </a>
                          </div>
                          <div className="ps-product__content">
                            <h5 className="ps-product__title">
                              <a href="#/">
                                3-layer <span className="hightlight">mask</span>{" "}
                                with an elastic band (1 piece)
                              </a>
                            </h5>
                            <p className="ps-product__desc">
                              Study history up to 30 days Up to 5 users
                              simultaneously Has HEALTH certificate
                            </p>
                            <div className="ps-product__meta">
                              <span className="ps-product__price">$38.24</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="ps-product ps-product--horizontal">
                          <div className="ps-product__thumbnail">
                            <a className="ps-product__image" href="#/">
                              <figure>
                                <img src="img/products/033.jpg" alt="alt" />
                              </figure>
                            </a>
                          </div>
                          <div className="ps-product__content">
                            <h5 className="ps-product__title">
                              <a href="#/">
                                3 Layer Disposable Protective Face{" "}
                                <span className="hightlight">mask</span>s
                              </a>
                            </h5>
                            <p className="ps-product__desc">
                              Study history up to 30 days Up to 5 users
                              simultaneously Has HEALTH certificate
                            </p>
                            <div className="ps-product__meta">
                              <span className="ps-product__price sale">
                                $14.52
                              </span>
                              <span className="ps-product__del">$17.24</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="ps-product ps-product--horizontal">
                          <div className="ps-product__thumbnail">
                            <a className="ps-product__image" href="#/">
                              <figure>
                                <img src="img/products/051.jpg" alt="alt" />
                              </figure>
                            </a>
                          </div>
                          <div className="ps-product__content">
                            <h5 className="ps-product__title">
                              <a href="#/">
                                3-Ply Ear-Loop Disposable Blue Face{" "}
                                <span className="hightlight">mask</span>
                              </a>
                            </h5>
                            <p className="ps-product__desc">
                              Study history up to 30 days Up to 5 users
                              simultaneously Has HEALTH certificate
                            </p>
                            <div className="ps-product__meta">
                              <span className="ps-product__price sale">
                                $14.99
                              </span>
                              <span className="ps-product__del">$38.24</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="ps-product ps-product--horizontal">
                          <div className="ps-product__thumbnail">
                            <a className="ps-product__image" href="#/">
                              <figure>
                                <img src="img/products/050.jpg" alt="alt" />
                              </figure>
                            </a>
                          </div>
                          <div className="ps-product__content">
                            <h5 className="ps-product__title">
                              <a href="#/">
                                Disposable Face{" "}
                                <span className="hightlight">mask</span> for
                                Unisex
                              </a>
                            </h5>
                            <p className="ps-product__desc">
                              Study history up to 30 days Up to 5 users
                              simultaneously Has HEALTH certificate
                            </p>
                            <div className="ps-product__meta">
                              <span className="ps-product__price sale">
                                $8.15
                              </span>
                              <span className="ps-product__del">$12.24</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ps-result__viewall">
                      <a href="product-result.html">View all 5 results</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-navigation">
          <div className="container">
            <div className="ps-navigation__left">
              <nav className="ps-main-menu">
                <ul className="menu">
                  <li className="has-mega-menu">
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__row">
                          <div className="mega-menu__column">
                            <h4>Wound Care</h4>
                            <ul className="sub-menu--mega">
                              <li>
                                <a href="category-list.html">Bandages</a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Gypsum foundations
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Patches and tapes
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Stomatology</a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Surgical sutures
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Uniforms</a>
                              </li>
                              <li>
                                <a href="category-list.html">Wound healing</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Higiene</h4>
                            <ul className="sub-menu--mega">
                              <li>
                                <a href="category-list.html">
                                  Disposable products
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Face masks</a>
                              </li>
                              <li>
                                <a href="category-list.html">Gloves</a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Protective covers
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Sterilization</a>
                              </li>
                              <li>
                                <a href="category-list.html">Surgical foils</a>
                              </li>
                              <li>
                                <a href="category-list.html">Uniforms</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Laboratory</h4>
                            <ul className="sub-menu--mega">
                              <li>
                                <a href="category-list.html">Devices</a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Diagnostic tests
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Disinfectants</a>
                              </li>
                              <li>
                                <a href="category-list.html">Dyes</a>
                              </li>
                              <li>
                                <a href="category-list.html">Pipettes</a>
                              </li>
                              <li>
                                <a href="category-list.html">Test-tubes</a>
                              </li>
                              <li>
                                <a href="category-list.html">Tubes</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Tools</h4>
                            <ul className="sub-menu--mega">
                              <li>
                                <a href="category-list.html">
                                  Accessories Tools
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Blood pressure</a>
                              </li>
                              <li>
                                <a href="category-list.html">Capsules</a>
                              </li>
                              <li>
                                <a href="category-list.html">Dental</a>
                              </li>
                              <li>
                                <a href="category-list.html">Micrscope</a>
                              </li>
                              <li>
                                <a href="category-list.html">Pressure</a>
                              </li>
                              <li>
                                <a href="category-list.html">Sugar level</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Diagnosis</h4>
                            <ul className="sub-menu--mega">
                              <li>
                                <a href="category-list.html">Biopsy tools</a>
                              </li>
                              <li>
                                <a href="category-list.html">Endoscopes</a>
                              </li>
                              <li>
                                <a href="category-list.html">Monitoring</a>
                              </li>
                              <li>
                                <a href="category-list.html">Otoscopes</a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Oxygen concentrators
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Tables and assistants
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Thermometer</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Equipment</h4>
                            <ul className="sub-menu--mega">
                              <li>
                                <a href="category-list.html">Blades</a>
                              </li>
                              <li>
                                <a href="category-list.html">Education</a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Germicidal lamps
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Heart Health</a>
                              </li>
                              <li>
                                <a href="category-list.html">Infusion stands</a>
                              </li>
                              <li>
                                <a href="category-list.html">Lighting</a>
                              </li>
                              <li>
                                <a href="category-list.html">Machines</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="ps-branch">
                          <h3 className="ps-branch__title">Popular Brands</h3>
                          <div className="ps-branch__box">
                            <div className="ps-branch__item">
                              <a href="#/">
                                <img src="img/branch/brand-1.jpg" alt="alt" />
                              </a>
                            </div>
                            <div className="ps-branch__item">
                              <a href="#/">
                                <img src="img/branch/brand-2.jpg" alt="alt" />
                              </a>
                            </div>
                            <div className="ps-branch__item">
                              <a href="#/">
                                <img src="img/branch/brand-3.jpg" alt="alt" />
                              </a>
                            </div>
                            <div className="ps-branch__item">
                              <a href="#/">
                                <img src="img/branch/brand-4.jpg" alt="alt" />
                              </a>
                            </div>
                            <div className="ps-branch__item">
                              <a href="#/">
                                <img src="img/branch/brand-5.jpg" alt="alt" />
                              </a>
                            </div>
                            <div className="ps-branch__item">
                              <a href="#/">
                                <img src="img/branch/brand-6.jpg" alt="alt" />
                              </a>
                            </div>
                            <div className="ps-branch__item">
                              <a href="#/">
                                <img src="img/branch/brand-7.jpg" alt="alt" />
                              </a>
                            </div>
                            <div className="ps-branch__item">
                              <a href="#/">
                                <img src="img/branch/brand-8.jpg" alt="alt" />
                              </a>
                            </div>
                            <div className="ps-branch__item">
                              <a href="#/">
                                <img src="img/branch/brand-9.jpg" alt="alt" />
                              </a>
                            </div>
                            <div className="ps-branch__item">
                              <a href="#/">
                                <img src="img/branch/brand-10.jpg" alt="alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="has-mega-menu">
                    <a href="#/">
                      {" "}
                      Food Mart
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__row">
                          <div className="mega-menu__column col-12 col-sm-3">
                            <ul className="sub-menu--mega sub-menu--bold">
                              <li>
                                <a href="category-list.html">Drinks</a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Canned & Packages Foods
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Grains & Rice</a>
                              </li>
                              <li>
                                <a href="category-list.html">Pasta</a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Herbs, Spices & Seasonings
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-5 col-md-6">
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    More
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    Shop now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-4 col-md-3">
                            <div className="mega-menu__product">
                              <div className="ps-countdown">
                                <div className="ps-countdown__content">
                                  <div className="ps-countdown__block ps-countdown__days">
                                    <div className="ps-countdown__number">
                                      <span className="first-1st">0</span>
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Days
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__hours">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Hours
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__minutes">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Mins
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__seconds">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Secs
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ps-product ps-product--standard">
                                <div className="ps-product__thumbnail">
                                  <a
                                    className="ps-product__image"
                                    href="product1.html"
                                  >
                                    <figure>
                                      <img
                                        src="img/products/039.jpg"
                                        alt="alt"
                                      />
                                      <img
                                        src="img/products/048.jpg"
                                        alt="alt"
                                      />
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
                                    <span className="ps-product__price sale">
                                      $38.39
                                    </span>
                                    <span className="ps-product__del">
                                      $53.99
                                    </span>
                                  </div>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
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
                                          onClick={() => {
                                            this.parentNode
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                    </div>
                  </li>

                  <li className="has-mega-menu">
                    <a href="#/">
                      {" "}
                      Household
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__row">
                          <div className="mega-menu__column col-12 col-sm-3">
                            <ul className="sub-menu--mega sub-menu--bold">
                              <li>
                                <a href="category-list.html">Laundry</a>
                              </li>
                              <li>
                                <a href="category-list.html">Toileteries</a>
                              </li>
                              <li>
                                <a href="category-list.html">Dishwashing</a>
                              </li>
                              <li>
                                <a href="category-list.html">Air Fresheners</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-5 col-md-6">
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    More
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    Shop now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-4 col-md-3">
                            <div className="mega-menu__product">
                              <div className="ps-countdown">
                                <div className="ps-countdown__content">
                                  <div className="ps-countdown__block ps-countdown__days">
                                    <div className="ps-countdown__number">
                                      <span className="first-1st">0</span>
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Days
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__hours">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Hours
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__minutes">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Mins
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__seconds">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Secs
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ps-product ps-product--standard">
                                <div className="ps-product__thumbnail">
                                  <a
                                    className="ps-product__image"
                                    href="product1.html"
                                  >
                                    <figure>
                                      <img
                                        src="img/products/039.jpg"
                                        alt="alt"
                                      />
                                      <img
                                        src="img/products/048.jpg"
                                        alt="alt"
                                      />
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
                                    <span className="ps-product__price sale">
                                      $38.39
                                    </span>
                                    <span className="ps-product__del">
                                      $53.99
                                    </span>
                                  </div>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
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
                                          onClick={() => {
                                            this.parentNode
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                    </div>
                  </li>

                  <li className="has-mega-menu">
                    <a href="#/">
                      {" "}
                      Beer, Wine & Spirits
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__row">
                          <div className="mega-menu__column col-12 col-sm-3">
                            <ul className="sub-menu--mega sub-menu--bold">
                              <li>
                                <a href="category-list.html">Beer</a>
                              </li>
                              <li>
                                <a href="category-list.html">Vodka</a>
                              </li>
                              <li>
                                <a href="category-list.html">Wine</a>
                              </li>
                              <li>
                                <a href="category-list.html">Whiskey</a>
                              </li>
                              <li>
                                <a href="category-list.html">Liquor</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-5 col-md-6">
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    More
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    Shop now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-4 col-md-3">
                            <div className="mega-menu__product">
                              <div className="ps-countdown">
                                <div className="ps-countdown__content">
                                  <div className="ps-countdown__block ps-countdown__days">
                                    <div className="ps-countdown__number">
                                      <span className="first-1st">0</span>
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Days
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__hours">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Hours
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__minutes">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Mins
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__seconds">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Secs
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ps-product ps-product--standard">
                                <div className="ps-product__thumbnail">
                                  <a
                                    className="ps-product__image"
                                    href="product1.html"
                                  >
                                    <figure>
                                      <img
                                        src="img/products/039.jpg"
                                        alt="alt"
                                      />
                                      <img
                                        src="img/products/048.jpg"
                                        alt="alt"
                                      />
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
                                    <span className="ps-product__price sale">
                                      $38.39
                                    </span>
                                    <span className="ps-product__del">
                                      $53.99
                                    </span>
                                  </div>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
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
                                          onClick={() => {
                                            this.parentNode
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                    </div>
                  </li>

                  <li className="has-mega-menu">
                    <a href="#/">
                      {" "}
                      Baby Products
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__row">
                          <div className="mega-menu__column col-12 col-sm-3">
                            <ul className="sub-menu--mega sub-menu--bold">
                              <li>
                                <a href="category-list.html">Diapers</a>
                              </li>
                              <li>
                                <a href="category-list.html">Baby Food</a>
                              </li>
                              <li>
                                <a href="category-list.html">Baby Care</a>
                              </li>
                              <li>
                                <a href="category-list.html">Baby Toys</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-5 col-md-6">
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    More
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    Shop now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-4 col-md-3">
                            <div className="mega-menu__product">
                              <div className="ps-countdown">
                                <div className="ps-countdown__content">
                                  <div className="ps-countdown__block ps-countdown__days">
                                    <div className="ps-countdown__number">
                                      <span className="first-1st">0</span>
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Days
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__hours">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Hours
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__minutes">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Mins
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__seconds">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Secs
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ps-product ps-product--standard">
                                <div className="ps-product__thumbnail">
                                  <a
                                    className="ps-product__image"
                                    href="product1.html"
                                  >
                                    <figure>
                                      <img
                                        src="img/products/039.jpg"
                                        alt="alt"
                                      />
                                      <img
                                        src="img/products/048.jpg"
                                        alt="alt"
                                      />
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
                                    <span className="ps-product__price sale">
                                      $38.39
                                    </span>
                                    <span className="ps-product__del">
                                      $53.99
                                    </span>
                                  </div>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
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
                                          onClick={() => {
                                            this.parentNode
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                    </div>
                  </li>

                  <li className="has-mega-menu">
                    <a href="#/">
                      {" "}
                      Fragrances
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__row">
                          <div className="mega-menu__column col-12 col-sm-3">
                            <ul className="sub-menu--mega sub-menu--bold">
                              <li>
                                <a href="category-list.html">Men</a>
                              </li>
                              <li>
                                <a href="category-list.html">Women</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-5 col-md-6">
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    More
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    Shop now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-4 col-md-3">
                            <div className="mega-menu__product">
                              <div className="ps-countdown">
                                <div className="ps-countdown__content">
                                  <div className="ps-countdown__block ps-countdown__days">
                                    <div className="ps-countdown__number">
                                      <span className="first-1st">0</span>
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Days
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__hours">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Hours
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__minutes">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Mins
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__seconds">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Secs
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ps-product ps-product--standard">
                                <div className="ps-product__thumbnail">
                                  <a
                                    className="ps-product__image"
                                    href="product1.html"
                                  >
                                    <figure>
                                      <img
                                        src="img/products/039.jpg"
                                        alt="alt"
                                      />
                                      <img
                                        src="img/products/048.jpg"
                                        alt="alt"
                                      />
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
                                    <span className="ps-product__price sale">
                                      $38.39
                                    </span>
                                    <span className="ps-product__del">
                                      $53.99
                                    </span>
                                  </div>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
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
                                          onClick={() => {
                                            this.parentNode
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                    </div>
                  </li>

                  <li className="has-mega-menu">
                    <a href="#/">
                      {" "}
                      Oral Care
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__row">
                          <div className="mega-menu__column col-12 col-sm-3">
                            <ul className="sub-menu--mega sub-menu--bold">
                              <li>
                                <a href="category-list.html">Toothbrushes</a>
                              </li>
                              <li>
                                <a href="category-list.html">Dental Care</a>
                              </li>
                              <li>
                                <a href="category-list.html">Teeth Whitening</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-5 col-md-6">
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    More
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    Shop now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-4 col-md-3">
                            <div className="mega-menu__product">
                              <div className="ps-countdown">
                                <div className="ps-countdown__content">
                                  <div className="ps-countdown__block ps-countdown__days">
                                    <div className="ps-countdown__number">
                                      <span className="first-1st">0</span>
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Days
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__hours">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Hours
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__minutes">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Mins
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__seconds">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Secs
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ps-product ps-product--standard">
                                <div className="ps-product__thumbnail">
                                  <a
                                    className="ps-product__image"
                                    href="product1.html"
                                  >
                                    <figure>
                                      <img
                                        src="img/products/039.jpg"
                                        alt="alt"
                                      />
                                      <img
                                        src="img/products/048.jpg"
                                        alt="alt"
                                      />
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
                                    <span className="ps-product__price sale">
                                      $38.39
                                    </span>
                                    <span className="ps-product__del">
                                      $53.99
                                    </span>
                                  </div>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
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
                                          onClick={() => {
                                            this.parentNode
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                    </div>
                  </li>

                  <li className="has-mega-menu">
                    <a href="#/">
                      {" "}
                      Hair Care
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__row">
                          <div className="mega-menu__column col-12 col-sm-3">
                            <ul className="sub-menu--mega sub-menu--bold">
                              <li>
                                <a href="category-list.html">
                                  Shampoo & Conditioner
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Hair Accessories
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Hair cutting tools
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Hair & Scalp Care
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-5 col-md-6">
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    More
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    Shop now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-4 col-md-3">
                            <div className="mega-menu__product">
                              <div className="ps-countdown">
                                <div className="ps-countdown__content">
                                  <div className="ps-countdown__block ps-countdown__days">
                                    <div className="ps-countdown__number">
                                      <span className="first-1st">0</span>
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Days
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__hours">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Hours
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__minutes">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Mins
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__seconds">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Secs
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ps-product ps-product--standard">
                                <div className="ps-product__thumbnail">
                                  <a
                                    className="ps-product__image"
                                    href="product1.html"
                                  >
                                    <figure>
                                      <img
                                        src="img/products/039.jpg"
                                        alt="alt"
                                      />
                                      <img
                                        src="img/products/048.jpg"
                                        alt="alt"
                                      />
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
                                    <span className="ps-product__price sale">
                                      $38.39
                                    </span>
                                    <span className="ps-product__del">
                                      $53.99
                                    </span>
                                  </div>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
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
                                          onClick={() => {
                                            this.parentNode
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                    </div>
                  </li>

                  <li className="has-mega-menu">
                    <a href="#/">
                      {" "}
                      Makeup
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__row">
                          <div className="mega-menu__column col-12 col-sm-3">
                            <ul className="sub-menu--mega sub-menu--bold">
                              <li>
                                <a href="category-list.html">Foundation</a>
                              </li>
                              <li>
                                <a href="category-list.html">Powder</a>
                              </li>
                              <li>
                                <a href="category-list.html">Lipstick</a>
                              </li>
                              <li>
                                <a href="category-list.html">Eyeshadow</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-5 col-md-6">
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    More
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ps-promo">
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
                                  <a
                                    className="ps-promo__btn"
                                    href="category-grid.html"
                                  >
                                    Shop now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-menu__column col-12 col-sm-4 col-md-3">
                            <div className="mega-menu__product">
                              <div className="ps-countdown">
                                <div className="ps-countdown__content">
                                  <div className="ps-countdown__block ps-countdown__days">
                                    <div className="ps-countdown__number">
                                      <span className="first-1st">0</span>
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Days
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__hours">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Hours
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__minutes">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Mins
                                    </div>
                                  </div>
                                  <div className="ps-countdown__block ps-countdown__seconds">
                                    <div className="ps-countdown__number">
                                      <span className="first">0</span>
                                      <span className="last">0</span>
                                    </div>
                                    <div className="ps-countdown__ref">
                                      Secs
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ps-product ps-product--standard">
                                <div className="ps-product__thumbnail">
                                  <a
                                    className="ps-product__image"
                                    href="product1.html"
                                  >
                                    <figure>
                                      <img
                                        src="img/products/039.jpg"
                                        alt="alt"
                                      />
                                      <img
                                        src="img/products/048.jpg"
                                        alt="alt"
                                      />
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
                                    <span className="ps-product__price sale">
                                      $38.39
                                    </span>
                                    <span className="ps-product__del">
                                      $53.99
                                    </span>
                                  </div>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
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
                                          onClick={() => {
                                            this.parentNode
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                                              .querySelector(
                                                "input[type=number]"
                                              )
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
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="ps-navigation__right">
              Need help? <strong>0020 500 - MYMEDI - 000</strong>
            </div>
          </div>
        </div>
      </header>

      <header className="ps-header ps-header--1 ps-header--mobile">
        <div className="ps-header__middle">
          <div className="container">
            <div className="ps-logo">
              <a href="index-2.html">
                {" "}
                <img src="img/city-mart-logo.png" alt="" />
              </a>
            </div>
            <div className="ps-header__right">
              <ul className="ps-header__icons">
                <li>
                  <a className="ps-header__item open-search" href="#/">
                    <i className="fa fa-search" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
