export function RecipesNew() {
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
