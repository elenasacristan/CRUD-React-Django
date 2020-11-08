import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import "./TasksSlides.css";

const TasksSlides = ({ tile }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch("/api/tasks/")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  };

  const deleteTask = (id) => {
    fetch(`/api/tasks/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        fetchTasks();
        return res;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      id={`${tile.id}`}
      className="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      {tasks.filter((task) => task.tile === tile.id).length > 1 && (
        <ol className="carousel-indicators">
          {tasks
            .filter((task) => task.tile === tile.id)
            .map((task, index) => (
              <li
                key={task.id}
                data-target={`#${tile.id}`}
                data-slide-to={`${index}`}
                className={`${index === 0 && "active"}`}
              ></li>
            ))}
        </ol>
      )}

      <div className="carousel-inner">
        {tasks.filter((task) => task.tile === tile.id).length === 0 && (
          <h5 className="text-center m-auto ">This tile is empty</h5>
        )}
        {tasks
          .filter((task) => task.tile === tile.id)
          .map((task, index) => (
            <Task
              key={task.id}
              task={task}
              index={index}
              deleteTask={deleteTask}
              tile={tile}
            />
          ))}
      </div>

      {tasks.filter((task) => task.tile === tile.id).length > 1 && (
        <>
          <a
            className="carousel-control-prev"
            href={`#${tile.id}`}
            role="button"
            data-slide="prev"
          >
            <i className="side fa fa-chevron-left"></i>

            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href={`#${tile.id}`}
            role="button"
            data-slide="next"
          >
            <i className="side fa fa-chevron-right"></i>
            <span className="sr-only">Next</span>
          </a>
        </>
      )}
    </div>
  );
};

export default TasksSlides;
