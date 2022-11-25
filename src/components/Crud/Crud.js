import React, { useState, useEffect } from "react";
import FormCrud from "./FormCrud";

let Category = [
  {
    id: 1,
    Title: "Business",
  },
  {
    id: 2,
    Title: "Art",
  },
  {
    id: 3,
    Title: "IT",
  },
];

function Crud() {
  const [categories, setCategories] = useState(Category);

  //   useEffect(() => {
  //     users.getAll().then((x) => setUsers(x));
  //   }, []);

  function deleteUser(id) {
    setCategories(
      categories.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    categories.delete(id).then(() => {
      setCategories((categories) => categories.filter((x) => x.id !== id));
    });
  }

  return (
    <div>
      <FormCrud />
      <h1>Users</h1>
      <button className="btn btn-sm btn-success mb-2">Add User</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>ID</th>
            <th style={{ width: "30%" }}>Title</th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.Title}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <button
                    onClick={() => deleteUser(category.id)}
                    className="btn btn-sm btn-danger btn-delete-user"
                    disabled={category.isDeleting}
                  >
                    {category.isDeleting ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      <span>Delete</span>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          {!categories && (
            <tr>
              <td colSpan="4" className="text-center">
                <div className="spinner-border spinner-border-lg align-center"></div>
              </td>
            </tr>
          )}
          {categories && !categories.length && (
            <tr>
              <td colSpan="4" className="text-center">
                <div className="p-2">No Users To Display</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Crud;
