import { AddInput } from "../components/AddInput";
import { TaskContainer } from "../components/TaskContainer";
import { useState } from "react";
import { RemoveBtns } from "./RemoveBtns";

export function TodosWrapper() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("all");
  const [editingTasId, setEditingTasId] = useState(null);
  const [newTitle, setNewtitle] = useState("");

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

  const handleTitleChange = (e) => {
    setNewtitle(e.target.value);
  };

  const starEditing = (id, currentTitle) => {
    setEditingTasId(id);
    setNewtitle(currentTitle);
  };

  const saveTask = (id, completed) => {
    setTodos((prevTask) =>
      prevTask.map((task) =>
        task.id === id
          ? { ...task, title: newTitle, completed: completed }
          : task
      )
    );
    setEditingTasId(null);
    setNewtitle("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const handleRemoveDoneTasks = () => {
    setTodos(todos.filter((task) => task.completed === false));
    setValue("");
  };

  const handleRemoveAllTasks = () => {
    setTodos([]);
    setValue("");
  };

  return (
    <>
      <AddInput
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        value={value}
      />

      <TaskContainer
        taskProps={{
          todos,
          handleDelete,
          handleCheckChange,
        }}
        selectionProps={{
          selectedOption,
          handleSelectChange,
        }}
        editingProps={{
          editingTasId,
          newTitle,
          saveTask,
          starEditing,
          handleTitleChange,
        }}
      />

      <RemoveBtns
        selectedOption={selectedOption}
        handleRemoveDoneTasks={handleRemoveDoneTasks}
        handleRemoveAllTasks={handleRemoveAllTasks}
      />
    </>
  );
}
