import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function RecipesShowPage() {
  const [recipe, setRecipe] = useState({});
  const params = useParams();

  const handleShowRecipe = () => {
    axios.get(`http://localhost:3000/recipes/${params.id}.json`).then((response) => {
      console.log(response.data);
      setRecipe(response.data);
    });
  };

  useEffect(handleShowRecipe, []);

  return (
    <div>
      <h1>Recipe info</h1>
      <p>Title: {recipe.title}</p>
      <img src={recipe.image_url} alt="" />
      <p>Chef: {recipe.chef}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Directions: {recipe.directions}</p>
      <a className="btn btn-primary" href="/recipes">
        Back to all recipes
      </a>
    </div>
  );
}
