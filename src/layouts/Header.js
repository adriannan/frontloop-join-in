import React from "react";
import logo from "../images/logo.png";
import avatar from "../images/avatar.jpg";
import SearchInput from "../components/SearchInput";
import HeaderNav from "../components/HeaderNav";
import Notifications from "../components/Notifications";
import "../styles/header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <SearchInput />
      <HeaderNav />
      <Notifications />
      <div className="header__avatar">
        <NavLink to="/profile">
          <img src={avatar} alt="avatar" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
