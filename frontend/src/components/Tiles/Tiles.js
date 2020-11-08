import React, { useState, useEffect } from "react";
import Tile from "../Tile/Tile";

const Tiles = () => {
  const [tiles, setTiles] = useState([]);
  const [status, setStatus] = useState("");

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

  const deleteTile = (id) => {
    fetch(`/api/tiles/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        fetchTiles();
        return res;
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="p-5">
      <div className="d-flex flex-column mt-2 mb-4">
        <h2 className="text-center pb-3 heading">Tiles</h2>
        <div className="d-flex flex-column mx-auto">
            <label htmlFor="status">Select tiles by status:</label>
            <select
              className="form-control"
              onChange={handleChange}
              name="status"
              id="status"
              defaultValue="default"
            >
              <option disabled value="default">
                Choose Status
              </option>
              <option value="Live">Live</option>
              <option value="Pending">Pending</option>
              <option value="Archived">Archived</option>
            </select>
        </div>
      </div>
      <div className="container-tiles d-flex flex-wrap">
        {tiles
          .filter((tile) => tile.status === status)
          .map((tile) => (
           <Tile key={tile.id} tile={tile} deleteTile={deleteTile}/>
          ))}
      </div>
    </div>
  );
};

export default Tiles;
