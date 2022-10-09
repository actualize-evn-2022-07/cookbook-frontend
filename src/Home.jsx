import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Modal } from "./Modal";

export function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);

  const handleIndexRecipes = () => {
    console.log("Going to get all recipes...");
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response);
      setRecipes(response.data);
    });
  };

  const handleShowRecipe = () => {
    setIsRecipesShowVisible(true);
  };

  const handleHideRecipe = () => {
    setIsRecipesShowVisible(false);
  };

  useEffect(handleIndexRecipes, []);

  return (
    <div>
      <button onClick={handleShowRecipe}>Show modal</button>
      <RecipesNew />
      <RecipesIndex recipes={recipes} />
      <Modal show={isRecipesShowVisible} onClose={handleHideRecipe}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
