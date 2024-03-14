import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCartAction } from '../../Store/actions'

export default function CartCard({
    item
}) {
    const cart = useSelector(state => state.Reducers.cart)
    const dispatch = useDispatch()
    const [count, setCount] = React.useState(item?.qty)
    return (
        <div
            className='w-[88%] self-center h-[150px] font-Raleway mt-4 flex justify-start items-center'
        >
            <img
                src={item?.finish?.images[0].image}
                className='h-full w-[120px] object-fill'
            />
            <div
                className='flex flex-col gap-2 pl-4'>
                <p
                    className=' capitalize text-base font-medium'>
                    {item?.name}
                </p>
                <p
                    className='text-left font-Raleway  text-base w-full text-[#df633a]'>
                    ₹{Math.round(parseInt(item?.price?.price_map[0]?.price_with_gst) - parseInt(item?.price?.price_map[0]?.price_with_gst) * (parseInt(item?.price?.price_map[0]?.gst_percent) / 100)) * item?.qty} without GST
                </p>
                <p
                    className='text-left font-Raleway  text-sm w-full text-black'>
                    ₹{parseInt(item?.price?.price_map[0]?.price_with_gst) * item?.qty} with GST
                </p>

                <div
                    className='flex space-x-5'>
                    <div className=' space-x-3 flex text-sm'>
                        <button
                            onClick={() => {
                                if (count > 1) {
                                    setCount(count - 1)
                                    cart.map((product) => {
                                        if (product.id === item?.id) {
                                            product.qty = count - 1
                                        }
                                    }
                                    )
                                    dispatch(updateCartAction(cart))
                                }
                                else {
                                    dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        payload: item?.id
                                    })
                                }
                            }}
                            className='bg-[#df633a] h-[20px] w-[20px] text-white rounded-full flex justify-center items-center'
                        >
                            -
                        </button>
                        <p
                            className=' font-Raleway'
                        >
                            {item?.qty}
                        </p>
                        <button
                            onClick={() => {
                                setCount(count + 1)
                                cart.map((product) => {
                                    if (product.id === item?.id) {
                                        product.qty = count + 1
                                    }
                                }
                                )
                                dispatch({
                                    type: 'CHANGE_QUANTITY',
                                    payload: cart
                                })
                            }}
                            className='bg-[#df633a] h-[20px] w-[20px] text-white rounded-full flex justify-center items-center'
                        >
                            +
                        </button>
                    </div>
                    <button
                        onClick={()=>{
                            dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: item?.id
                            })
                        }}
                        className='underline text-xs'>
                        Remove
                    </button>
                </div>

            </div>
        </div>
    )
}
