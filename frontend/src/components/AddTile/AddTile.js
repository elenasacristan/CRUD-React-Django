import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddTile = () => {
  const [newTile, setNewTile] = useState({
    tile_name: "",
    launch_date: "",
    status: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    setNewTile({ ...newTile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/tiles/", {
      method: "POST",
      body: JSON.stringify(newTile),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    history.push("/");
  };

  let { tile_name, launch_date } = newTile;

  return (
    <div className="mt-5 w-50 mx-auto">
      <h2 className="mb-4 heading">Add Tile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tile_name">Name</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="tile_name"
            name="tile_name"
            value={tile_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="launch_date">Launch Date</label>
          <input
            onChange={handleChange}
            type="date"
            className="form-control"
            id="launch_date"
            name="launch_date"
            value={launch_date}
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Select the status</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="status"
            id="status"
            defaultValue="default"
          >
            <option value="default">-- Select one --</option>
            {["Live", "Pending", "Archived"].map((status_t) => (
              <option key={status_t}>{status_t}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTile;
