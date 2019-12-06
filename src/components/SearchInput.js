import React from "react";
import "../styles/header.css";

const SearchInput = () => {
  return (
    <div className="header__search">
      <input
        className="search__input"
        type="search"
        placeholder="Search"
      ></input>
      <button className="search__btn">
        <i class="material-icons">search</i>
      </button>
    </div>
  );
};

export default SearchInput;
