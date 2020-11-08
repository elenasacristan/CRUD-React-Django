import React from "react";
import { Link } from "react-router-dom";
import "./Tile.css";
import TasksSlides from "../TaskSlides/TasksSlides";


const Tile = ({ tile, deleteTile }) => {
  return (
    <div className="card tile mx-auto m-4">
      <div className="header-tile d-flex justify-content-between card-header">
        <h4>{tile.tile_name}</h4>
        <div>
          <Link className="btn-tile btn btn-info" to={`/tile/edit/${tile.id}`}>
            <i className="icon-tile fa fa-pencil" aria-hidden="true"></i>
          </Link>
          <button
            className="btn-tile btn btn-danger"
            onClick={() => deleteTile(tile.id)}
          >
            <i className="icon-tile fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="card-body tile-body">
        <TasksSlides tile={tile} />
      </div>

      <div className="card-footer d-flex justify-content-between">
        <p>{tile.launch_date}</p>
        <Link className="btn btn-warning" to="/task/add/">
          Add task
        </Link>
        <p>{tile.status}</p>
      </div>
    </div>
  );
};

export default Tile;
