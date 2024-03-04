import React from 'react'

export default function CartCard({
    item
}) {
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
                    className=' capitalize text-base'>
                    {item.name}
                </p>
                <p
                    className='text-left font-Raleway  text-base w-full text-[#df633a]'>
                    ₹{Math.round(parseInt(item?.price?.price_map[0]?.price_with_gst) - parseInt(item?.price?.price_map[0]?.price_with_gst) * (parseInt(item?.price?.price_map[0]?.gst_percent) / 100))} without GST
                </p>
                <p
                    className='text-left font-Raleway  text-sm w-full text-black'>
                    ₹{parseInt(item?.price?.price_map[0]?.price_with_gst)} with GST
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
