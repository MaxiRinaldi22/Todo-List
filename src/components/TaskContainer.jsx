import { useState } from "react";
import { TrashIcon } from "../components/Icons";

function TaskItem({ task, index, handleDelete }) {
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handelChange = () => {
    setCheckboxValue(!checkboxValue);
  };

  return (
    <li key={index} className="task">
      <div className="task-title">
        <input type="checkbox" value={checkboxValue} onChange={handelChange} />
        <p
          style={
            checkboxValue
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {task}
        </p>
      </div>
      <button onClick={() => handleDelete(index)} className="btn-trash">
        <TrashIcon />
      </button>
    </li>
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
