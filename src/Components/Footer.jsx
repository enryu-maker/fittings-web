import React from 'react';
import { IMAGE } from '../Assets/Image';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaAppStoreIos } from 'react-icons/fa';
export default function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url(${IMAGE.bg})`,
        backgroundRepeat: 'no-repeat',
      }}
      className={`w-full md:h-[500px] h-screen font-Raleway transition-all flex justify-center items-center`}>
      <div className='w-[88%] md:h-[88%]  bg-white py-2 shadow-md flex gap-3 flex-col justify-evenly  items-center'>
        <div className='w-[88%] flex justify-between items-start flex-wrap'>
          <div>
            <h1 className='md:text-3xl text-2xl font-semibold'>
              fittings<span className='text-[#df633a]'>Wale</span>
            </h1>
          </div>
        </div>
        <div className='w-[88%] flex flex-col md:flex-row gap-3 justify-between items-start'>
          <div className='lg:w-[30%] space-y-2'>
            <p className=' uppercase  tracking-widest'>ABOUT Fittingswale</p>
            <p className=' text-sm '>
              Mittal bhawan gol building manaitand dhanbad jharkhand 826001
            </p>
            <p className=' text-sm capitalize'>
              toll free :{' '}
              <a
                className='underline underline-offset-4 hover:no-underline'
                href='tel:+919155511522'>
                +91 9155511522
              </a>
            </p>
            <p className=' text-sm capitalize transition-all'>
              email :{' '}
              <a
                className='underline underline-offset-4 hover:no-underline'
                href='mailto:info@fittingswale.in'>
                info@fittingswale.in
              </a>
            </p>
            <div className='lg:w-[50%] flex space-x-2 py-4'>
              <AiOutlineFacebook size={25} />
              <AiOutlineInstagram size={25} />
              <AiOutlineTwitter size={25} />
              <AiOutlineYoutube size={25} />
            </div>
          </div>

          <div className='flex flex-col space-y-2'>
            <p className=' uppercase '>customer Service</p>
            <a
              //onClick={handleopen}
              href='#/privacypage'
              className=' capitalize '>
              Privacy Policy
            </a>
            <a
              href='#/terms'
              className=' capitalize '>
              Terms & Conditions
            </a>
            <a
              href='#/refund'
              className=' capitalize '>
              Refund & Cancellation Policy
            </a>
          </div>
          <div className=' flex flex-col justify-center items-center gap-3 w-full md:w-auto'>
            <div className='flex gap-1 w-full'>
              <input
                type='text'
                placeholder='Enter your email address'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-gray-300  block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white '
              />
              <button className='bg-orange-900 rounded-full p-2 text-white'>
                Subscribe
              </button>
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <h1 className=' text-2xl'>Download our app</h1>
              <div className='flex justify-around'>
                <a href='#/'>
                  <FaAppStoreIos className='w-10 h-10 text-[#16b0f7]' />
                </a>
                <a href='#/'>
                  <svg
                    viewBox='30 336.7 120.9 129.2'
                    width='30'>
                    <path
                      fill='#FFD400'
                      d='M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z'></path>
                    <path
                      fill='#FF3333'
                      d='M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z'></path>
                    <path
                      fill='#48FF48'
                      d='M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z'></path>
                    <path
                      fill='#3BCCFF'
                      d='M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        )
      </div>
    </div>
  );
}
