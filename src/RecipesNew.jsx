export function RecipesNew() {
  return (
    <div id="recipes-new">
      <h1>New recipe</h1>
      <form action="">
        <div>
          Title: <input className="form-control" type="text" />
        </div>
        <div>
          Chef: <input className="form-control" type="text" />
        </div>
        <div>
          <button className="btn btn-primary mt-3" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
