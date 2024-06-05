import { Task } from "./Task";

export const DisplayTodoList = ({ tasksList, setTasksList }) => {
  const handleDelete = (id) => {
    let newTasksList = tasksList.filter((task) => task.id !== id);
    setTasksList(newTasksList);
  };

  return (
    <div className="d-flex flex-wrap justify-content-evenly w-50">
      {tasksList.map(({ id, ...task }) => (
        <Task task={task} id={id} key={id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
