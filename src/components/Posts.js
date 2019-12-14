import React, { Component } from "react";
import Post from "./Post";
import img1 from "../images/article1.jpg";
import img2 from "../images/article2.jpg";
import img3 from "../images/article3.jpg";

const postsList = [
  {
    id: 1,
    img: img1,
    title: "Myths That Confuse Top-Managers",
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
  },
  {
    id: 4,
    img: img2,
    title: "Myths That Confuse Top-Managers",
    date: "February 19, 2016"
  },
  {
    id: 5,
    img: img3,
    title: "How much do we spend on hot drinks",
    date: "February 19, 2016"
  },
  {
    id: 6,
    img: img1,
    title: "Good news you might have noticed",
    date: "February 19, 2016"
  },
  {
    id: 7,
    img: img3,
    title: "Good news you might have noticed",
    date: "February 19, 2016"
  },
  {
    id: 8,
    img: img2,
    title: "Good news for you. Caraboon!",
    date: "Februuuury 19, 2016"
  }
];

class Posts extends Component {
  state = {
    activePost: 0
  };

  handleClickPrev = () => {
    if (this.state.activePost > 0) {
      this.setState({
        activePost: this.state.activePost - 1
      });
    }
  };
  handleClickNext = () => {
    if (this.state.activePost < postsList.length - 3) {
      this.setState({
        activePost: this.state.activePost + 1
      });
    }
  };
  render() {
    const post = postsList.map(post => <Post id={post.id} {...post} />);

    return (
      <section className="content__posts" id="posts">
        <div className="posts__header">
          <h3>posts</h3>
          <p>
            <button
              onClick={this.handleClickPrev}
              disabled={this.state.activePost == 0}
            >
              <i class="material-icons">keyboard_arrow_left</i>
            </button>
            <button
              onClick={this.handleClickNext}
              disabled={this.state.activePost == postsList.length - 3}
            >
              <i class="material-icons">keyboard_arrow_right</i>
            </button>
          </p>
        </div>

        <div className="posts__main">
          {post[this.state.activePost]}
          {post[this.state.activePost + 1]}
          {post[this.state.activePost + 2]}
        </div>
      </section>
    );
  }
}

export default Posts;
