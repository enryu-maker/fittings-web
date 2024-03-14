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
import Privacypage from './Components/Privacypage'
import Terms from './Components/Terms'
import Refund from './Components/Refund'
import Mobile from './Screens/Constants/Mobile'
import MyAC from './Screens/Constants/MyAc'
import CartCheckout from './Screens/Cart/Cartcheckout'
import Paymentpage from './Screens/Cart/Paymentpage'
import { GetCateogry, Init } from './Store/actions'

export default function App() {
  const cartOpen = useSelector(state => state.Reducers.cartOpen)
  const access = useSelector(state => state.Reducers.access)

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(Init())
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
          <Route path="/products" element={<Sub />} />
          <Route path="/details" element={<Details />} />
          <Route path="/privacypage" element={<Privacypage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/myaccount" element={access != null ? <MyAC /> : <Login />} />
          <Route path="/cartcheckout" element={access != null ? <CartCheckout /> : <Login />} />
          <Route path="/payment" element={access != null ? <Paymentpage /> : <Login />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/subcategory/:id" element={<Sub />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}


