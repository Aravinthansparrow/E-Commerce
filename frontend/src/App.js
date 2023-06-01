import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {LoginPage,SignUpPage,HomePage,ActivationPage,ProductsPage,BestSellingPage,EventsPage, FAQPage,OrderSuccessPage,ProductDetailsPage,CheckoutPage,PaymentPage} from './Routes.js';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Store from "./redux/store"
import { loadUser } from './redux/actions/user';


const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser())

  }, []);
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/sign-up' element={<SignUpPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/product/:name' element={<ProductDetailsPage/>}/>
      <Route path='/best-selling' element={<BestSellingPage/>}/>
      <Route path='/events' element={<EventsPage/>}/>
      <Route path='/FAQ' element={<FAQPage/>}/>
        <Route path='/activation/:activation_token' element={<ActivationPage />} />
      <Route path='/checkout' elements={<CheckoutPage/>}/>
      <Route path='/order/success/:id' element={<OrderSuccessPage/>}/>
      <Route path='/payment' element={<PaymentPage/>}/>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  )
}

export default App