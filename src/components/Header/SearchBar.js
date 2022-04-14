import React from "react";

const SearchBar = () => {
  return (
    <div className="ps-search-table">
      <div className="input-group">
        <input
          className="form-control ps-input"
          type="text"
          placeholder="Search for products"
        />
        <div className="input-group-append">
          <a href="#/">
            <i className="fa fa-search" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
