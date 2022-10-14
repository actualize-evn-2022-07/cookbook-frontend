export function Signup() {
  return (
    <div id="signup">
      <h1>Signup</h1>
      <form method="POST" action="http://localhost:3000/users.json">
        <div>
          Name: <input name="name" className="form-control" type="text" />
        </div>
        <div>
          Email: <input name="email" className="form-control" type="email" />
        </div>
        <div>
          Password: <input name="password" className="form-control" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" className="form-control" type="password" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
