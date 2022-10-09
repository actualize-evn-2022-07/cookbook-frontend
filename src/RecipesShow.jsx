export function RecipesShow(props) {
  return (
    <div>
      <p>Title: {props.recipe.title}</p>
      <p>Chef: {props.recipe.chef}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Directions: {props.recipe.directions}</p>
    </div>
  );
}
