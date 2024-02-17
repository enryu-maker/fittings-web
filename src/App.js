<<<<<<< HEAD
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Cart } from './Screen/Cart/Cart'
import { useSelector } from 'react-redux'
=======
import logo from './logo.svg';
import './App.css';
import Login from './Screens/AuthScreen/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './Screens/Registration';
>>>>>>> refs/remotes/origin/main

export default function App() {
  const cartOpen = useSelector(state => state.Reducers.cartOpen)
  return (
<<<<<<< HEAD
    <>
      {
        cartOpen ?
          <Cart />
          : null
      }
      <div
        className='h-full w-full'
      >
        <Header />
=======
    <div>
    <BrowserRouter>
      <Routes>
       <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
>>>>>>> refs/remotes/origin/main

        <Footer />
      </div>
    </>

  )
}
