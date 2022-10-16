import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { RecipesShow } from "./RecipesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
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

  useEffect(handleIndexRecipes, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <RecipesNew onCreateRecipe={handleCreateRecipe} />
      <RecipesIndex recipes={recipes} onSelectRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowVisible} onClose={handleHideRecipe}>
        <RecipesShow recipe={currentRecipe} />
      </Modal>
    </div>
  );
}
