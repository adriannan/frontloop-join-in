import React from "react";
import "../styles/content.css";
import img1 from "../images/avatar.jpg";
import img2 from "../images/avatar2.jpg";
import img3 from "../images/avatar3.jpg";
import logo1 from "../images/logo-microsoft.png";
import logo2 from "../images/logo-youtube.png";

const Background = () => {
  return (
    <section className="content__bckg">
      <div className="bckg__header">
        <h3>background</h3>
      </div>
      <div className="bckg__main">
        <section>
          <h4 className="bckg__tit">
            <i class="material-icons">assignment</i>Summary
          </h4>
          <p className="bckg__sum">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section>
          <h4 className="bckg__tit">
            <i class="material-icons">work</i>Experience
          </h4>
          <div className="bckg__exp">
            <p className="exp__ms">
              <span>2000 - PRESENT</span>
              <span>Co-Founder, Chairman</span>
              <span>
                <a href="#">
                  Microsoft
                  <img src={logo1}></img>
                </a>
              </span>
            </p>
            <p className="exp__yt">
              <span>1992-1999</span>
              <span>Senior Developer</span>
              <span>
                <a href="#">
                  Youtube
                  <img src={logo2}></img>
                </a>
              </span>
            </p>
          </div>
        </section>
        <section>
          <h4 className="bckg__tit">
            <i class="material-icons">account_balance</i>Education
          </h4>
          <div className="bckg__edu">
            <p>
              <span>1973-1975</span>
              <span>Harvard University</span>
              <span>
                <a href="#">BS Computer Science</a>
              </span>
            </p>
            <p>
              <span>1960 - 1973</span>
              <span>Lakeside School, Seattle</span>
            </p>
          </div>
        </section>
        <section>
          <h4 className="bckg__tit">
            <i class="material-icons">emoji_objects</i>Sklills
          </h4>
          <div className="bckg__ski">
            <p>
              <span>74</span>
              <span>Social Media Marketing</span>
              <span>
                <img className="ski__img" src={img1}></img>
                <img className="ski__img" src={img2}></img>
                <img className="ski__img" src={img3}></img>
                <span className="ski__more">71+</span>
              </span>
            </p>
            <p>
              <span>67</span>
              <span>Web Development</span>
              <span>
                <img className="ski__img" src={img3}></img>
                <img className="ski__img" src={img2}></img>
                <img className="ski__img" src={img1}></img>
                <span className="ski__more">17+</span>
              </span>
            </p>
          </div>
        </section>
        <section>
          <h4 className="bckg__tit">
            <i class="material-icons">star</i>Interests
          </h4>
          <div className="bckg__int">
            <span>
              <a href="#">Wireless Industry</a>
            </span>
            <span>
              <a href="#">Photography</a>
            </span>
            <span>
              <a href="#">Web design</a>
            </span>
            <span>
              <a href="#">Technology</a>
            </span>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Background;
