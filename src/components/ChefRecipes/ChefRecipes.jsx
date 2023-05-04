import React, { useEffect, useState } from 'react';
import './ChefRecipes.css';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {
    const chefs = useLoaderData();
    const chef_id = useParams().id;
    
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const chef = chefs.find((chef) => chef.chef_id == chef_id);
        setRecipes(chef);
      }, []);

      console.log(recipes);

      const {chef_name, chef_photo, experience, likes, numbers_of_recipes} = recipes;

    return (
        <div>
            <a href="">recipe coming...</a>
        </div>
    );
};

export default ChefRecipes;