import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import Completed from './components/Completed'
import { useState } from 'react'
import "./style.css";

function App() {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Routes>

        <Route path='/' element={<Form showPopup={showPopup} setShowPopup={setShowPopup} />}></Route>
        <Route path='/completed' element={<Completed />}></Route>

      </Routes>
    </>
  )
}

export default App
