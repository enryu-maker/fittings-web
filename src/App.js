import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Cart } from './Screen/Cart/Cart'
import { useSelector } from 'react-redux'

export default function App() {
  const cartOpen = useSelector(state => state.Reducers.cartOpen)
  return (
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

        <Footer />
      </div>
    </>

  )
}
