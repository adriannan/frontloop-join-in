import React from "react";
import img1 from "../images/avatar.jpg";
import img2 from "../images/avatar2.jpg";
import img3 from "../images/avatar3.jpg";

const Aside = () => {
  return (
    <div>
      <h3 className="aside__tit">people also viewed</h3>
      <div className="aside__prof">
        <a href="#">
          <img src={img1} className="prof__img"></img>
          <span className="prof__name">Sergey Brin</span>
          <span className="prof__company">Google</span>
        </a>
      </div>
      <div className="aside__prof">
        <a href="#">
          <img src={img2} className="prof__img"></img>
          <span className="prof__name">Jeffrey Bezos</span>
          <span className="prof__company">Amazon</span>
        </a>
      </div>
      <div className="aside__prof">
        <a href="#">
          <img src={img3} className="prof__img"></img>
          <span className="prof__name">Steve Jobs</span>
          <span className="prof__company">Apple</span>
        </a>
      </div>
      <h3 className="aside__tit">more influencers</h3>
      <div className="aside__infl">
        <button className="infl__btn-left">
          <i class="material-icons">keyboard_arrow_left</i>
        </button>
        <a href="#">
          <img src={img3} className="infl__img"></img>
          <span className="infl__name">Steve Jobs</span>
          <span className="infl__company">Apple</span>
        </a>
        <button className="infl__btn-right">
          <i class="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
    </div>
  );
};

export default Aside;
