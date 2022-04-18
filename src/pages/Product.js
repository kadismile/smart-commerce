import React from "react";
import ProductCard from "../components/Products/ProductCard";

const Product = () => {
  return (
    <div className="ps-categogy">
      <div className="container">
        <ul className="ps-breadcrumb">
          <li className="ps-breadcrumb__item">
            <a href="index-2.html">Home</a>
          </li>
          <li className="ps-breadcrumb__item">
            <a href="index-2.html">Shop</a>
          </li>
          <li className="ps-breadcrumb__item active" aria-current="page">
            Diagnosis
          </li>
        </ul>
        <h1 className="ps-categogy__name">Search results: “mas”</h1>
        <div className="ps-categogy__content">
          <div className="row row-reverse">
            <div className="col-12 col-md-9">
              <ProductCard />
              {/* <div className="ps-pagination">
                <ul className="pagination">
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-double-left" />
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-double-right" />
                    </a>
                  </li>
                </ul>
              </div> */}
              <div
                className="ps-delivery"
                data-background="img/promotion/banner-delivery-2.jpg"
              >
                <div className="ps-delivery__content">
                  <div className="ps-delivery__text">
                    {" "}
                    <i className="icon-shield-check" />
                    <span>
                      {" "}
                      <strong>100% Secure delivery </strong>without contacting
                      the courier
                    </span>
                  </div>
                  <a className="ps-delivery__more" href="#/">
                    More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="ps-widget ps-widget--product">
                <div className="ps-widget__block">
                  <h4 className="ps-widget__title">Categories</h4>
                  <a className="ps-block-control" href="#/">
                    <i className="fa fa-angle-down" />
                  </a>
                  <div className="ps-widget__content ps-widget__category">
                    <ul className="menu--mobile">
                      <li>
                        <a href="#/">Food Mart</a>
                        <span className="sub-toggle">
                          <i className="fa fa-chevron-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="#/">Drinks</a>
                          </li>
                          <li>
                            <a href="#/">Canned & Packages Foods</a>
                          </li>
                          <li>
                            <a href="#/">Grains & Rice</a>
                          </li>
                          <li>
                            <a href="#/">Pasta</a>
                          </li>
                          <li>
                            <a href="#/">Herbs, Spices & Seasonings</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#/">Household</a>
                        <span className="sub-toggle">
                          <i className="fa fa-chevron-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="#/">Laundry</a>
                          </li>
                          <li>
                            <a href="#/">Toileteries</a>
                          </li>
                          <li>
                            <a href="#/">Dishwashing</a>
                          </li>
                          <li>
                            <a href="#/">Air Fresheners</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#/">Beer, Wine & Spirits</a>
                        <span className="sub-toggle">
                          <i className="fa fa-chevron-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="#/">Beer</a>
                          </li>
                          <li>
                            <a href="#/">Vodka</a>
                          </li>
                          <li>
                            <a href="#/">Wine</a>
                          </li>
                          <li>
                            <a href="#/">Whiskey</a>
                          </li>
                          <li>
                            <a href="#/">Liquor</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#/">Baby Products</a>
                        <span className="sub-toggle">
                          <i className="fa fa-chevron-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="#/">Diapers</a>
                          </li>
                          <li>
                            <a href="#/">Baby Food</a>
                          </li>
                          <li>
                            <a href="#/">Baby Care</a>
                          </li>
                          <li>
                            <a href="#/">Baby Toys</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#/">Fragrances</a>
                        <span className="sub-toggle">
                          <i className="fa fa-chevron-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="#/">Men</a>
                          </li>
                          <li>
                            <a href="#/">Women</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#/">Oral Care</a>
                        <span className="sub-toggle">
                          <i className="fa fa-chevron-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="#/">Toothbrushes</a>
                          </li>
                          <li>
                            <a href="#/">Dental Care</a>
                          </li>
                          <li>
                            <a href="#/">Teeth Whitening</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
