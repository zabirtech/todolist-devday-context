import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const handleDeleteCheckAll = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(newTodos);
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h2>Congratulations! nothing left todo!</h2>
      ) : (
        <div className="row">
          <label htmlFor="">
            <input
              type="checkbox"
              id="all"
              name="all"
              onClick={handleCheckAll}
              checked={checkAll}
            />
            ALL
          </label>
          <p>You have {todos.length} tasks left</p>
          <button id="delete" onClick={handleDeleteCheckAll}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}
