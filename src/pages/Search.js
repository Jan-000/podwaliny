import TodoList from "../TodoList"
import React, { useState } from "react";

export default function Gib() {
  const [todos, setTodos] = useState([])

    return (
    <>
    <h1>Gib</h1>
    <TodoList todos={todos}
    // toggleTodo={toggleTodo}
    />
     <input placeholder="from"
    //  ref={todoNameRef}
     type="text" />
      <br />
      <input placeholder="to"
      // ref={todoNameRef2}
      type="text" />
      <br />

      <button
      // onClick={handleAddTodo}
      >Add Ride</button>
      </>
      
      
      )
  }
  