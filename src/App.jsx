import axios from "axios";
import { useState, useEffect } from "react";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#recipes-index">All recipes</a> | <a href="#recipes-new">New recipe</a>
    </header>
  );
}

function RecipesNew() {
  return (
    <div id="recipes-new">
      <h1>New recipe</h1>
      <form action="">
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Chef: <input type="text" />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

function RecipesIndex(props) {
  return (
    <div id="recipes-index">
      <h1>All recipes</h1>
      <div className="recipes">
        {props.recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image_url} alt="" />
            <p>Chef: {recipe.chef}</p>
            <button>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  );
}

function Home() {
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

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
