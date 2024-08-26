import { AddInput } from "../components/AddInput";
import { TaskContainer } from "../components/TaskContainer";
import { useState } from "react";

export function TodosWrapper() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");


  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckChange = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleSubmit = () => {
    if (value.trim() && todos.length <= 10) {
      const newTask = {
        id: Date.now(),
        title: value.trim(),
        completed: false,
      };
      setTodos([...todos, newTask]);
      setValue("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const handleRemoveDoneTasks = () => {
    setTodos(todos.filter((task) => task.completed === false));
  };
  
  const handleRemoveAllTasks = () => {
    setTodos([]);
  };

  return (
    <>
      <AddInput
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        value={value}
      />

      <TaskContainer
        todos={todos}
        handleDelete={handleDelete}
        handleSelectChange={handleSelectChange}
        selectedOption={selectedOption}
        handleCheckChange={handleCheckChange}
      />

      <section className="container-delete">
        <button onClick={handleRemoveDoneTasks}>Delete done tasks</button>
        <button onClick={handleRemoveAllTasks}>Delete all tasks</button>
      </section>
    </>
  );
}
