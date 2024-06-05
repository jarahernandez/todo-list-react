import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { DisplayTodoList } from "./components/DisplayTodoList";

export const App = () => {
  const [tasksList, setTasksList] = useState([]);

  return (
    <div className="d-flex flex-column align-items-center bg-black bg-gradient text-white mh-100">
      <TodoForm tasksList={tasksList} setTasksList={setTasksList} />
      <DisplayTodoList tasksList={tasksList} setTasksList={setTasksList} />
    </div>
  );
};
