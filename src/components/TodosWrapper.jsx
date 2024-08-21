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
    if (value.trim() && todos.length <= 9) {
      setTodos([...todos, value.trim()]);
      setValue("");
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // const handleRemoveAll = () => {
  //   setTodos([])
  // }

  return (
    <>
      <AddInput
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        value={value}
      />

      <TaskContainer todos={todos} handleDelete={handleDelete} />

      {/*<button onClick={handleRemoveAll}>Remove all</button>*/}
    </>
  );
}
