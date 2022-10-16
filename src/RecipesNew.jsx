import axios from "axios";

export function RecipesNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit new recipe");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/recipes.json", params).then((response) => {
      console.log(response);
      event.target.reset();
    });
  };

  return (
    <div id="recipes-new">
      <h1>New recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" className="form-control" type="text" />
        </div>
        <div>
          Chef: <input name="chef" className="form-control" type="text" />
        </div>
        <div>
          Ingredients: <input name="ingredients" className="form-control" type="text" />
        </div>
        <div>
          Directions: <input name="directions" className="form-control" type="text" />
        </div>
        <div>
          Image url: <input name="image_url" className="form-control" type="text" />
        </div>
        <div>
          Prep time: <input name="prep_time" className="form-control" type="text" />
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
