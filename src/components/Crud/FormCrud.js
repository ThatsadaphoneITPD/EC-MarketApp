import React from "react";

function FormCrud({ User }) {
  function onSubmit(data) {
    return createUser(data);
  }
  function createUser(data) {
    return User.create(data);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-group col-5">
          <label>Category Title</label>
          <input name="lastName" type="text" className={`form-control`} />
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
        <button className="btn btn-link">Cancel</button>
      </div>
    </form>
  );
}

export default FormCrud;
