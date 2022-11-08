import { useState } from "react";

export function RecipesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="recipes-index">
      <h1>All recipes</h1>
      Search filter:{" "}
      <input value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} type="text" list="titles" />
      <datalist id="titles">
        {props.recipes.map((recipe) => (
          <option key={recipe.id}>{recipe.title}</option>
        ))}
      </datalist>
      <div className="row">
        {props.recipes
          .filter((recipe) => recipe.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((recipe) => (
            <div className="col-md-3 mb-4" key={recipe.id}>
              <div className="card">
                <img src={recipe.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">Chef: {recipe.chef}</p>
                  <a className="btn btn-primary" onClick={() => props.onSelectRecipe(recipe)}>
                    More info modal
                  </a>
                  <a className="btn btn-primary" href={`/recipes/${recipe.id}`}>
                    Go to show page
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
