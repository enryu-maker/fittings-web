import React from 'react'
import { IMAGE } from '../Assets/Image'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter } from "react-icons/ai";
export default function Footer() {
    return (
        <div
            style={{
                backgroundImage: `url(${IMAGE.bg})`,
                backgroundRepeat: "no-repeat",
            }}
            className={`w-full h-[600px] font-Raleway transition-all flex justify-center items-center`}
        >
            <div
                className='w-[88%] h-[88%] bg-white py-4 shadow-md flex flex-col justify-evenly  items-center'
            >
                <div
                    className='w-[88%] flex justify-between items-start flex-wrap'>
                    <div>
                        <p
                            className=' uppercase font-semibold'>
                            Quick Link
                        </p>
                    </div>
                    <div>
                        <p
                            className=' uppercase font-semibold'>
                            Quick Link
                        </p>
                    </div>
                    <div>
                        <p
                            className=' uppercase font-semibold'>
                            customer Service
                        </p>
                    </div>
                    <div>
                        <p
                            className=' uppercase font-semibold'>
                            news letter
                        </p>
                    </div>
                </div>
                <div
                    className='w-[88%] flex flex-col justify-between items-start'>
                    <div
                        className='lg:w-[30%] space-y-2'
                    >
                        <p
                            className=' uppercase font-semibold tracking-widest'>
                            ABOUT Fittingswale
                        </p>
                        <p
                            className=' text-sm '
                        >
                            Suta combines India's centuries-old weaving traditions with contemporary style- so that what looks good, feels good too
                        </p>
                        <p
                            className=' text-sm capitalize'
                        >
                            toll  free : <a className='underline underline-offset-4 hover:no-underline' href='tel:+917564211111'>+91 7564 211 111</a>
                        </p>
                        <p
                            className=' text-sm capitalize transition-all'
                        >
                            email : <a className='underline underline-offset-4 hover:no-underline' href='mailto:info@fittingswale.in'>info@fittingswale.in</a>
                        </p>
                    </div>
                    <div
                        className='lg:w-[30%] flex space-x-2 py-4'
                    >
                        <AiOutlineFacebook size={25} />
                        <AiOutlineInstagram size={25} />
                        <AiOutlineTwitter size={25} />
                        <AiOutlineYoutube size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}
