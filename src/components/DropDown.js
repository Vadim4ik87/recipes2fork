import React from "react";
import "./DropDown.css";

const DropDown = ({
  img,
  title,
  publisher,
  id,
  deleteFromStorage,
  onRecipeSelect
}) => {
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
    <div className="dropdown__wrapper">
      <button
        onClick={() => {
          deleteFromStorage(id);
        }}
        className="dropdown__btn"
      >
        &otimes;
      </button>
      <div className="dropdown__list" onClick={() => onRecipeSelect(id)}>
        <figure>
          <img className="dropdown__img" alt={title} src={img} />
        </figure>
        <div className="dropdown__description">
          <div className="dropdown__title">
            <h4>{recipeTitleLimit(title)}</h4>
          </div>
          <div className="dropdown__publisher">
            <p>{publisher}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
