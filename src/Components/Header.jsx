import React from 'react'
import { AiOutlineSearch, AiOutlineUser, AiOutlineMobile, AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OpenCartAction } from '../Store/actions';
export default function Header() {
    const data = [
        { "id": 1, "value": "Screw & Nail" },
        { "id": 2, "value": "Door & Window Fittings" },
        { "id": 3, "value": "Adhesive & Masking Tape" },
        { "id": 4, "value": "Kitchen Fittings" },
        { "id": 5, "value": "Glass Fittings" },
        { "id": 6, "value": "Shelf Support" },
        { "id": 7, "value": "Hardware Accessories" },
        { "id": 8, "value": "Magnet Mesh Curtain" },
        { "id": 9, "value": "Bath Fittings" }
    ]
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const cartOpen = useSelector(state => state.Reducers.cartOpen)

    return (
        <>
            <div className='w-full fixed bg-white top-0 z-50  transition-all hover:border-b-2 font-Raleway h-[120px] lg:flex justify-between items-center flex-col'>
                {/* small header */}
                <div
                    className='w-[95%] py-5 flex justify-evenly items-center'
                >
                    <div
                        className=' w-[40%] py-2'
                    />
                    <div
                        className=' w-[20%] flex justify-center items-center text-2xl font-extrabold tracking-wider'
                    >
                        Fittings Wale
                    </div>
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
                        <a href='/login'>
                            <AiOutlineUser size={25} />
                        </a>
                        <a href='/mobile'>
                            <AiOutlineMobile size={25} />
                        </a>
                        <AiOutlineShoppingCart size={25} onClick={() => {
                            dispatch(OpenCartAction(!cartOpen))
                        }}/>
                    </div>
                </div>
                <div
                    className='w-[92%] py-2 flex justify-between items-center'
                >
                    {
                        data?.map((item, index) => (
                            <button
                                key={index}
                                onMouseEnter={() => setOpen(true)}
                                onMouseLeave={() => setOpen(false)}
                                className=' uppercase text-xs hover:underline underline-offset-4 '
                            >
                                {item?.value}
                            </button>
                        ))
                    }
                </div>
                {
                    open ?
                        <div
                            className='h-[400px] w-full bg-white transition-shadow shadow-sm flex justify-center items-center'
                        >
                            <p>
                                hello World
                            </p>
                        </div>
                        :
                        <div
                            className='bg-black w-full transition-all py-2 text-xs font-Raleway flex text-white  justify-center items-center'
                        >
                            Install our app now to avail FLAT 5% OFF on your first app purchase! Use code APP5
                        </div>
                }
            </div>

        </>
    )
}