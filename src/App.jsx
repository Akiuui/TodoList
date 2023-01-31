import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import { useState } from 'react'
import "./components/style.css";

function App() {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Routes>

        <Route path='/' element={<Form showPopup={showPopup} setShowPopup={setShowPopup} />}></Route>


      </Routes>
    </>
  )
}

export default App
