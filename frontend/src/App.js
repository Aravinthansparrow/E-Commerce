import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login,SignUpPage} from './Routes.js';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/sign-up' element={<SignUpPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App