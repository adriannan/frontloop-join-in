import React from "react";
import "../styles/content.css";
import Recommendations from "./Recommendations";

const Recommendation = ({ txt, img, person, company }) => {
  return (
    <div className="rec">
      <p className="rec__txt">{txt}</p>
      <p className="rec__author">
        <a href="#">
          {" "}
          <img src={img} alt="avatar" className="rec__img"></img>{" "}
        </a>
        <h3 className="rec__name">
          <a href="#">{person}</a>
        </h3>
        <span className="rec__company">
          <a href="#">{company}</a>
        </span>
      </p>
    </div>
  );
};

export default Recommendation;
