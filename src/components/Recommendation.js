import React from "react";
import "../styles/content.css";

const Recommendation = ({ txt, img, person, company }) => {
  return (
    <div className="rec">
      <p className="rec__txt">{txt}</p>
      <p className="rec__author">
        <a href="#">
          {" "}
          <img src={img} alt="avatar" className="rec__img"></img>{" "}
        </a>
        <span className="rec__name">
          <a href="#">{person}</a>
        </span>
        <span className="rec__company">
          <a href="#">{company}</a>
        </span>
      </p>
    </div>
  );
};

export default Recommendation;
