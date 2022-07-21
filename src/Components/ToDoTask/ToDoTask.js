import React from "react";
import "./ToDoTask.css";
import { useState } from "react";

export default function ToDoTask({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.task);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClick() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="taskUpdate" onSubmit={handleSubmit}>
        <input
          type="text"
          className="taskInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button-act" onClick={handleClick}>
          Actualizar
        </button>
      </form>
    );
  }

  function TaskElement() {
    return (
      <div className="task">
        <p>{item.task}</p>
        <div>
          <button onClick={() => setIsEdit(true)}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
            </svg>
          </button>
          <button onClick={(e) => onDelete(item.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  return <div>{isEdit ? <FormEdit /> : <TaskElement />}</div>;
}
