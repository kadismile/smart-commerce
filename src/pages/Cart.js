import React from "react";
import { Link } from "react-router-dom";
import CartCheckout from "../components/Cart/CartCheckout";
import CartFooter from "../components/Cart/CartFooter";
import CartTable from "../components/Cart/CartTable";
import CartTableHead from "../components/Cart/CartTableHead";
import MobileCartTable from "../components/Mobile/MobileCartTable";
import MobileCartTableHead from "../components/Mobile/MobileCartTableHead";
import InterestedIn from "../components/Others/InterestedIn";

const Cart = () => {
  return (
    <div className="ps-shopping">
      <div className="container">
        <ul className="ps-breadcrumb">
          <li className="ps-breadcrumb__item">
            <Link to="/">Home</Link>
          </li>
          <li className="ps-breadcrumb__item active" aria-current="page">
            Shopping cart
          </li>
        </ul>
        <h3 className="ps-shopping__title">
          Shopping cart<sup>(3)</sup>
        </h3>
        <div className="ps-shopping__content">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-9">
              <table
                className="table ps-shopping__list"
                style={{
                  maxWidth: "100%",
                  color: "#103178",
                }}
              >
                <MobileCartTableHead />
                <MobileCartTable />
                <MobileCartTable />
                <MobileCartTable />
              </table>
              <div className="ps-shopping__table">
                <table className="table ps-table ps-table--product">
                  <CartTableHead />
                  <CartTable />
                  <CartTable />
                  <CartTable />
                </table>
              </div>
              <CartFooter />
            </div>
            <CartCheckout />
          </div>
          <InterestedIn />
        </div>
      </div>
    </div>
  );
};

export default Cart;
