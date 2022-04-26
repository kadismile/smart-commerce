import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="ps-page--notfound">
      <div className="container">
        <ul className="ps-breadcrumb">
          <li className="ps-breadcrumb__item">
            <Link to="/">Home</Link>
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
                <Link to="/" className="ps-btn ps-btn--primary">
                  Back to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
