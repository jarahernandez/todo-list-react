export const DisplayTodoList = ({ task }) => {
  const { title, description, isDone } = task;

  return (
    <div className="card m-3" style={{ width: 200 }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="d-flex justify-content-around mb-3">
        <button type="button" class="btn btn-outline-success">
          Done
        </button>
        <button type="button" class="btn btn-outline-danger">
          Delete
        </button>
      </div>
    </div>
  );
};
