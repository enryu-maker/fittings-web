import React from 'react';
import { AiOutlineSearch, AiOutlineUser, AiOutlineMobile, AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OpenCartAction } from '../Store/actions';

export default function Header() {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const cartOpen = useSelector(state => state.Reducers.cartOpen)
    const cateogry = useSelector(state => state.Reducers.cateogry);
    const access = useSelector(state => state.Reducers.access);
    const cart = useSelector(state => state.Reducers.cart);
    const [data, setData] = React.useState({})
    const [sub, setSub] = React.useState({})
    const navigate = useNavigate();

    return (
        <div className="w-full fixed bg-white top-0 z-50 transition-all font-Raleway lg:h-[120px] lg:flex lg:justify-between lg:items-center flex-col">
            {/* Small header */}
            <div className="w-full lg:w-[95%] py-5 flex justify-evenly items-center">
                <div className="w-[40%] py-2" />


                <a
                    href='#/'
                    className=' w-[20%] flex justify-center items-center text-2xl tracking-widest'
                >
                    Fittings Wale
                </a>
                <div
                    className=' w-[40%] flex items-center space-x-6'
                >
                    <div
                        className=' border-2 py-1 space-x-2 items-center pl-2 rounded-lg w-[300px] flex'
                    >
                        <AiOutlineSearch size={25} />
                        <input
                            type="text"
                            className='outline-none w-full text-xs'
                            placeholder="Search..."
                        />
                    </div>
                    {
                        access != null ?
                            <a href='#/myaccount'>
                                <AiOutlineUser size={25} />
                            </a>
                            :
                            <a href='#/login'>
                                <AiOutlineUser size={25} />
                            </a>
                    }
                    <a href='#/mobile'>
                        <AiOutlineMobile size={25} />
                    </a>
                    <div>
                        <p
                            className=' font-Raleway text-[8px] px-[5px] py-[2px] flex justify-center items-center rounded-full h-[12px] w-[12px] text-white bg-[#df633a]'
                        >
                            {cart?.length}
                        </p>
                        <AiOutlineShoppingCart size={25} onClick={() => {
                            dispatch(OpenCartAction(!cartOpen))
                        }} />
                    </div>

                </div>
            </div>
            <div
                className='w-[92%]  py-2 flex justify-between items-center'
            >
                {
                    cateogry?.map((item, index) => {
                        if (item?.status === "Activate") {
                            return (
                                <button
                                    key={index}
                                    onMouseEnter={() => {
                                        setOpen(true)
                                        setData(item)
                                    }}
                                    // onMouseLeave={() => {
                                    //     // setOpen(false)
                                    //     // setData([])
                                    // }}
                                    className=' uppercase text-xs hover:underline underline-offset-4 '
                                >
                                    {item?.main_category_name}
                                </button>
                            )
                        }
                    }
                    )
                }
            </div>
            {
                open ?
                    <div
                        onMouseEnter={() => {
                            setOpen(true)
                        }}
                        onMouseLeave={() => {
                            setOpen(false)
                            setData({})
                            setSub([])
                        }}
                        className='h-[400px] border-t-2 pt-2 w-full bg-white transition-shadow shadow-sm flex flex-col items-center'
                    >
                        <p
                            className=' font-Raleway text-xl tracking-widest'
                        >
                            {data?.main_category_name}
                        </p>
                        <div className='flex justify-between  items-start w-[68%] mt-2 py-5'>
                            <div className='flex flex-col'>
                                <p
                                    className=' font-Raleway text-lg tracking-widest'
                                >
                                    Category
                                </p>
                                {
                                    data?.category?.map((item, index) => (
                                        <p
                                            onMouseEnter={() => {
                                                setOpen(true)
                                                setSub(item)
                                            }}
                                            className=' font-Raleway text-sm capitalize cursor-pointer'
                                        >
                                            {item?.category_name}
                                        </p>
                                    ))
                                }
                            </div>
                            <div className='flex flex-col '>
                                <p
                                    className=' font-Raleway text-lg tracking-widest'
                                >
                                    Sub Category
                                </p>
                                {
                                    sub?.sub_category?.map((item, index) => (
                                        <button
                                            onClick={() => {
                                                navigate(`/subcategory/${item?.id}`, {
                                                    state: item
                                                })
                                            }}
                                            className=' font-Raleway text-sm capitalize text-left space-y-2'
                                        >
                                            {item?.sub_category_name}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    :
                    <div
                        className='bg-[#df633a] w-full transition-all py-2 text-xs font-Raleway flex text-white  justify-center items-center'
                    >
                        Install our app now to avail FLAT 5% OFF on your first app purchase! Use code APP5
                    </div>
            }
        </div>
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
