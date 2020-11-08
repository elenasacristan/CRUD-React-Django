import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const AddTask = () => {
  const [tiles, setTiles] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    order: "",
    description: "",
    type_task: "",
    tile: "",
  });

  const history = useHistory();

  useEffect(() => {
    fetchTiles();
  }, []);

  const fetchTiles = () => {
    fetch("/api/tiles/")
      .then((res) => res.json())
      .then((data) => {
        setTiles(data);
      });
  };

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/tasks/", {
      method: "POST",
      body: JSON.stringify(newTask),
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

  let { title, order, description } = newTask;

  return (
    <div className="my-4 w-50 mx-auto">
      <h2 className="mb-4 heading">Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="order">Order</label>
          <input
            onChange={handleChange}
            type="number"
            className="form-control"
            id="order"
            name="order"
            value={order}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type_task">Select the task type</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="type_task"
            id="type_task"
            defaultValue="default"
          >
            <option value="default" disabled>-- Select one --</option>
            {["Survey", "Discussion", "Diary"].map((type_t) => (
              <option key={type_t} value={type_t}>
                {type_t}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tile">Select tile</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="tile"
            id="tile"
            defaultValue="default"
          >
            <option value="default" disabled>-- Select one --</option>
            {tiles.map((tile) => (
              <option key={tile.id} value={tile.id}>
                {tile.tile_name}
              </option>
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

export default AddTask;
