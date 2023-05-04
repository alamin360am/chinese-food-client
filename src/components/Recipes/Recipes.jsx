import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/recipe')
        .then(res=> res.json())
        .then(data => setRecipes(data))
    },[])

    console.log(recipes);

    return (
        <div>
            {
                recipes.map(recipe=> <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                ></Recipe>)
            }
        </div>
    );
};

export default Recipes;