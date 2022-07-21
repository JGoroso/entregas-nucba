import React, { useState } from "react";
import ToDoTask from "../ToDoTask/ToDoTask";
import "./ToDoApp.css";
import { v4 as uuid } from "uuid";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const unique_id = uuid();
    const newTask = {
      id: unique_id,
      task: input,
      completed: false,
    };

    const todos = [...task];
    todos.unshift(newTask);
    setTask(todos);
    setInput("");
  };

  function handleUpdate(id, value) {
    const temp = [...task];
    const item = temp.find((item) => item.id === id);
    item.task = value;
    setTask(temp);
  }
  function handleDelete(id) {
    const temp = task.filter((item) => item.id !== id);
    setTask(temp);
  }

  return (
    <div className="container">
      <img src="../imgs/list.png" alt="listlogo" />
      <h2>Comencemos a registrar tareas aquí</h2>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={input} className="inputForm" />
        <input
          type="submit"
          onClick={handleSubmit}
          value="Crear tarea"
          className="add-btn"
        />
      </form>
      <div className="taskContainer">
        {task.map((item) => (
          <ToDoTask
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
