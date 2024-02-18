import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Cart } from './Screens/Cart/Cart'
import { useSelector } from 'react-redux'
import Login from './Screens/AuthScreen/Login';
import { Routes, Route } from "react-router-dom";
import Registration from './Screens/AuthScreen/Registration';
import Home from './Screens/Common/Home'
import OTPForm from './Screens/AuthScreen/Otp'
import Products from './Screens/ProductScreen/Products'

export default function App() {
  const cartOpen = useSelector(state => state.Reducers.cartOpen)
  return (
    <>
      {
        cartOpen ?
          <Cart />
          : null
      }
      <div className='h-full w-full'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/otp" element={<OTPForm />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
