import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const EditTask = ({ match }) => {
  const [tiles, setTiles] = useState([]);
  const [task, setTask] = useState({
    "title": "",
    "order": "",
    "description": "",
    "type_task": "",
    "tile": ""
});
  const history = useHistory();

  useEffect(() => {
    fetchTiles();
    fetchTask();
  }, [match.params.taskId]);

  const fetchTiles = () => {
    fetch("/api/tiles/")
      .then((res) => res.json())
      .then((data) => {
        setTiles(data);
      });
  };

  const fetchTask = () => {
    fetch(`/api/tasks/${match.params.taskId}/`)
      .then((response) => response.json())
      .then((data) => {
        setTask(data);
      });
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/tasks/${match.params.taskId}/`, {
      method: "PATCH",
      body: JSON.stringify(task),
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

  let { title, description, type_task, tile } = task;

  return (
    <div className="mt-5 w-50 mx-auto">
      <h2 className="mb-4 heading">Edit Task</h2>
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
            placeholder={title}
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
            placeholder={description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type_task">Select type of task</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="type_task"
            id="type_task"
            value={type_task}
          >
            {["Survey", "Discussion", "Diary"].map((type_t) => (
              <option key={type_t}>{type_t}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tile">Select the tile</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="tile"
            id="tile"
            value={tile}
          >
            {tiles.map((tile_s) => (
              <option key={tile_s.id} value={tile_s.id}>{tile_s.tile_name}</option>
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

export default EditTask;
