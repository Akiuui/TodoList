import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import { useState } from 'react'
import "./components/style.css";

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<Form />}></Route>


      </Routes>
    </>
  )
}

export default App
