import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Cart } from './Screens/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Screens/AuthScreen/Login';
import Cards from './Screens/Common/Cards';
import Category from './Screens/Common/Category';
import { Routes, Route } from 'react-router-dom';
import Registration from './Screens/AuthScreen/Registration';
import OTPForm from './Screens/AuthScreen/Otp';
import Products from './Screens/ProductScreen/Products';
import Sub from './Screens/ProductScreen/Sub';
import Details from './Screens/ProductScreen/Details';
import Privacypage from './Components/Privacypage';
import Terms from './Components/Terms';
import Refund from './Components/Refund';
import Mobile from './Screens/Constants/Mobile';
import MyAccount from './Screens/Constants/MyAccount';
import CartCheckout from './Screens/Cart/Cartcheckout';
import { GetBanner, GetBest, GetCateogry, GetSpotlight, Init } from './Store/actions';
import Complete from './Screens/Common/Complete';
import ScrollToTop from './Components/ScrollTo';
import SuccessPage from './Screens/PaymentScreen/SuccessPage';
import PaymentPage from './Screens/PaymentScreen/PaymentPage';
import HomePage from './Screens/Home/HomePage';
import MenuIcons from './Components/MenuIcons';
import Search from './Screens/SearchScreen/Search';

export default function App() {
  const cartOpen = useSelector((state) => state.Reducers.cartOpen);
  const access = useSelector((state) => state.Reducers.access);
  const profile_complete = useSelector((state) => state.Reducers.profile_complete);
  console.log(profile_complete)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Init());
    dispatch(GetCateogry());
    dispatch(GetBanner());
    dispatch(GetSpotlight());
    dispatch(GetBest());

  }, [dispatch]);
  return (
    <>
      {cartOpen ? <Cart /> : null}
      <div className='h-full w-full'>
        <ScrollToTop />
        <Header />
        <div className=' md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 '>
          <MenuIcons />
        </div>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Registration />}
          />
          <Route
            path='/category'
            element={<Products />}
          />
          <Route
            path='/cards'
            element={<Cards />}
          />
          <Route
            path='/otp'
            element={<OTPForm />}
          />
          <Route
            path='/search'
            element={<Search />}
          />
          <Route
            path='/products'
            element={<Sub />}
          />
          <Route
            path='/details'
            element={<Details />}
          />
          <Route
            path='/privacypage'
            element={<Privacypage />}
          />
          <Route
            path='/terms'
            element={<Terms />}
          />
          <Route
            path='/refund'
            element={<Refund />}
          />
          <Route
            path='/mobile'
            element={<Mobile />}
          />
          <Route
            path='/myaccount'
            element={access != null ? profile_complete? <MyAccount /> : <Complete/> : <Login />}
          />
          <Route
            path='/cartcheckout'
            element={access != null ? profile_complete?  <CartCheckout /> : <Complete/> : <Login />}
          />
          <Route
            path='/payment'
            element={access != null ? profile_complete?  <PaymentPage /> : <Complete/> : <Login />}
          />
          <Route
            path='/complete'
            element={access != null ? <Complete /> : <Login />}
          />
          <Route
            path='/cards'
            element={<Cards />}
          />
          <Route
            path='/subcategory/:id'
            element={<Sub />}
          />
          <Route
            path='/details/:id'
            element={<Details />}
          />
          <Route
            path='/success'
            element={<SuccessPage />}
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
