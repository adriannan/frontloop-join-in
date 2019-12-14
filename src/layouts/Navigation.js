import React, { Component } from "react";
import "../styles/navigation.css";

const nav = [
  { name: "Posts", path: "posts", exact: true },
  { name: "Background", path: "background" },
  { name: "Recommendations", path: "recommendations" },
  { name: "Following", path: "following" }
];

class Navigation extends Component {
  state = {
    navFixed: false
  };

  componentDidMount() {
    const nav = document.querySelector(".main__nav");
    window.addEventListener("scroll", () => {
      if (nav.getBoundingClientRect().top < 0) {
        this.setState({ navFixed: true });
      } else {
        this.setState({ navFixed: false });
      }
    });
  }

  handleClick(event, link) {
    event.preventDefault();
    let anchorTarget = document.getElementById(link);
    var headerOffset = 50;
    var elementPosition = anchorTarget.offsetTop;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  render() {
    const navLinks = nav.map(item => (
      <li key={item.name}>
        <a href={"#" + item.path} onClick={e => this.handleClick(e, item.path)}>
          {item.name}
        </a>
      </li>
    ));

    return (
      <ul className={this.state.navFixed ? "nav-fixed" : ""}>{navLinks}</ul>
    );
  }
}

export default Navigation;
