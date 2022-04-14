import React from "react";

function MobileSearch() {
  return (
    <div className="ps-search">
      <div className="ps-search__content ps-search--mobile"><a className="ps-search__close" href="#" id="close-search"><i className="icon-cross"/></a>
        <h3>Search</h3>
        <form action="http://nouthemes.net/html/mymedi/do_action" method="post">
          <div className="ps-search-table">
            <div className="input-group">
              <input className="form-control ps-input" type="text" placeholder="Search for products"/>
              <div className="input-group-append"><a href="#"><i className="fa fa-search"/></a></div>
            </div>
          </div>
        </form>
        <div className="ps-search__result">
          <div className="ps-search__item">
            <div className="ps-product ps-product--horizontal">
              <div className="ps-product__thumbnail"><a className="ps-product__image" href="#">
                <figure><img src="img/products/052.jpg" alt="alt"/></figure>
              </a></div>
              <div className="ps-product__content">
                <h5 className="ps-product__title"><a>3-layer <span className="hightlight">mask</span> with an elastic
                  band (1 piece)</a></h5>
                <p className="ps-product__desc">Study history up to 30 days Up to 5 users simultaneously Has HEALTH
                  certificate</p>
                <div className="ps-product__meta"><span className="ps-product__price">$38.24</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-search__item">
            <div className="ps-product ps-product--horizontal">
              <div className="ps-product__thumbnail"><a className="ps-product__image" href="#">
                <figure><img src="img/products/033.jpg" alt="alt"/></figure>
              </a></div>
              <div className="ps-product__content">
                <h5 className="ps-product__title"><a>3 Layer Disposable Protective Face <span
                  className="hightlight">mask</span>s</a></h5>
                <p className="ps-product__desc">Study history up to 30 days Up to 5 users simultaneously Has HEALTH
                  certificate</p>
                <div className="ps-product__meta"><span className="ps-product__price sale">$14.52</span><span
                  className="ps-product__del">$17.24</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-search__item">
            <div className="ps-product ps-product--horizontal">
              <div className="ps-product__thumbnail"><a className="ps-product__image" href="#">
                <figure><img src="img/products/051.jpg" alt="alt"/></figure>
              </a></div>
              <div className="ps-product__content">
                <h5 className="ps-product__title"><a>3-Ply Ear-Loop Disposable Blue Face <span
                  className="hightlight">mask</span></a></h5>
                <p className="ps-product__desc">Study history up to 30 days Up to 5 users simultaneously Has HEALTH
                  certificate</p>
                <div className="ps-product__meta"><span className="ps-product__price sale">$14.99</span><span
                  className="ps-product__del">$38.24</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-search__item">
            <div className="ps-product ps-product--horizontal">
              <div className="ps-product__thumbnail"><a className="ps-product__image" href="#">
                <figure><img src="img/products/050.jpg" alt="alt"/></figure>
              </a></div>
              <div className="ps-product__content">
                <h5 className="ps-product__title"><a>Disposable Face <span className="hightlight">mask</span> for
                  Unisex</a></h5>
                <p className="ps-product__desc">Study history up to 30 days Up to 5 users simultaneously Has HEALTH
                  certificate</p>
                <div className="ps-product__meta"><span className="ps-product__price sale">$8.15</span><span
                  className="ps-product__del">$12.24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileSearch