import { useState } from "react";

export const Task = ({ task, id, handleDelete }) => {
  const { title, description } = task;

  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone((prevIsDone) => !prevIsDone);
  };

  return (
    <div
      className={
        isDone
          ? "card m-3 w-25 bg-success bg-gradient border"
          : "card m-3 w-25 bg-black bg-gradient text-white border"
      }
    >
      <div
        className={
          isDone ? "card-body text-decoration-line-through" : "card-body"
        }
      >
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="d-flex flex-wrap justify-content-around mb-3">
        {isDone ? (
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={handleClick}
          >
            Undo
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleClick}
          >
            Done
          </button>
        )}
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
