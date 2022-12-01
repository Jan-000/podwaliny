import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
import Ridetail from './Ridetail'
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"

import Home from "./pages/Home"
import Search from "./pages/Search"

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
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

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
<Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />

          
        </Routes>
      </div>


      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input placeholder="from" ref={todoNameRef} type="text" />
      <br />
      <input placeholder="to" ref={todoNameRef2} type="text" />
      <br />

      <button onClick={handleAddTodo}>Add Ride</button>
      <button onClick={handleClearTodos}>Clear Edit Complete</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      <Ridetail />
    </>
  )
}

export default App;
