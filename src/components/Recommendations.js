import React from "react";
import Post from "./Post";
import img1 from "../images/avatar.jpg";
import img2 from "../images/avatar2.jpg";
import img3 from "../images/avatar3.jpg";
import Recommendation from "./Recommendation";
// import img4 from "../images/avatar3.jpg";

const recomList = [
  {
    id: 1,
    img: img1,
    person: "Steve Jobs",
    company: "Apple",
    txt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
  {
    id: 2,
    img: img2,
    person: "Mark Zuckerberg",
    company: "Facebook",
    txt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
  {
    id: 3,
    img: img3,
    person: "Jeffrey Bezos",
    company: "Amazon",
    txt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  }
  // {
  //   id: 4,
  //   img: img4,
  //   title: "Good newsyou Caraboon!",
  //   date: "Februuuury 19, 2016"
  // }
];
const Recommendations = () => {
  const recom = recomList.map(recom => (
    <Recommendation id={recom.id} {...recom} />
  ));

  return (
    <section className="content__recom">
      <div className="recom__header">
        <h3>recommendations</h3>
        <p>
          <button className="btn">
            <i class="material-icons">keyboard_arrow_left</i>
          </button>
          <button>
            <i class="material-icons">keyboard_arrow_right</i>
          </button>
        </p>
      </div>
      <div className="recom__main">{recom}</div>
    </section>
  );
};

export default Recommendations;
