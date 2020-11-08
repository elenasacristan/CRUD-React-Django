import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const EditTile = ({ match }) => {
  const [tile, setTile] = useState({
    tile_name: "",
    launch_date: "",
    status: "",
  });

  useEffect(() => {
    fetch(`/api/tiles/${match.params.tileId}/`)
      .then((response) => response.json())
      .then((data) => {
        setTile(data);
      });
  }, [match.params.tileId]);

  const history = useHistory();
  const handleChange = (e) => {
    setTile({ ...tile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/tiles/${match.params.tileId}/`, {
      method: "PATCH",
      body: JSON.stringify(tile),
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

  let { tile_name, launch_date, status } = tile;

  return (
    <div className="mt-5 w-50 mx-auto">
      <h2 className="mb-4 heading">Edit Tile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Name</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="tile_name"
            name="tile_name"
            value={tile_name}
            placeholder={tile_name}
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
            placeholder={launch_date}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Select the status</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="status"
            id="status"
            value={status}
          >
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

export default EditTile;
