import { TrashIcon } from "../components/Icons";
import "../components/Task.css";

function TaskItem({ task, index, handleDelete }) {
  return (
    <div id="checklist">
      <li key={index} className="task">
        <div className="task-title">
          <input value={index} id={index} type="checkbox" />
          <label htmlFor={index}>{task}</label>
        </div>
        <button onClick={() => handleDelete(index)} className="btn-trash">
          <TrashIcon />
        </button>
      </li>
    </div>
  );
}

export function TaskContainer({ todos, handleDelete }) {
  return (
    <section className="tasks">
      <ul>
        {todos.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
}
