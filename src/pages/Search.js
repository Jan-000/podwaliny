import React, { useRef } from 'react';



export default function Search() {

  const todoNameRef = useRef()
  const todoNameRef2 = useRef()


    return (
    <>
    <h1>Search ride</h1>
    
     <input placeholder="from"
      ref={todoNameRef}
     type="text" />

      <input placeholder="to"
       ref={todoNameRef2}
      type="text" />
      <br />

      <button
       
      >Find</button>
      </>
      
      
      )
  }
  