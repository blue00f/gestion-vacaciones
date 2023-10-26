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
  const [isAdmin, setIsAdmin] = useState(false)
  const [usernameProp, setUsernameProp] = useState (false)
  
  const logOut = () => {
    setIsLoggedIn(false)
    window.location.reload();
  }
  return (
    <>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} usernameProp={usernameProp} logOut={logOut}/>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin} usernameProp={usernameProp} setUsernameProp={setUsernameProp}/>} />
        <Route exact path="/register" element={<Register />} />
    
        {isLoggedIn ? (
          isAdmin?(
            <>
            <Route exact path="/calendar" element={<Calendar isLoggedIn={isLoggedIn} />} />
            <Route exact path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn}  />} />
            <Route exact path="/FormEmployee" element={<FormEmployee isLoggedIn={isLoggedIn}  />} />
                 
              </>
          ):
            <Route exact path="/calendar" element={<Calendar isLoggedIn={isLoggedIn} />} />
          
          
        ) : (
          null
        )}


      </Routes>
    </>
  )
}

export default App
