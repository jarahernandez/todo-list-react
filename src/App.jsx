import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { DisplayTodoList } from "./components/DisplayTodoList";

export const App = () => {
  const [tasksList, setTasksList] = useState([]);

  return (
    <>
      <TodoForm tasksList={tasksList} setTasksList={setTasksList} />
      <div className="d-flex flex-wrap justify-content-evenly p-5 w-50">
        {tasksList.map(({ id, ...task }) => (
          <DisplayTodoList task={task} key={id} />
        ))}
      </div>
    </>
  );
};
