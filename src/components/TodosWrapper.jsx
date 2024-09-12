import { AddInput } from "../components/AddInput";
import { TaskContainer } from "../components/TaskContainer";
import { useEffect, useState } from "react";
import { RemoveBtns } from "./RemoveBtns";

export function TodosWrapper() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [titleValue, setTitleValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("all");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTitle, setNewtitle] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setTitleValue(e.target.value);
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
    if (titleValue.trim() && todos.length <= 10) {
      const newTask = {
        id: Date.now(),
        title: titleValue.trim(),
        completed: false,
      };
      setTodos([...todos, newTask]);
      setTitleValue("");
    }
  };

  const handleTitleChange = (e) => {
    setNewtitle(e.target.value);
  };

  const starEditing = (id, currentTitle) => {
    setEditingTaskId(id);
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
    setEditingTaskId(null);
    setNewtitle("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const handleRemoveDoneTasks = () => {
    setTodos(todos.filter((task) => task.completed === false));
    setTitleValue("");
  };

  const handleRemoveAllTasks = () => {
    setTodos([]);
    setTitleValue("");
  };

  return (
    <>
      <AddInput
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        titleValue={titleValue}
        todos={todos}
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
          editingTaskId,
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
