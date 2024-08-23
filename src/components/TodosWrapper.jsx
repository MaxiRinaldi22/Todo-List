import { AddInput } from "../components/AddInput";
import { TaskContainer } from "../components/TaskContainer";
import { useState } from "react";

export function TodosWrapper() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value.trim() && todos.length <= 10) {
      setTodos([...todos, value.trim()]);
      setValue("");
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleRemoveAll = () => {
    setTodos([]);
  };

  return (
    <>
      <AddInput
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        value={value}
      />

      <section className="container-select">
        <select>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="todo">Todo</option>
        </select>
      </section>

      <TaskContainer todos={todos} handleDelete={handleDelete} />

      <section className="container-delete">
        <button>Delete done tasks</button>
        <button onClick={handleRemoveAll}>Delete all tasks</button>
      </section>
    </>
  );
}
