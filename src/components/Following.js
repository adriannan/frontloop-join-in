import React, { Component } from "react";
import Follow from "./Follow";
import logo1 from "../images/logo-microsoft.png";
import logo2 from "../images/logo-amazon.jpg";
import logo3 from "../images/logo-youtube.png";

const follows = [
  {
    id: 1,
    img: logo1,
    title: "Microsoft"
  },
  {
    id: 2,
    img: logo2,
    title: "Amazon"
  },
  {
    id: 3,
    img: logo3,
    title: "Youtube"
  },
  {
    id: 4,
    img: logo1,
    title: "Microsoft"
  },
  {
    id: 5,
    img: logo3,
    title: "Youtube"
  },
  {
    id: 6,
    img: logo1,
    title: "Amazon"
  },
  {
    id: 7,
    img: logo2,
    title: "Microsoft"
  },
  {
    id: 8,
    img: logo3,
    title: "Youtube"
  },
  {
    id: 9,
    img: logo1,
    title: "Microsoft"
  },
  {
    id: 10,
    img: logo3,
    title: "Youtube"
  },
  {
    id: 11,
    img: logo1,
    title: "Microsoft"
  },
  {
    id: 12,
    img: logo2,
    title: "Amazon"
  }
];
const follow = follows.map(follow => <Follow id={follow.id} {...follow} />);

let followsArr = [];

class Following extends Component {
  state = {
    showAll: false
  };
  handleClick = () => {
    this.setState({
      showAll: !this.state.showAll
    });
  };
  // followShow = () => {
  //   for (let i = 0; i < this.state.showingPosts; i++) {
  //     {
  //       followsArr.push(follow[i]);
  //     }
  //   }
  // };
  // componentWillMount() {
  //   this.followShow();
  // }

  render() {
    const following = follows.map(follow => (
      <Follow id={follow.id} {...follow} />
    ));
    const follow = following.slice(0, 4);
    return (
      <section className="content__follow" id="following">
        <div className="follow__header">
          <h3>following</h3>
        </div>
        {/* <div className="follow__main">{follow}</div> */}
        <div className="follow__main">
          {this.state.showAll ? following : follow}
        </div>
        <button className="follow__btn-more" onClick={this.handleClick}>
          {this.state.showAll ? `Hide` : `See all (${follows.length})`}
        </button>
      </section>
    );
  }
}
export default Following;
