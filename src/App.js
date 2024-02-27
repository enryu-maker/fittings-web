import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Cart } from './Screens/Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Screens/AuthScreen/Login';
import Home from './Screens/Common/Home';
import Cards from './Screens/Common/Cards';
import Category from './Screens/Common/Category';
import { Routes, Route } from "react-router-dom";
import Registration from './Screens/AuthScreen/Registration';
import OTPForm from './Screens/AuthScreen/Otp'
import Products from './Screens/ProductScreen/Products'
import Sub from './Screens/ProductScreen/Sub'
import Details from './Screens/ProductScreen/Details'
import { GetCateogry } from './Store/actions'

export default function App() {
  const cartOpen = useSelector(state => state.Reducers.cartOpen)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(GetCateogry())
  }, [dispatch])
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
          <Route path="/category" element={<Products />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/otp" element={<OTPForm />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/subcategory/:id" element={<Sub />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}


