import Navbar from "./Navbar"

import Home from "./pages/Home"
import Search from "./pages/Search"
import Todo from "./pages/Todo"
import Ridetail from "./pages/Ridetail"


import React from 'react';

import { Route, Routes } from "react-router-dom"




function App() {
  

  return (
    <>
<Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />

          <Route path="/ridetail" element={<Ridetail />} />

          
        </Routes>
      </div>


    <p>marker</p>


    </>
  )
}

export default App;
