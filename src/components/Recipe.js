import React from "react";
import "./Recipe.css";

const Recipe = (props) => {
  const recipeTitleLimit = (title, limit = 17) => {
    const newTitle = [];
    let acc = 0;
    let test = title.split(" ");
    if (title.length > limit) {
      for (let i = 0; i < test.length; i++) {
        if (acc + test[i].length <= limit) {
          acc = acc + test[i].length;
          newTitle.push(test[i]);
        }
      }
      return `${newTitle.join(" ")}...`;
    }
    return title;
  };

  return (
    <div className="recipe__wrapper">
      <div className="recipe__save">
        <button onClick={() => props.onReadStorage(props)} className="recipe__btn">
          &oplus; Save
        </button>
      </div>
      <React.Fragment>
        <div
          onClick={() => props.onRecipeSelect(props.recipe_id)}
          className="recipe__item"
        >
          <figure>
            <img className="recipe__img" alt={props.recipe_id} src={props.image_url} />
          </figure>
          <div className="recipe__description">
            <div className="recipe__title">
              <h4>{recipeTitleLimit(props.title)}</h4>
            </div>
            <div className="recipe__publisher">
              <p>{props.publisher}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Recipe;
