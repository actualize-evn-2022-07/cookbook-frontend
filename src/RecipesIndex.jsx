export function RecipesIndex(props) {
  return (
    <div id="recipes-index">
      <h1>All recipes</h1>

      <div className="row">
        {props.recipes.map((recipe) => (
          <div className="col-md-3 mb-4" key={recipe.id}>
            <div className="card">
              <img src={recipe.image_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">Chef: {recipe.chef}</p>
                <a href="#" className="btn btn-primary" onClick={() => props.onSelectRecipe(recipe)}>
                  More info
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
