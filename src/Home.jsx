import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";

export function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    console.log("Going to get all recipes...");
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response);
      setRecipes(response.data);
    });
  };

  useEffect(handleIndexRecipes, []);

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes={recipes} />
    </div>
  );
}
