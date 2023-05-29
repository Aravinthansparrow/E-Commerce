import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {LoginPage,SignUpPage,HomePage,ProductsPage,BestSellingPage,EventsPage, FAQPage} from './Routes.js';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/sign-up' element={<SignUpPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/best-selling' element={<BestSellingPage/>}/>
      <Route path='/events' element={<EventsPage/>}/>
      <Route path='/FAQ' element={<FAQPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App