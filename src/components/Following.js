import React from "react";
import Follow from "./Follow";
import logo1 from "../images/logo-microsoft.png";
import logo2 from "../images/logo-amazon.jpg";

const follows = [
  {
    id: 1,
    img: logo1,
    title: "Microsoft"
  },
  {
    id: 2,
    img: logo2,
    title: "Amazon",
    date: "February 19, 2016"
  },
  {
    id: 1,
    img: logo1,
    title: "Microsoft"
  },
  {
    id: 2,
    img: logo2,
    title: "Amazon",
    date: "February 19, 2016"
  }
];

const Following = () => {
  const follow = follows.map(follow => <Follow id={follow.id} {...follow} />);

  return (
    <section className="content__follow">
      <div className="follow__header">
        <h3>following</h3>
      </div>
      <div className="follow__main">{follow}</div>
      <button className="follow__btn-more">See all (20)</button>
    </section>
  );
};
export default Following;
