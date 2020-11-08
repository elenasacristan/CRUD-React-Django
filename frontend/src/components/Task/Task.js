import React from "react";
import { Link } from "react-router-dom";
import "./Task.css";

const Task = ({ task, index, deleteTask, tile }) => {
  return (
    <div
      className={`tasks carousel-item ${index === 0 && "active"}`}
    >
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h5>{task.title}</h5>

          <div>
            <Link className="btn" to={`/task/edit/${task.id}`}>
              <i className="fa fa-pencil"></i>
            </Link>
            <button className="btn" onClick={() => deleteTask(task.id)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>

        <div className="card-body h-100">
          <h6 className="mb-3">Description</h6>
          <p className="card-text">{task.description}</p>
          <hr />
          <div className="task-details d-flex justify-content-between">
            <div>
              <p className="task-details-text mb-1">Order:</p>
              <p>{task.order}</p>
            </div>
            <div>
              <p className="task-details-text mb-1">Type task:</p>
              <p>{task.type_task}</p>
            </div>
            <div>
              <p className="task-details-text mb-1">Tile:</p>
              <p>{tile.tile_name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
