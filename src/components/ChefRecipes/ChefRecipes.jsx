import React, { useEffect, useState } from "react";
import "./ChefRecipes.css";
import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Recipes from "../Recipes/Recipes";

const ChefRecipes = () => {
  const chefs = useLoaderData();
  const chefs_id = useParams().id;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const chef = chefs.find((chef) => chef.chef_id == chefs_id);
    setRecipes(chef);
  }, []);

  const {
    chef_id,
    chef_name,
    chef_photo,
    experience,
    description,
    likes,
    numbers_of_recipes
  } = recipes;

  return (
    <section className="chef-recipes">
      <div className="chef-banner">
        <div className="chef-card">
          <div className="chef-img-box">
            <img src={chef_photo} alt="" />
          </div>
          <h3 className="name">{chef_name}</h3>
          <p className="description">{description}</p>
          <p className="experience">{experience}+ years experience</p>
          <div className="likes">
            <p className="recipe-number">
              Recipes: <span>{numbers_of_recipes}</span>
            </p>
            <div className="like">
              <FontAwesomeIcon icon={faThumbsUp} className="icon" />
              <p>{likes}</p>
            </div>
          </div>
        </div>
      </div>
      <Recipes id={chef_id}></Recipes>
    </section>
  );
};

export default ChefRecipes;
