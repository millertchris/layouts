import React, { Component, setState } from "react";

class ButtonGroup extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.flexAlign = this.props.flexAlign;
  }

  handleClick(e) {
    const position = e.target.getAttribute("data-style");
    const buttons = e.target.closest(".btn-group").querySelectorAll("button");

    buttons.forEach((node) => {
      node.classList.remove("active");
    });

    e.target.classList.add("active");
    console.log(this.flexAlign);

    if (this.flexAlign == "justifyContent") {
      document.querySelector(".scene").style.justifyContent = position;
    } else {
      document.querySelector(".scene").style.alignItems = position;
    }
  }

  render() {
    return (
      <>
        <div className="btn-group horizontal">
          <h2>{this.props.title}</h2>
          <button
            className="btn"
            data-style="flex-start"
            onClick={this.handleClick}
          >
            flex-start
          </button>
          <button
            className="btn"
            data-style="center"
            onClick={this.handleClick}
          >
            center
          </button>
          <button
            className="btn"
            data-style="flex-end"
            onClick={this.handleClick}
          >
            flex-end
          </button>
        </div>
      </>
    );
  }
}

export default ButtonGroup;
