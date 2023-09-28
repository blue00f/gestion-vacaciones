import { Routes, Route } from "react-router-dom"
import React from "react"
import Header from "./components/Header"
import Login from "./components/Login"
import FormEmployee from "./components/FormEmployee"
import Calendar from "./components/Calendar"
import Dashboard from "./components/Dashboard.jsx"

import "./index.css"
import "flowbite-datepicker"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/formemployee" element={<FormEmployee />} />
      </Routes>
    </>
  )
}

export default App
