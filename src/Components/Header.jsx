import React from 'react';
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineMobile,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OpenCartAction } from '../Store/actions';
import { motion } from 'framer-motion';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [IsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const cartOpen = useSelector((state) => state.Reducers.cartOpen);
  const category = useSelector((state) => state.Reducers.cateogry);
  const access = useSelector((state) => state.Reducers.access);
  const cart = useSelector((state) => state.Reducers.cart);
  const [data, setData] = React.useState({});
  const [sub, setSub] = React.useState({});
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full fixed bg-white top-0 z-50 transition-all font-Raleway lg:h-[120px] lg:flex lg:justify-between lg:items-center flex-col '>
        {/* Small header */}
        <div className='w-full lg:w-[95%] py-5 flex md:justify-evenly justify-between items-center'>
          <div className='md:w-[40%] py-2' />
          <a
            href='#/'
            className=' w-[20%]  flex justify-center items-center  md:text-2xl tracking-widest'>
            fittings <span className='text-[#df633a]'>Wale</span>
          </a>

          <div className=' w-[40%] flex items-center justify-center gap-5'>
            <div className=' hidden md:flex py-1 space-x-2 items-center pl-2 rounded-lg  '>
              <AiOutlineSearch size={25} />
            </div>
            <div className=' md:flex items-center justify-center gap-5 hidden '>
              {access != null ? (
                <a href='#/myaccount'>
                  <AiOutlineUser size={25} />
                </a>
              ) : (
                <a href='#/login'>
                  <AiOutlineUser size={25} />
                </a>
              )}
              <a href='#/mobile'>
                <AiOutlineMobile size={25} />
              </a>
              <div className=' cursor-pointer'>
                <p className=' font-Raleway text-[8px] px-[5px] py-[2px] flex justify-center items-center rounded-full h-[12px] w-[12px] text-white bg-[#df633a]'>
                  {cart?.length}
                </p>
                <AiOutlineShoppingCart
                  size={25}
                  onClick={() => {
                    dispatch(OpenCartAction(!cartOpen));
                  }}
                />
              </div>
            </div>
          </div>
          <div className='cursor-pointer mr-5 md:hidden'>
            <p className=' font-Raleway text-[8px] px-[5px] py-[2px] flex justify-center items-center rounded-full h-[12px] w-[12px] text-white bg-[#df633a]'>
              {cart?.length}
            </p>
            <AiOutlineShoppingCart
              size={25}
              onClick={() => {
                dispatch(OpenCartAction(!cartOpen));
              }}
            />
          </div>
        </div>
        <div className='w-[92%]  py-2 md:flex justify-between items-center hidden'>
          {category?.map((item, index) => {
            if (item?.status === 'Activate') {
              return (
                <button
                  key={index}
                  onMouseEnter={() => {
                    setOpen(true);
                    setData(item);
                  }}
                  className=' uppercase text-xs hover:underline underline-offset-4 '>
                  {item?.main_category_name}
                </button>
              );
            }
          })}
        </div>
        {open ? (
          <div
            onMouseEnter={() => {
              setOpen(true);
            }}
            onMouseLeave={() => {
              setOpen(false);
              setData({});
              setSub([]);
            }}
            className='md:h-[400px] border-t-2 pt-2 w-full bg-white transition-shadow shadow-sm flex flex-col items-center'>
            <p className=' font-Raleway text-xl tracking-widest'>
              {data?.main_category_name}
            </p>
            <div className='flex justify-between flex-col items-center w-[75%]  py-5'>
              <div className='flex  space-x-2'>
                {data?.category?.map((item, index) => {
                  if (item?.status === 'Activate') {
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setOpen(true);
                          setSub(item);
                          setIsOpen(!IsOpen);
                        }}
                        className={`${item?.id === sub?.id
                            ? 'bg-[#df633a] text-white'
                            : 'bg-white'
                          } box-border border-gray-200 border-2 hover:bg-[#df633a] hover:text-white text-black px-4 py-1 `}>
                        <p>{item?.category_name}</p>
                      </button>
                    );
                  }
                })}
              </div>
              <div className='flex  space-x-2 mt-5 items-start '>
                {sub?.sub_category?.map((item, index) => {
                  if (item?.status === 'Activate') {
                    return (
                      <a
                        onClick={() => {
                          navigate('/subcategory/' + item?.id, {
                            state: item,
                          });
                        }}
                        key={index}
                        className=' flex flex-col w-[120px] text-center justify-center hover:text-[#df633a] items-center capitalize text-base '>
                        <img
                          alt='icon'
                          className='h-[100px] rounded-full w-[100px] border-2'
                          src={item?.image}
                        />
                        {item?.sub_category_name}
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className='bg-[#df633a] w-full transition-all py-2 text-xs font-Raleway flex text-white  justify-center items-center'>
            Install our app now to avail FLAT 5% OFF on your first app purchase!
            Use code APP5
          </div>
        )}
      </div>
      {/* // Mobile Menu Here */}
      <div className='md:hidden'>
        {IsOpen && (
          <>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'linear' }}
              className=' flex flex-col justify-between items-center  w-full h-screen mt-10 '>
              {category?.map((item, index) => {
                if (item?.status === 'Activate') {
                  return (
                    <button
                      key={index}
                      onMouseEnter={() => {
                        setOpen(true);
                        setData(item);
                      }}
                      className=' uppercase text-xs hover:underline underline-offset-4  '>
                      {item?.main_category_name}
                    </button>
                  );
                }
              })}
            </motion.div>
            <div className=' flex  items-center justify-between  mt-20 px-10 '>
              {access != null ? (
                <a
                  href='#/myaccount'
                  onClick={() => {
                    setIsOpen(!IsOpen);
                  }}>
                  <AiOutlineUser size={25} />
                </a>
              ) : (
                <a
                  href='#/login'
                  onClick={() => {
                    setIsOpen(!IsOpen);
                  }}>
                  <AiOutlineUser size={25} />
                </a>
              )}
              <a
                href='#/mobile'
                onClick={() => {
                  setIsOpen(!IsOpen);
                }}>
                <AiOutlineMobile size={25} />
              </a>
              <div className=' cursor-pointer'>
                <p className=' font-Raleway text-[8px] px-[5px] py-[2px] flex justify-center items-center rounded-full h-[12px] w-[12px] text-white bg-[#df633a]'>
                  {cart?.length}
                </p>
                <AiOutlineShoppingCart
                  size={25}
                  onClick={() => {
                    dispatch(OpenCartAction(!cartOpen));
                    setIsOpen(!IsOpen);
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
    //     {/* Menu */}
    //     <div className="w-full lg:w-[92%] py-2 flex justify-between items-center">
    //         {data?.map((item, index) => (
    //             <button
    //                 key={index}
    //                 onMouseEnter={() => setOpen(true)}
    //                 onMouseLeave={() => setOpen(false)}
    //                 className="uppercase text-xs hover:underline underline-offset-4"
    //                 onClick={() => navigate(`/category/${item.id}`)}
    //             >
    //                 {item?.value}
    //             </button>
    //         ))}
    //     </div>
    //     {/* Dropdown */}
    //     {open ? (
    //         <div className="h-[400px] w-full bg-white transition-shadow shadow-sm flex justify-center items-center">
    //             <p>hello World</p>
    //         </div>
    //     ) : (
    //         <div className="bg-black w-full transition-all py-2 text-xs font-Raleway flex text-white justify-center items-center">
    //             Install our app now to avail FLAT 5% OFF on your first app purchase! Use code APP5
    //         </div>
    //     )}
    // </div>
  );
}
