import React from "react";
import "../styles/content.css";

const Follow = ({ img, title }) => {
  return (
    <div className="follow">
      <a href="#">
        <div className="follow__img">
          <img src={img} alt="site"></img>
        </div>
        <h3 className="follow__tit">{title}</h3>
      </a>
      <button className="follow__btn">
        <span>+</span>Follow
      </button>
    </div>
  );
};

export default Follow;
