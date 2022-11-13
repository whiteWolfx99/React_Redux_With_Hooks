import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

function TodoList() {
  const todos = useSelector((state) => state);
  return (
    <div>
     <div className="row">
      {todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
     </div>
    </div>
  )
}

export default TodoList