import React from "react";

function SideMenu() {
  return (
    <>
      <div className="ps-navigation--footer">
      <div className="ps-nav__item"><a href="#" id="open-menu"><i className="icon-menu"/></a><a href="#"
                                                                                                id="close-menu"><i
        className="icon-cross"/></a></div>
      <div className="ps-nav__item"><a href="index-2.html"><i className="icon-home2"/></a></div>
      <div className="ps-nav__item"><a href="my-account.html"><i className="icon-user"/></a></div>
      <div className="ps-nav__item"><a href="wishlist.html"><i className="fa fa-heart-o"/><span
        className="badge">3</span></a></div>
      <div className="ps-nav__item"><a href="shopping-cart.html"><i className="icon-cart-empty"/><span
        className="badge">2</span></a></div>
    </div>
      <div className="ps-menu--slidebar">
        <div className="ps-menu__content">
          <ul className="menu--mobile">
            <li className="menu-item-has-children"><a href="#">Products</a><span className="sub-toggle"><i
              className="fa fa-chevron-down"/></span>
              <ul className="sub-menu">
                <li><a href="#">Wound Care</a><span className="sub-toggle"><i className="fa fa-chevron-down"/></span>
                  <ul className="sub-menu">
                    <li><a href="category-list.html">Bandages</a></li>
                    <li><a href="category-list.html">Gypsum foundations</a></li>
                    <li><a href="category-list.html">Patches and tapes</a></li>
                  </ul>
                </li>
                <li><a href="#">Higiene</a><span className="sub-toggle"><i className="fa fa-chevron-down"/></span>
                  <ul className="sub-menu">
                    <li><a href="category-list.html">Disposable products</a></li>
                    <li><a href="category-list.html">Face masks</a></li>
                    <li><a href="category-list.html">Gloves</a></li>
                  </ul>
                </li>
                <li><a href="#">Laboratory</a><span className="sub-toggle"><i className="fa fa-chevron-down"/></span>
                  <ul className="sub-menu">
                    <li><a href="category-list.html">Devices</a></li>
                    <li><a href="category-list.html">Diagnostic tests</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children"><a href="#">Home Medical Supplies</a><span className="sub-toggle"><i
              className="fa fa-chevron-down"/></span>
              <ul className="sub-menu">
                <li><a href="category-list.html">Diagnosis</a></li>
                <li><a href="category-list.html">Accessories Tools</a></li>
                <li><a href="category-list.html">Bandages</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children"><a href="#">Homepages</a><span className="sub-toggle"><i
              className="fa fa-chevron-down"/></span>
              <ul className="sub-menu">
                <li><a href="index-2.html">Home 01</a></li>
                <li><a href="home2.html">Home 02</a></li>
                <li><a href="home3.html">Home 03</a></li>
                <li><a href="home4.html">Home 04</a></li>
                <li><a href="home5.html">Home 05</a></li>
                <li><a href="home6.html">Home 06</a></li>
                <li><a href="home7.html">Home 07</a></li>
                <li><a href="home8.html">Home 08</a></li>
                <li><a href="home9.html">Home 09</a></li>
                <li><a href="home10.html">Home 10</a></li>
                <li><a href="home11.html">Home 11</a></li>
                <li><a href="home12.html">Home 12</a></li>
                <li><a href="home13.html">Home 13</a></li>
                <li><a href="home14.html">Home 14</a></li>
                <li><a href="home15.html">Home 15</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children"><a href="category-list.html">Shop</a></li>
            <li className="menu-item-has-children"><a href="#">Pages</a><span className="sub-toggle"><i
              className="fa fa-chevron-down"/></span>
              <ul className="sub-menu">
                <li><a href="#">Category</a><span className="sub-toggle"><i className="fa fa-chevron-down"/></span>
                  <ul className="sub-menu">
                    <li><a href="category-grid.html">Grid</a></li>
                    <li><a href="category-grid-detail.html">Grid with details</a></li>
                    <li><a href="category-grid-green.html">Grid with header green</a></li>
                    <li><a href="category-grid-dark.html">Grid with header dark</a></li>
                    <li><a href="category-grid-separate.html">Grid separate</a></li>
                    <li><a href="category-list.html">List</a></li>
                  </ul>
                </li>
                <li><a href="#">Product</a><span className="sub-toggle"><i className="fa fa-chevron-down"/></span>
                  <ul className="sub-menu">
                    <li><a href="product1.html">Layout 01</a></li>
                    <li><a href="product2.html">Layout 02</a></li>
                    <li><a href="product3.html">Layout 03</a></li>
                    <li><a href="product4.html">Layout 04</a></li>
                    <li><a href="product5.html">Layout 05</a></li>
                    <li><a href="product6.html">Layout 06</a></li>
                    <li><a href="product7.html">Layout 07</a></li>
                  </ul>
                </li>
                <li><a href="#">Pages</a><span className="sub-toggle"><i className="fa fa-chevron-down"/></span>
                  <ul className="sub-menu">
                    <li><a href="404.html">404</a></li>
                    <li><a href="about-us.html">About us</a></li>
                    <li><a href="my-account.html">My Account</a></li>
                    <li><a href="coming-soon-v1.html">Coming soon 1</a></li>
                    <li><a href="coming-soon-v2.html">Coming soon 2</a></li>
                    <li><a href="blog-post1.html">Blog post 1</a></li>
                    <li><a href="blog-post2.html">Blog post 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children"><a href="#">Collection</a><span className="sub-toggle"><i
              className="fa fa-chevron-down"/></span>
              <ul className="sub-menu">
                <li><a href="category-list.html">Face masks</a></li>
                <li><a href="category-list.html">Dental</a></li>
                <li><a href="category-list.html">Micrscope</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children"><a href="blog-sidebar1.html">Blog</a></li>
            <li className="menu-item-has-children"><a href="contact-us.html">Contact</a></li>
          </ul>
        </div>
        <div className="ps-menu__footer">
          <div className="ps-menu__item">
            <ul className="ps-language-currency">
              <li className="menu-item-has-children"><a href="#">English</a><span className="sub-toggle"><i
                className="fa fa-chevron-down"/></span>
                <ul className="sub-menu">
                  <li><a href="#">Français</a></li>
                  <li><a href="#">Deutsch</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children"><a href="#">USD</a><span className="sub-toggle"><i
                className="fa fa-chevron-down"/></span>
                <ul className="sub-menu">
                  <li><a href="#">USD</a></li>
                  <li><a href="#">EUR</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="ps-menu__item">
            <div className="ps-menu__contact">Need help? <strong>0020 500 - MYMEDI - 000</strong></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideMenu