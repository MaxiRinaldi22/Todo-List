import { TrashIcon, EditIcon, SaveIcon } from "../components/Icons";
import "../components/Task.css";
import { Filter } from "./Filter";

function TaskItem({ taskProps, editingProps }) {
  const { task, handleDelete, handleCheckChange } = taskProps;
  const { editingTasId, newTitle, saveTask, starEditing, handleTitleChange } =
    editingProps;

  return (
    <div id="checklist">
      <li key={task.id} className="task">
        {editingTasId === task.id ? (
          <>
            <div className="task-title">
              <input
                className="edit"
                type="text"
                value={newTitle}
                onChange={handleTitleChange}
              />
            </div>

            <button
              type="submit"
              onClick={() => saveTask(task.id, task.completed)}
              className="btn"
            >
              <SaveIcon />
            </button>
            <button onClick={() => handleDelete(task.id)} className="btn">
              <TrashIcon />
            </button>
          </>
        ) : (
          <>
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

            <button
              onClick={() => starEditing(task.id, task.title)}
              className="btn"
            >
              <EditIcon />
            </button>
            <button onClick={() => handleDelete(task.id)} className="btn">
              <TrashIcon />
            </button>
          </>
        )}
      </li>
    </div>
  );
}

export function TaskContainer({ taskProps, selectionProps, editingProps }) {
  const { todos, handleDelete, handleCheckChange } = taskProps;
  const { selectedOption, handleSelectChange } = selectionProps;
  const { editingTasId, newTitle, saveTask, starEditing, handleTitleChange } =
    editingProps;

  const filteredTask = todos.filter((task) => {
    if (selectedOption === "completed") {
      return task.completed;
    } else if (selectedOption === "incomplete") {
      return !task.completed;
    }
    return true;
  });

  const completedTasks = todos.filter((task) => task.completed);

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
              taskProps={{
                task,
                handleDelete,
                handleCheckChange,
              }}
              editingProps={{
                editingTasId,
                newTitle,
                saveTask,
                starEditing,
                handleTitleChange,
              }}
            />
          ))}
        </ul>

        <div className="count">
          {todos.length === 0 ? (
            <p className="no-tasks-msg">No tasks yet...</p>
          ) : (
            <p className="tasks-msg">
              {completedTasks.length}/{todos.length}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
