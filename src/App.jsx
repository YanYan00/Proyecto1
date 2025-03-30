import { useState } from 'react'
import {Route , Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './views/Home/Home.jsx'
import Information from './views/Information/Information.jsx'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/informacion' element={<Information></Information>}></Route>
      </Routes>
    </>
  )
}

export default App
