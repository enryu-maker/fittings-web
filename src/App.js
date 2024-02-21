import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Cart } from './Screens/Cart/Cart'
import { useSelector } from 'react-redux'
import Login from './Screens/AuthScreen/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './Screens/AuthScreen/Registration';
import OTPForm from './Screens/AuthScreen/Otp';
import Products from './Screens/ProductScreen/Products';
import Home from './Screens/AuthScreen/Home';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Cards from './Screens/AuthScreen/Cards';
import Category from './Screens/AuthScreen/Category';
import Sub from './Screens/ProductScreen/Sub';
import Details from './Screens/ProductScreen/Details'
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
          <Route path="/register" element={<Registration/>} />
          <Route path="/Products" element={<Products />} />
          <Route path="/otp" element={<OTPForm />} />
          <Route path="/Category" element={<Category/>} />
          <Route path="/Cards" element={<Cards/>} />
          <Route path="/Sub" element={<Sub/>} />
          <Route path="/Details" element={<Details/>} />

        </Routes>
        <Footer />
      </div>
    </>
  )
}
