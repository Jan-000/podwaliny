import TodoList from "../TodoList"

import { v4 as uuidv4 } from 'uuid'
import React, { useState, useRef, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function Gib() {
  const [todos, setTodos] = useState([])



  const todoNameRef = useRef()
  const todoNameRef2 = useRef()


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const fromStation = todoNameRef.current.value
    const toStation = todoNameRef2.current.value
    if (fromStation === ''&&toStation === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), fromStation: fromStation, toStation: toStation, complete: false}]
    })
    todoNameRef.current.value = null
    todoNameRef2.current.value = null
  }

    return (
    <>
    <h1>Search ride</h1>
    <TodoList todos={todos}
     toggleTodo={toggleTodo}
    />
     <input placeholder="from"
      ref={todoNameRef}
     type="text" />
      <br />
      <input placeholder="to"
       ref={todoNameRef2}
      type="text" />
      <br />

      <button
       onClick={handleAddTodo}
      >Add Ride</button>
      </>
      
      
      )
  }
  