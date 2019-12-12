import React, { Component } from "react";
import "../styles/navigation.css";

// const nav = [
//   { name: "Posts", path: "#posts", exact: true },
//   { name: "Background", path: "#background" },
//   { name: "Recommendations", path: "#recommendations" },
//   { name: "Following", path: "#following" }
// ];
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
    // let anchorTarget = document.getElementById(link);
    // anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });

    let anchorTarget = document.getElementById(link);
    // var headerOffset = document.querySelector(".main__nav ul").clientHeight;
    var headerOffset = 50;
    var elementPosition = anchorTarget.offsetTop;
    // var elementPosition = anchorTarget.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    // anchorTarget.scrollIntoView(true);
    // window.scrollBy(0, -45);
    // setTimeout(() => {
    //   window.scrollBy(0, -45);
    // }, 100);
    // this.anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  // componentDidMount() {
  // this.anchorTarget = document.querySelector(".content__bckg");
  // }
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

// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import "../styles/navigation.css";

// const nav = [
//   { name: "Posts", path: "/", exact: true },
//   { name: "Background", path: "background" },
//   { name: "Recommendations", path: "recommendations" },
//   { name: "Following", path: "following" }
// ];

// class Navigation extends Component {
//   constructor(props) {
//     super();
//     this.anchorTarget = null;
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(e) {
//     e.preventDefault();
//     this.anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
//   }
//   componentDidMount() {
//     this.anchorTarget = document.querySelector(".content__bckg");
//   }
//   render() {
//     return (
//       <li>
//         <a
//           href={"#" + this.props.itemName}
//           onClick={this.handleClick}
//           aria-label={"Scroll to " + this.props.itemName}
//         >
//           {this.props.itemName}
//         </a>
//       </li>
//     );
//   }
// }

// export default Navigation;
