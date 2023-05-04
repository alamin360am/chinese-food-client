import React from "react";
import "./recipe.css";

const Recipe = ({ recipe }) => {
  const { recipe_name, ingredients, instructions, ratings } = recipe;
  return (
    <div className="recipe">
      <h4>{recipe_name}</h4>
      <p className="rating">
        ratings: <span>{ratings}</span>
      </p>
      <div className="grid col-2">
        <div className="ingredients">
        <h4>Ingredients</h4>
          <ul>
            {ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions">
            <h4>Instructions</h4>
          <ul>
            {instructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
