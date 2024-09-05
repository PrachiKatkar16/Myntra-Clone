import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/men" element={<Men/>} />
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
    </Routes>
    </>
  )
}

export default App
