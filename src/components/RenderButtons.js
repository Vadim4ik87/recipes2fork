import React from "react";
import "./RenderButtons.css";

class RenderButtons extends React.Component {
  constructor() {
    super();
    this.state = { page: 1 };
  }

  renderBtnCount = count => {
    let currentPage = this.state.page;
    if (currentPage >= 1) {
      if (count === "right") {
        currentPage++;
        this.props.onSubmit(this.props.term, currentPage, this.props.sort);
      }
      if (count === "left") {
        currentPage--;
        this.props.onSubmit(this.props.term, currentPage, this.props.sort);
      }
    }
    this.setState({ page: currentPage });
    this.props.scrollHandler();
  };

  renderBtns = () => {
    if (this.state.page <= 1) {
      return (
        <button
          onClick={() => {
            this.renderBtnCount("right");
          }}
          className="renderBtn__btn"
        >
          Page {this.state.page + 1} &#9657;
        </button>
      );
    } else {
      return (
        <React.Fragment>
          <button
            onClick={() => {
              this.renderBtnCount("left");
            }}
            className="renderBtn__btn"
          >
            &#9667; Page {this.state.page - 1}
          </button>
          <button
            onClick={() => {
              this.renderBtnCount("right");
            }}
            className="renderBtn__btn"
          >
            Page {this.state.page + 1} &#9657;
          </button>
        </React.Fragment>
      );
    }
  };

  render() {
    return <div className="renderBtn">{this.renderBtns()}</div>;
  }
}

export default RenderButtons;
