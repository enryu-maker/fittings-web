import React from 'react'
import { IMAGE } from '../../Assets/Image'

export default function CartCard() {
    return (
        <div
            className='w-[88%] self-center h-[150px] font-Raleway mt-4 flex justify-start items-center'
        >
            <img
                src={"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=150&q=60"}
                className='h-full w-[120px] object-cover'
            />
            <div
                className='flex flex-col gap-2 pl-4'>
                <p
                    className=' capitalize text-base'>
                    A Night In Tokyo (Bag)
                </p>
                <p
                    className=' capitalize text-sm text-gray-600'>
                    Rs. 1,500.00
                </p>
                <div
                    className='flex space-x-5'>
                    <div
                        className='flex w-[100px] px-3 justify-between items-center border-2'>
                        <p
                            className=' capitalize font-black text-3xl text-black'>
                            -
                        </p>
                        <p
                            className=' capitalize text-base text-gray-600'>
                            1
                        </p>
                        <p
                            className=' capitalize font-black text-3xl text-black'>
                            +
                        </p>
                    </div>
                    <button
                    className='underline text-xs'>
                        Remove
                    </button>
                </div>

            </div>
        </div>
    )
}
