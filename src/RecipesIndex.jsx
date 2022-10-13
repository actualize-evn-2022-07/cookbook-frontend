export function RecipesIndex(props) {
  return (
    <div id="recipes-index">
      <h1>All recipes</h1>
      <div className="recipes row">
        {props.recipes.map((recipe) => (
          <div className="col-4" key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image_url} alt="" />
            <p>Chef: {recipe.chef}</p>
            <button className="btn btn-info" onClick={() => props.onSelectRecipe(recipe)}>
              More info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
