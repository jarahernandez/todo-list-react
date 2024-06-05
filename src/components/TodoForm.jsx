import { useState } from "react";

export const TodoForm = ({ tasksList, setTasksList }) => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setTask((prevTask) => ({ ...prevTask, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title === "" || task.description === "") {
      setError(true);
      return;
    }
    let taskID = crypto.randomUUID();
    const newTask = { ...task, id: taskID };
    setTasksList((prevTasksList) => [...prevTasksList, newTask]);
    setTask({
      id: "",
      title: "",
      description: "",
    });
    setError(false);
  };

  return (
    <div className="d-flex flex-column align-items-center ">
      <h1 className="m-4">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="title">
            Title:
          </label>
          <input
            className="form-control bg-black bg-gradient text-white"
            type="text"
            name="title"
            onChange={handleChange}
            value={task.title}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="description">
            Description:
          </label>
          <textarea
            className="form-control bg-black bg-gradient text-white"
            style={{ height: 100, width: 210 }}
            onChange={handleChange}
            name="description"
            value={task.description}
          />
        </div>
        {error && (
          <p className="text-danger m-0">Please fill out all fields.</p>
        )}
        <button type="submit" className="btn btn-outline-primary mt-2 mb-5">
          Add
        </button>
      </form>
    </div>
  );
};
