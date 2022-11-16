import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Photos from './Components/Photos/Photos'
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Photos />} />
        <Route
      </Routes>

      
    </div>
  )
}
