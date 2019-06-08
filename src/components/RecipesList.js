import React from "react";
import "./RecipesList.css";
import Recipe from "./Recipe";
import RenderButtons from "./RenderButtons";

const RecipesList = props => {
  const recipes = props.recipes.map(
    ({ recipe_id, image_url, title, publisher }) => {
      return (
        <Recipe
          key={recipe_id}
          image_url={image_url}
          title={title}
          recipe_id={recipe_id}
          publisher={publisher}
          onRecipeSelect={props.onRecipeSelect}
          onReadStorage={props.onReadStorage}
        />
      );
    }
  );

  const renderPagination = () => {
    if (props.recipes.length) {
      return (
        <RenderButtons
          onSubmit={props.onSubmit}
          term={props.term}
          sort={props.sort}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <section className="recipes__list">
      {recipes}
      {renderPagination()}
    </section>
  );
};

export default RecipesList;
