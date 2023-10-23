import { Routes, Route, Navigate } from "react-router-dom"
import {useState} from 'react'
import React from "react"
import Header from "./components/Header"
import Login from "./components/Login"
import FormEmployee from "./components/FormEmployee"
import Calendar from "./components/Calendar"
import Dashboard from "./components/Dashboard.jsx"
import Register from "./components/Register"

import "./index.css"
import "flowbite-datepicker"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/calendar" element={<Calendar isLoggedIn={isLoggedIn} />} />
        <Route exact path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn}  />} />
        <Route exact path="/FormEmployee" element={<FormEmployee isLoggedIn={isLoggedIn}  />} />
        
        {isLoggedIn ? (
          <>
             
             
          </>
        ) : (
          null
        )}


      </Routes>
    </>
  )
}

export default App
