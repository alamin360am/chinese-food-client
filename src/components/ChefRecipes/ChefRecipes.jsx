import React, { useEffect, useState } from "react";
import "./ChefRecipes.css";
import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const ChefRecipes = () => {
  const chefs = useLoaderData();
  const chef_id = useParams().id;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const chef = chefs.find((chef) => chef.chef_id == chef_id);
    setRecipes(chef);
  }, []);

  console.log(recipes);

  const {
    chef_name,
    chef_photo,
    experience,
    likes,
    numbers_of_recipes,
    recipe,
  } = recipes;

  return (
    <section className="chef-recipes">
      <div className="chef-banner">
        <div className="chef-card">
          <div className="chef-img-box">
            <img src={chef_photo} alt="" />
          </div>
          <h3 className="name">{chef_name}</h3>
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
    </section>
  );
};

export default ChefRecipes;
