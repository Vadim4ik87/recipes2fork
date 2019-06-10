import React from "react";
import "./RecipesList.css";
import Recipe from "./Recipe";
import RenderButtons from "./RenderButtons";

class RecipesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  scrollHandler = () => {
    window.scrollTo(0, this.myRef.current.scrollIntoView());
  };

  recipes = () =>
    this.props.recipes.map(({ recipe_id, image_url, title, publisher }) => {
      return (
        <Recipe
          key={recipe_id}
          image_url={image_url}
          title={title}
          recipe_id={recipe_id}
          publisher={publisher}
          onRecipeSelect={this.props.onRecipeSelect}
          onReadStorage={this.props.onReadStorage}
        />
      );
    });

  renderPagination = () => {
    if (this.props.recipes.length) {
      return (
        <RenderButtons
          onSubmit={this.props.onSubmit}
          term={this.props.term}
          sort={this.props.sort}
          scrollHandler={this.scrollHandler}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <section ref={this.myRef} className="recipes__list">
        {this.recipes()}
        {this.renderPagination()}
      </section>
    );
  }
}

export default RecipesList;
