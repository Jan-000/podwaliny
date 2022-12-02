import React from 'react'
import Todo from './pages/Todo'

export default function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return (
      <><Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
      <p>todolist.js</p>
      </>)
    })
  )
}
