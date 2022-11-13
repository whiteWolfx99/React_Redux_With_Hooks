import React from "react";
import { useDispatch } from "react-redux";
import { removetodo } from "../redux/action";
import { EDITtodo } from "../redux/action";
import { useState } from "react";

function TodoItem({ todo }) {
  let dispatch = useDispatch();
  const [todos, setTodos] = useState(false);
  const [title, setTitle] = useState(todo.title);

  return (
    <div className="center">
      <div className="makerow">
        <div className="col-1">
            {/* display */}
          <div>#{todo.id}</div>
          <div>
            {todos ? (
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="stylein"
                type="text"
                value={title}
              />
            ) : (
              todo.title
            )}
          </div>
          <div className="button">
            {/* edit button */}
            <button
              onClick={() => {
                dispatch(
                  EDITtodo({
                    ...todo,
                    title: title,
                  })
                );
                setTodos(!todos);
              }}
              className="edit"
            >
              Edit
            </button>
            {/*  delete button */}
            <button
            // onconfirm 
              onClick={() =>dispatch(removetodo(todo.id))}
              className="remove"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
