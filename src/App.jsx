import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Landing from './Landing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Login/>} />
          <Route path='*' element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
