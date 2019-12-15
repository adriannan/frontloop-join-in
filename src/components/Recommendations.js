import React, { Component } from "react";
import img1 from "../images/avatar.jpg";
import img2 from "../images/avatar2.jpg";
import img3 from "../images/avatar3.jpg";
import Recommendation from "./Recommendation";

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
      "Enim ut sem viverra aliquet eget sit. Vel pretium lectus quam id leo in vitae. Vehicula ipsum a arcu cursus vitae. "
  },
  {
    id: 3,
    img: img3,
    person: "Jeffrey Bezos",
    company: "Amazon",
    txt:
      "Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Sapien faucibus et molestie ac feugiat sed lectus vestibulum."
  },
  {
    id: 2,
    img: img2,
    person: "Mark Zuckerberg",
    company: "Facebook",
    txt:
      "Viverra tellus in hac habitasse platea. Pharetra diam sit amet nisl suscipit. Tempus iaculis urna id volutpat lacus laoreet non."
  },
  {
    id: 3,
    img: img1,
    person: "Jeffrey Bezos",
    company: "Amazon",
    txt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  }
];

class Recommendations extends Component {
  state = {
    activeRecom: 0
  };
  handleClickPrev = () => {
    if (this.state.activeRecom > 0) {
      this.setState({
        activeRecom: this.state.activeRecom - 1
      });
    }
  };
  handleClickNext = () => {
    if (this.state.activeRecom < recomList.length - 3) {
      this.setState({
        activeRecom: this.state.activeRecom + 1
      });
    }
  };
  render() {
    const recom = recomList.map(recom => (
      <Recommendation id={recom.id} {...recom} />
    ));

    return (
      <section className="content__recom" id="recommendations">
        <div className="recom__header">
          <h3>recommendations</h3>
          <p>
            <button
              onClick={this.handleClickPrev}
              disabled={this.state.activeRecom == 0}
            >
              <i class="material-icons">keyboard_arrow_left</i>
            </button>
            <button
              onClick={this.handleClickNext}
              disabled={this.state.activeRecom == recomList.length - 3}
            >
              <i class="material-icons">keyboard_arrow_right</i>
            </button>
          </p>
        </div>
        <div className="recom__main">
          {recom[this.state.activeRecom]}
          {recom[this.state.activeRecom + 1]}
          {recom[this.state.activeRecom + 2]}
        </div>
      </section>
    );
  }
}

export default Recommendations;
