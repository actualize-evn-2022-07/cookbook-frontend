import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { RecipesShow } from "./RecipesShow";
import { Modal } from "./Modal";

export function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleIndexRecipes = () => {
    console.log("Going to get all recipes...");
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response);
      setRecipes(response.data);
    });
  };

  const handleShowRecipe = (recipe) => {
    setIsRecipesShowVisible(true);
    setCurrentRecipe(recipe);
  };

  const handleHideRecipe = () => {
    setIsRecipesShowVisible(false);
  };

  const handleCreateRecipe = (params) => {
    axios.post("http://localhost:3000/recipes.json", params).then((response) => {
      console.log("Created recipes", response);
      setRecipes([...recipes, response.data]); // equivalent to `recipes.push(response.data);`
    });
  };

  const handleUpdateRecipe = (id, params) => {
    axios.patch(`http://localhost:3000/recipes/${id}.json`, params).then((response) => {
      console.log("Updated recipe", response);
      setIsRecipesShowVisible(false);
      setRecipes(
        recipes.map((recipe) => {
          if (recipe.id === id) {
            return response.data;
          } else {
            return recipe;
          }
        })
      );
    });
  };

  const handleDestroyRecipe = (recipe) => {
    console.log("You wanna destroy this recipe: ", recipe);
    axios.delete(`http://localhost:3000/recipes/${recipe.id}.json`).then((response) => {
      console.log("Recipe was destroyed!");
      setIsRecipesShowVisible(false);
      setRecipes(recipes.filter((r) => r.id !== recipe.id));
    });
  };

  useEffect(handleIndexRecipes, []);

  return (
    <div className="container">
      <RecipesNew onCreateRecipe={handleCreateRecipe} />
      <RecipesIndex recipes={recipes} onSelectRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowVisible} onClose={handleHideRecipe}>
        <RecipesShow recipe={currentRecipe} onUpdateRecipe={handleUpdateRecipe} onDestroyRecipe={handleDestroyRecipe} />
      </Modal>
    </div>
  );
}
