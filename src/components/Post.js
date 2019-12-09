import React from "react";
import "../styles/content.css";

const Post = ({ img, title, date }) => {
  return (
    <a href="#" className="post">
      <div className="post__img">
        <img src={img} alt="post"></img>
      </div>
      <h3 className="post__tit">{title}</h3>
      <p className="post__date">{date}</p>
    </a>
  );
};

export default Post;
