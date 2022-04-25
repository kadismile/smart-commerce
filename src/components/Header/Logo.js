import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="ps-logo">
      <Link to="/">
        {" "}
        <img src="img/city-mart-logo.png" alt="" />
        <img className="sticky-logo" src="img/city-mart-logo.png" alt="" />
      </Link>
    </div>
  );
};

export default Logo;
