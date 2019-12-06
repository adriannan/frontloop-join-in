import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const nav = [
  { name: "Posts", path: "/", exact: true },
  { name: "Background", path: "/backgrounds" },
  { name: "Recommendations", path: "/recommendations" },
  { name: "Following", path: "following" }
];

const Navigation = () => {
  const navLinks = nav.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return <ul>{navLinks}</ul>;
};

export default Navigation;
