import React from "react";
import "./SavedRecipes.css";
import DropDown from "./DropDown";

const SavedRecipes = ({ storage, deleteFromStorage, onRecipeSelect }) => {
  if (!storage.length) return null;
  const list = storage.map(e => {
    return (
      <DropDown
        key={e[2]}
        id={e[2]}
        img={e[0]}
        title={e[1]}
        publisher={e[3]}
        deleteFromStorage={deleteFromStorage}
        onRecipeSelect={onRecipeSelect}
      />
    );
  });

  return (
    <div className="storage">
      <button className="storage__btn"> {localStorage.length} Saved &#9663;</button>
      <div className="storage__content">{list}</div>
    </div>
  );
};

export default SavedRecipes;
