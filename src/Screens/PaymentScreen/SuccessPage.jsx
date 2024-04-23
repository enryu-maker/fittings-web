import React from 'react';
import { IMAGE } from '../../Assets/Image';
import { useDispatch } from 'react-redux';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function SuccessPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
      <div className='py-14 px-16  font-Raleway'>
        <div className='flex flex-col justify-between py-10 items-center mt-[50px]'>
          <h1 className='text-3xl  text-gray-800 py-2 tracking-widest'>
            Success
          </h1>
          <img
            className='w-[200px] h-[200px]'
            resizeMode="contain"
            src={IMAGE.order} />
          <p
            className={` font-Raleway capitalize font-semibold  text-center tracking-[4px] text-black`}
          >
            THANK YOU
          </p>
          <p
            className={` text-lg font-Raleway capitalize  w-[75%] text-center tracking-[4px] text-black`}
          >
            Your Order Have Been Placed
          </p>
          <button
            className='bg-[#df633a] justify-center items-center mt-5'
            onClick={() => {
              localStorage.removeItem("cart")
              dispatch({
                type: 'EMPTY_CART',
                payload: []
              })
              navigate('/')
            }}
          >
            <p
              className={` text-xl uppercase font-medium text-white tracking-widest font-Raleway px-10 py-2 `}
            >
              Go Home
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
