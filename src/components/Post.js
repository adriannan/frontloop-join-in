import React from "react";
import "../styles/content.css";

const Post = ({ img, title, date }) => {
  return (
    <div className="post">
      <img src={img} alt="post" className="post__img"></img>
      <h3 className="post__tit">{title}</h3>
      <p className="post__date">{date}</p>
    </div>
  );
};

export default Post;
