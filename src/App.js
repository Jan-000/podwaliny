import Navbar from "./Navbar"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Create from "./pages/Create"
import TodoList from "./TodoList"
import Ridetail from "./pages/Ridetail"

import React from 'react';
import { Route, Routes } from "react-router-dom"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3U0MEgwsF596F5cqWiqc0wcejIYf1hyg",
  authDomain: "podwaliny.firebaseapp.com",
  projectId: "podwaliny",
  storageBucket: "podwaliny.appspot.com",
  messagingSenderId: "443863444058",
  appId: "1:443863444058:web:18f5eae34442923ed40663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  
  return (
    <>
<Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/ridetail" element={<Ridetail />} />
        </Routes>
      </div>


    <p>marker</p>


    </>
  )
}

export default App;
