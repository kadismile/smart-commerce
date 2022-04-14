import React from "react";
import CartItems from "./CartItems";

const UserCart = () => {
  return (
    <ul className="ps-header__icons">
      <li>
        <a className="ps-header__item open-search" href="#/">
          <i className="icon-magnifier" />
        </a>
      </li>
      <li>
        <a className="ps-header__item" href="#/" id="login-modal">
          <i className="icon-user" />
        </a>
        <div className="ps-login--modal">
          <form
            method="get"
            action="http://nouthemes.net/html/mymedi/do_action"
          >
            <div className="form-group">
              <label>Username or Email Address</label>
              <input className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-control" type="password" />
            </div>
            <div className="form-group form-check">
              <input className="form-check-input" type="checkbox" />
              <label>Remember Me</label>
            </div>
            <button className="ps-btn ps-btn--warning" type="submit">
              Log In
            </button>
          </form>
        </div>
      </li>
      <CartItems />
    </ul>
  );
};

export default UserCart;
