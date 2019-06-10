import React from "react";
import "./Header.css";
import SavedRecipes from "./SavedRecipes";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { term: "" };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.storage.length !== nextProps.storage.length) {
      return true;
    } else if (this.state !== nextState) {
      return true;
    } else {
      return false;
    }
  }

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.term !== "") {
      this.props.onSubmit(this.state.term);
    }
  };

  renderBtn = () => {
    if (this.state.term !== "") {
      return (
        <button
          onClick={() => this.setState({ term: "" })}
          className="header__btn"
        >
          &otimes;
        </button>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <header>
        <form className="header__form" onSubmit={this.onFormSubmit}>
          {this.renderBtn()}
          <input
            className="header__input"
            placeholder="Search By Ingredients or Name"
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
          <input
            className="header__submit"
            value="&#128269; Search"
            type="submit"
          />
        </form>
        <div className="header__sort">
          <button className="header__sorting">Sort By &#9663;</button>
          <div className="header__list">
            <div
              onClick={() => this.props.onSubmit(this.props.term, 1, "r")}
              className="header__item"
            >
              Top Rated
            </div>
            <div
              onClick={() => this.props.onSubmit(this.props.term, 1, "t")}
              className="header__item"
            >
              Trending
            </div>
          </div>
        </div>
        <SavedRecipes
          storage={this.props.storage}
          deleteFromStorage={this.props.deleteFromStorage}
          onRecipeSelect={this.props.onRecipeSelect}
        />
      </header>
    );
  }
}

export default Header;
