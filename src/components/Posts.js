import React from "react";
import Post from "./Post";
import img1 from "../images/article1.jpg";
import img2 from "../images/article2.jpg";
import img3 from "../images/article3.jpg";

const postsList = [
  {
    id: 1,
    img: img1,
    title: "3 Myths That Confuse Top-Managers",
    date: "February 19, 2016"
  },
  {
    id: 2,
    img: img2,
    title: "How much do we spend on hot drinks",
    date: "February 19, 2016"
  },
  {
    id: 3,
    img: img3,
    title: "Good news you might have noticed",
    date: "February 19, 2016"
  }
  // {
  //   id: 4,
  //   img: img4,
  //   title: "Good newsyou Caraboon!",
  //   date: "Februuuury 19, 2016"
  // }
];

const Posts = () => {
  const post = postsList.map(post => <Post id={post.id} {...post} />);

  return (
    <section className="content__posts" id="posts">
      <div className="posts__header">
        <h3>posts</h3>
        <p>
          <button className="btn">
            <i class="material-icons">keyboard_arrow_left</i>
          </button>
          <button>
            <i class="material-icons">keyboard_arrow_right</i>
          </button>
        </p>
      </div>
      <div className="posts__main">{post}</div>
    </section>
  );
};

export default Posts;
