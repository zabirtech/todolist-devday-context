import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "./DataProvider";

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const todoInputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName }]);
    setTodoName("");
    todoInputRef.current.focus();
  };

  useEffect(() => {
    todoInputRef.current.focus();
  }, []);
  return (
    <form autoComplete="off" onSubmit={handleAddTodo}>
      <input
        ref={todoInputRef}
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="Add a task"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value.toLowerCase())}
      />
      <button type="submit">Add</button>
    </form>
  );
}
