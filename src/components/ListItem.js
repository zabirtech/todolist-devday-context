import React, { useState } from "react";

export default function ListItem({ todo, id, checkComplete, handleEditTodos }) {
  const [onEdit, setOnEdit] = useState(false);
  const [editTodoValue, setEditTodoValue] = useState(todo.name);
  const handleOnEdit = () => {
    setOnEdit(true);
  };
  const handleOnSave = (id) => {
    setOnEdit(false);
    if (editTodoValue) {
      handleEditTodos(editTodoValue, id);
    } else {
      setEditTodoValue(todo.name);
    }
  };

  if (onEdit) {
    return (
      <li>
        <input
          type="text"
          id="editTodoValue"
          value={editTodoValue}
          name="editTodoValue"
          onChange={(e) => setEditTodoValue(e.target.value.toLowerCase())}
        />
        <button onClick={() => handleOnSave(id)}>Save</button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => checkComplete(id)}
          />
          {todo.name}
        </label>
        <button disabled={todo.complete} onClick={handleOnEdit}>
          Edit
        </button>
      </li>
    );
  }
}
