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
                    <a href="#/">
                      {" "}
                      <i className="fa fa-bars" />
                      Products
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
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
                      Home Medical Supplies
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
                                <a href="category-list.html">Diagnosis</a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Accessories Tools
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Bandages</a>
                              </li>
                              <li>
                                <a href="category-list.html">Biopsy tools</a>
                              </li>
                              <li>
                                <a href="category-list.html">Blades</a>
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
                                <a href="category-list.html">Devices</a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Diagnostic tests
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Disposable products
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Education</a>
                              </li>
                              <li>
                                <a href="category-list.html">Endoscopes</a>
                              </li>
                              <li>
                                <a href="category-list.html">Equipment</a>
                              </li>
                              <li>
                                <a href="category-list.html">Show all</a>
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
                      Homepages
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__widget">
                          <ul className="sub-menu--image">
                            <li>
                              <a href="index-2.html">
                                <img src="img/promotion/1.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 1</h3>
                            </li>
                            <li>
                              <a href="home2.html">
                                <img src="img/promotion/2.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 2</h3>
                            </li>
                            <li>
                              <a href="home3.html">
                                <img src="img/promotion/3.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 3</h3>
                            </li>
                            <li>
                              <a href="home4.html">
                                <img src="img/promotion/4.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 4</h3>
                            </li>
                            <li>
                              <a href="home5.html">
                                <img src="img/promotion/5.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 5</h3>
                            </li>
                            <li>
                              <a href="home6.html">
                                <img src="img/promotion/6.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 6 Masks</h3>
                            </li>
                            <li>
                              <a href="home7.html">
                                <img src="img/promotion/7.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">
                                Home 7 One product
                              </h3>
                            </li>
                            <li>
                              <a href="home8.html">
                                <img src="img/promotion/8.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 8</h3>
                              <span className="has-badge">New</span>
                            </li>
                            <li>
                              <a href="home9.html">
                                <img src="img/promotion/9.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 9</h3>
                              <span className="has-badge">New</span>
                            </li>
                            <li>
                              <a href="home10.html">
                                <img src="img/promotion/10.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 10</h3>
                              <span className="has-badge">New</span>
                            </li>
                            <li>
                              <a href="home11.html">
                                <img src="img/promotion/11.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 11</h3>
                              <span className="has-badge">New</span>
                            </li>
                            <li>
                              <a href="home12.html">
                                <img src="img/promotion/12.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 12</h3>
                              <span className="has-badge">New</span>
                            </li>
                            <li>
                              <a href="home13.html">
                                <img src="img/promotion/13.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 13</h3>
                              <span className="has-badge">New</span>
                            </li>
                            <li>
                              <a href="home14.html">
                                <img src="img/promotion/14.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 14</h3>
                              <span className="has-badge">New</span>
                            </li>
                            <li>
                              <a href="home15.html">
                                <img src="img/promotion/15.jpg" alt="alt" />
                              </a>
                              <h3 className="image-title">Home 15</h3>
                              <span className="has-badge">New</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="has-mega-menu">
                    <a href="category-list.html">Shop</a>
                  </li>
                  <li className="has-mega-menu">
                    <a href="#/">
                      {" "}
                      Pages
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__row">
                          <div className="mega-menu__column">
                            <h4>Category</h4>
                            <ul className="sub-menu--mega">
                              <li>
                                <a href="promo-category.html">Promo Category</a>
                              </li>
                              <li>
                                <a href="category-grid.html">Grid</a>
                              </li>
                              <li>
                                <a href="category-grid-detail.html">
                                  Grid with details
                                </a>
                              </li>
                              <li>
                                <a href="category-grid-green.html">
                                  Grid with header green
                                </a>
                              </li>
                              <li>
                                <a href="category-grid-dark.html">
                                  Grid with header dark
                                </a>
                              </li>
                              <li>
                                <a href="category-grid-separate.html">
                                  Grid separate
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">List</a>
                              </li>
                              <li>
                                <a href="category-loading-infinity.html">
                                  Loading Infinity
                                </a>
                              </li>
                              <li>
                                <a href="category-load-more.html">
                                  Load more button
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Pages</h4>
                            <ul className="sub-menu--mega">
                              <li>
                                <a href="404.html">404</a>
                              </li>
                              <li>
                                <a href="about-us.html">About us</a>
                              </li>
                              <li>
                                <a href="contact-us.html">Contact us</a>
                              </li>
                              <li>
                                <a href="portfolio.html">Portfolio</a>
                              </li>
                              <li>
                                <a href="portfolio-detail.html">
                                  Porfolio Detail
                                </a>
                              </li>
                              <li>
                                <a href="my-account.html">My Account</a>
                              </li>
                              <li>
                                <a href="shopping-cart.html">Shopping Cart</a>
                              </li>
                              <li>
                                <a href="coming-soon-v1.html">Coming soon 1</a>
                              </li>
                              <li>
                                <a href="coming-soon-v2.html">Coming soon 2</a>
                              </li>
                              <li>
                                <a href="product-result.html">Product Result</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Product</h4>
                            <ul className="sub-menu--mega">
                              <li>
                                <a href="product1.html">Layout 01</a>
                              </li>
                              <li>
                                <a href="product2.html">Layout 02</a>
                              </li>
                              <li>
                                <a href="product3.html">Layout 03</a>
                              </li>
                              <li>
                                <a href="product4.html">Layout 04</a>
                              </li>
                              <li>
                                <a href="product5.html">Layout 05</a>
                              </li>
                              <li>
                                <a href="product6.html">Layout 06</a>
                              </li>
                              <li>
                                <a href="product7.html">Layout 07</a>
                              </li>
                              <li>
                                <a href="product-variable.html">
                                  Product variable
                                </a>
                              </li>
                              <li>
                                <a href="product-sold-out.html">
                                  Product sold out
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Blog</h4>
                            <ul className="sub-menu--mega">
                              <li>
                                <a href="blog-sidebar1.html">Blog sidebar 1</a>
                              </li>
                              <li>
                                <a href="blog-sidebar2.html">Blog sidebar 2</a>
                              </li>
                              <li>
                                <a href="blog-masonry.html">Blog Masonry</a>
                              </li>
                              <li>
                                <a href="blog-post1.html">Blog post 1</a>
                              </li>
                              <li>
                                <a href="blog-post2.html">Blog post 2</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Home</h4>
                            <ul className="sub-menu--mega">
                              <li>
                                <a href="index-2.html">Home 01</a>
                              </li>
                              <li>
                                <a href="home2.html">Home 02</a>
                              </li>
                              <li>
                                <a href="home3.html">Home 03</a>
                              </li>
                              <li>
                                <a href="home4.html">Home 04</a>
                              </li>
                              <li>
                                <a href="home5.html">Home 05</a>
                              </li>
                              <li>
                                <a href="home6.html">Home 06</a>
                              </li>
                              <li>
                                <a href="home7.html">Home 07</a>
                              </li>
                              <li>
                                <a href="home8.html">
                                  Home 08<span className="has-badge">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home9.html">
                                  Home 09<span className="has-badge">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home10.html">
                                  Home 10<span className="has-badge">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home11.html">
                                  Home 11<span className="has-badge">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home12.html">
                                  Home 12<span className="has-badge">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home13.html">
                                  Home 13<span className="has-badge">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home14.html">
                                  Home 14<span className="has-badge">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="home15.html">
                                  Home 15<span className="has-badge">New</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="has-mega-menu">
                    <a href="#/">
                      {" "}
                      Collection
                      <span className="sub-toggle">
                        <i className="fa fa-chevron-down" />
                      </span>
                    </a>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="mega-menu__row">
                          <div className="mega-menu__column col-12 col-md-3">
                            <ul className="sub-menu--mega sub-menu--bold">
                              <li>
                                <a href="category-list.html">Diagnosis</a>
                              </li>
                              <li>
                                <a href="category-list.html">
                                  Accessories Tools
                                </a>
                              </li>
                              <li>
                                <a href="category-list.html">Bandages</a>
                              </li>
                              <li>
                                <a href="category-list.html">Biopsy tools</a>
                              </li>
                              <li>
                                <a href="category-list.html">Blades</a>
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
                                <a href="category-list.html">Devices</a>
                              </li>
                              <li>
                                <a href="category-list.html">Show all</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column col-12 col-md-9">
                            <div className="product-list">
                              <div className="row">
                                <div className="col-12 col-sm-6 col-lg-3">
                                  <div className="ps-product ps-product--standard">
                                    <div className="ps-product__thumbnail">
                                      <a
                                        className="ps-product__image"
                                        href="product1.html"
                                      >
                                        <figure>
                                          <img
                                            src="img/products/054.jpg"
                                            alt="alt"
                                          />
                                          <img
                                            src="img/products/057.jpg"
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
                                          Somersung Sonic X2000 Pro Black
                                        </a>
                                      </h5>
                                      <div className="ps-product__meta">
                                        <span className="ps-product__price">
                                          $299.99
                                        </span>
                                      </div>
                                      <div className="ps-product__rating">
                                        <select
                                          className="ps-rating"
                                          data-read-only="true"
                                        >
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
                                <div className="col-12 col-sm-6 col-lg-3">
                                  <div className="ps-product ps-product--standard">
                                    <div className="ps-product__thumbnail">
                                      <a
                                        className="ps-product__image"
                                        href="product1.html"
                                      >
                                        <figure>
                                          <img
                                            src="img/products/028.jpg"
                                            alt="alt"
                                          />
                                          <img
                                            src="img/products/045.jpg"
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
                                          Digital Thermometer X30-Pro
                                        </a>
                                      </h5>
                                      <div className="ps-product__meta">
                                        <span className="ps-product__price sale">
                                          $60.39
                                        </span>
                                        <span className="ps-product__del">
                                          $89.99
                                        </span>
                                      </div>
                                      <div className="ps-product__rating">
                                        <select
                                          className="ps-rating"
                                          data-read-only="true"
                                        >
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
                                <div className="col-12 col-sm-6 col-lg-3">
                                  <div className="ps-product ps-product--standard">
                                    <div className="ps-product__thumbnail">
                                      <a
                                        className="ps-product__image"
                                        href="product1.html"
                                      >
                                        <figure>
                                          <img
                                            src="img/products/016.jpg"
                                            alt="alt"
                                          />
                                          <img
                                            src="img/products/021.jpg"
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
                                          Oxygen concentrator model KTS-5000
                                        </a>
                                      </h5>
                                      <div className="ps-product__meta">
                                        <span className="ps-product__price">
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
                                            //  selected="selected"
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
                                <div className="col-12 col-sm-6 col-lg-3">
                                  <div className="ps-product ps-product--standard">
                                    <div className="ps-product__thumbnail">
                                      <a
                                        className="ps-product__image"
                                        href="product1.html"
                                      >
                                        <figure>
                                          <img
                                            src="img/products/002.jpg"
                                            alt="alt"
                                          />
                                          <img
                                            src="img/products/017.jpg"
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
                                          Blue Hot Water Bottle, 2 Quart
                                          Capacity
                                        </a>
                                      </h5>
                                      <div className="ps-product__meta">
                                        <span className="ps-product__price sale">
                                          $38.39
                                        </span>
                                        <span className="ps-product__del">
                                          $14.52 - $15.52
                                        </span>
                                      </div>
                                      <div className="ps-product__rating">
                                        <select
                                          className="ps-rating"
                                          data-read-only="true"
                                        >
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
                      </div>
                    </div>
                  </li>
                  <li className="has-mega-menu">
                    <a href="blog-sidebar1.html">Blog</a>
                  </li>
                  <li className="has-mega-menu">
                    <a href="contact-us.html">Contact</a>
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
        <div className="ps-noti">
          <div className="container">
            <p className="m-0">
              Due to the <strong>COVID 19 </strong>epidemic, orders may be
              processed with a slight delay
            </p>
          </div>
          <a className="ps-noti__close" href="#/">
            <i className="icon-cross" />
          </a>
        </div>
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
