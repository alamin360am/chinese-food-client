import React, { useState } from "react";
import "./recipe.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
  const { recipe_name, ingredients, instructions, ratings } = recipe;
  const [condition, setCondition] = useState(false)

  const toastify = ()=>{
    toast(`${recipe_name} is your favorite`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      setCondition(true)
  }

  return (
    <div className="recipe">
      <div className="recipe-title">
        <div className="title">
          <h4>{recipe_name}</h4>
          <p className="rating">
            ratings: <span>{ratings}</span>
          </p>
        </div>
        <button disabled={condition} onClick={toastify} className={`btn-primary ${condition? 'disable' : ''}`}>Favorite</button>
      </div>
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Recipe;
