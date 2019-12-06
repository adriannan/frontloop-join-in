import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const nav = [
  { name: "Home", path: "/", exact: true },
  { name: "Profile", path: "/profile" },
  { name: "Connections", path: "/connections" },
  { name: "Interest", path: "interest" },
  { name: "Try Premium", path: "premium" }
];

const HeaderNav = () => {
  const navLinks = nav.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="header__nav">
      <ul>{navLinks}</ul>
    </nav>
  );
};

export default HeaderNav;
