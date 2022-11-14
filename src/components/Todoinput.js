import React from "react";
import { addtodo } from "../redux/action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Todoinput() {
  const todos = useSelector((state) => state);
  let [title, setTitle] = useState();
  let dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(
      addtodo({
        id: todos.length + 1,
        title: title,
      })
    );
    setTitle("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="rows">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <button onClick={addTodoHandler}>Add</button>
      </div>
    </div>
  );
}

export default Todoinput;
