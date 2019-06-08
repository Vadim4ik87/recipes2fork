import React from "react";
import "./RecipeDetail.css";

const RecipeDetail = ({
  selectedRecipe,
  onRecipePopUpClose,
  onReadStorage
}) => {
  //15 min for each 3 ingredients
  const calcTime = () => {
    const numIng = selectedRecipe.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    return periods * 15;
  };

  if (selectedRecipe) {
    return (
      <section className="recipeDetail">
        <div
          onClick={e => onRecipePopUpClose(e)}
          className="recipeDetail__background"
        />
        <div
          onClick={() => onRecipePopUpClose()}
          className="recipeDetail__close"
        >
          &otimes;
        </div>
        <div className="recipeDetail__wrapper">
          <h1 className="recipeDetail__title">{selectedRecipe.title}</h1>
          <figure className="recipeDetail__fig">
            <img
              className="recipeDetail__img"
              alt={selectedRecipe.publisher}
              src={selectedRecipe.image_url}
            />
          </figure>
          <div className="recipeDetail__info">
            <div className="recipeDetail__preparation">
              <h1 className="recipeDetail__heading">
                <span>{selectedRecipe.ingredients.length}</span> Ingredients
              </h1>
              <h4 className="recipeDetail__time">
                &#9201; {calcTime()} minutes
              </h4>
              <button
                onClick={() => onReadStorage(selectedRecipe)}
                className="recipeDetail__btn"
              >
                &oplus; Save
              </button>
            </div>
            <ul className="recipeDetail__list">
              {selectedRecipe.ingredients.map((element, index) => {
                return (
                  <li className="recipeDetail__item" key={index}>
                    {element}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="recipeDetail__directions">
            <div className="recipeDetail__publisher">
              <h2 className="recipeDetail__heading">How to cook it</h2>
              <p className="recipeDetail__text">
                This recipe was carefully designed and tested by
                <span className="recipeDetail__author">
                  {selectedRecipe.publisher}
                </span>
                .
              </p>
              <p className="recipeDetail__text">
                Please check out directions at their website.
              </p>
              <a
                className="recipeDetail__btn"
                href={selectedRecipe.source_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 10 }}
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return null;
};

export default RecipeDetail;
