import { TrashIcon } from "../components/Icons";
import "../components/Task.css";
import { Filter } from "./Filter";

function TaskItem({ task, handleDelete, handleCheckChange }) {
  return (
    <div id="checklist">
      <li key={task.id} className="task">
        <div className="task-title">
          <input
            value={task.id}
            id={task.id}
            type="checkbox"
            onChange={() => handleCheckChange(task.id)}
            checked={task.completed}
          />
          <label htmlFor={task.id}>{task.title}</label>
        </div>
        
        <button onClick={() => handleDelete(task.id)} className="btn-trash">
          <TrashIcon />
        </button>
      </li>
    </div>
  );
}

export function TaskContainer({
  todos,
  handleDelete,
  handleSelectChange,
  selectedOption,
  handleCheckChange,
}) {
  const filteredTask = todos.filter((task) => {
    if (selectedOption === "completed") {
      return task.completed;
    } else if (selectedOption === "incomplete") {
      return !task.completed;
    }
    return true;
  });

  return (
    <>
      <Filter
        handleSelectChange={handleSelectChange}
        selectedOption={selectedOption}
      />
      <section className="tasks">
        <ul>
          {filteredTask.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleCheckChange={handleCheckChange}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
