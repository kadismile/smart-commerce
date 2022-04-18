import React from "react";

function SideMenu() {
  return (
    <>
      <div className="ps-navigation--footer">
        <div className="ps-nav__item">
          <a href="#/" id="open-menu">
            <i className="icon-menu" />
          </a>
          <a href="#/" id="close-menu">
            <i className="icon-cross" />
          </a>
        </div>
        <div className="ps-nav__item">
          <a href="index-2.html">
            <i className="icon-home2" />
          </a>
        </div>
        <div className="ps-nav__item">
          <a href="my-account.html">
            <i className="icon-user" />
          </a>
        </div>
        <div className="ps-nav__item">
          <a href="shopping-cart.html">
            <i className="icon-cart-empty" />
            <span className="badge">2</span>
          </a>
        </div>
      </div>
      <div className="ps-menu--slidebar">
        <div className="ps-menu__content">
          <ul className="menu--mobile">
            <li className="menu-item-has-children">
              <a href="#/">Food Mart</a>
              <span className="sub-toggle">
                <i className="fa fa-chevron-down" />
              </span>
              <ul className="sub-menu">
                <li>
                  <a href="category-list.html">Drinks</a>
                </li>
                <li>
                  <a href="category-list.html">Canned & Packages Foods</a>
                </li>
                <li>
                  <a href="category-list.html">Grains & Rice</a>
                </li>
                <li>
                  <a href="category-list.html">Pasta</a>
                </li>
                <li>
                  <a href="category-list.html">Herbs, Spices & Seasonings</a>
                </li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <a href="#/">Household</a>
              <span className="sub-toggle">
                <i className="fa fa-chevron-down" />
              </span>
              <ul className="sub-menu">
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
            </li>

            <li className="menu-item-has-children">
              <a href="#/">Beer, Wine & Spirits</a>
              <span className="sub-toggle">
                <i className="fa fa-chevron-down" />
              </span>
              <ul className="sub-menu">
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
            </li>

            <li className="menu-item-has-children">
              <a href="#/">Baby Products</a>
              <span className="sub-toggle">
                <i className="fa fa-chevron-down" />
              </span>
              <ul className="sub-menu">
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
            </li>

            <li className="menu-item-has-children">
              <a href="#/">Fragrances</a>
              <span className="sub-toggle">
                <i className="fa fa-chevron-down" />
              </span>
              <ul className="sub-menu">
                <li>
                  <a href="category-list.html">Men</a>
                </li>
                <li>
                  <a href="category-list.html">Women</a>
                </li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <a href="#/">Oral Care</a>
              <span className="sub-toggle">
                <i className="fa fa-chevron-down" />
              </span>
              <ul className="sub-menu">
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
            </li>

            <li className="menu-item-has-children">
              <a href="#/">Hair Care</a>
              <span className="sub-toggle">
                <i className="fa fa-chevron-down" />
              </span>
              <ul className="sub-menu">
                <li>
                  <a href="category-list.html">Shampoo & Conditioner</a>
                </li>
                <li>
                  <a href="category-list.html">Hair Accessories</a>
                </li>
                <li>
                  <a href="category-list.html">Hair cutting tools</a>
                </li>
                <li>
                  <a href="category-list.html">Hair & Scalp Care</a>
                </li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <a href="#/">Makeup</a>
              <span className="sub-toggle">
                <i className="fa fa-chevron-down" />
              </span>
              <ul className="sub-menu">
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
            </li>
          </ul>

          <div className="ps-menu__item">
            <div className="ps-menu__contact">
              Need help? <strong>0020 500 - MYMEDI - 000</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
