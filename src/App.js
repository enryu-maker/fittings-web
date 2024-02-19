import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Cart } from './Screens/Cart/Cart'
import { useSelector } from 'react-redux'
import Login from './Screens/AuthScreen/Login';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './Screens/Registration';
import Otp from './Screens/AuthScreen/Otp';
import Products from './Screens/ProductScreen/Products';
import Home from './Screens/AuthScreen/Home';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Cards from './Screens/AuthScreen/Cards';
import Category from './Screens/AuthScreen/Category';
function App() {
  return (
    <div>
    <BrowserRouter> 
      <Routes>
      <Route path="/Category" element={<Category/>} />
      <Route path="/Cards" element={<Cards/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/otp" element={<Otp/>} />
       <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
=======
import { Routes, Route } from "react-router-dom";
import Registration from './Screens/AuthScreen/Registration';
import Home from './Screens/Common/Home'
import OTPForm from './Screens/AuthScreen/Otp'
import Products from './Screens/ProductScreen/Products'
>>>>>>> 9e6e65fc58a50fb99929c6c7d7cd9c6867bc0a01

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
