export function RecipesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateRecipe(props.recipe.id, params);
    event.target.reset();
  };

  return (
    <div>
      <p>Title: {props.recipe.title}</p>
      <p>Chef: {props.recipe.chef}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Directions: {props.recipe.directions}</p>
      <h2>Edit recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" defaultValue={props.recipe.title} type="text" />
        </div>
        <div>
          Chef: <input name="chef" defaultValue={props.recipe.chef} type="text" />
        </div>
        <div>
          Ingredients: <input name="ingredients" defaultValue={props.recipe.ingredients} type="text" />
        </div>
        <div>
          Directions: <input name="directions" defaultValue={props.recipe.directions} type="text" />
        </div>
        <div>
          Image url: <input name="image_url" defaultValue={props.recipe.image_url} type="text" />
        </div>
        <div>
          Prep time: <input name="prep_time" defaultValue={props.recipe.prep_time} type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
