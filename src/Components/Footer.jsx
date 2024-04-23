import React from 'react'
import { IMAGE } from '../Assets/Image'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter } from "react-icons/ai";
import Privacypage from './Privacypage';
export default function Footer() {
    
    return (
        <div
            style={{
                backgroundImage: `url(${IMAGE.bg})`,
                backgroundRepeat: "no-repeat",
            }}
            className={`w-full h-[500px] font-Raleway transition-all flex justify-center items-center`}
        >
            <div
                className='w-[88%] h-[88%] bg-white py-4 shadow-md flex flex-col justify-evenly  items-center'
            >
                <div
                    className='w-[88%] flex justify-between items-start flex-wrap'>
                    <div>
                        <p
                            className=' uppercase '>
                            Quick Link
                        </p>
                    </div>
                    <div>
                        <p
                            className=' uppercase '>
                            Quick Link
                        </p>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p
                            className=' uppercase '>
                            customer Service
                        </p>
                        <a 
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
                </div>
                <div
                    className='w-[88%] flex flex-col justify-between items-start'>
                    <div
                        className='lg:w-[30%] space-y-2'
                    >
                        <p
                            className=' uppercase  tracking-widest'>
                            ABOUT Fittingswale
                        </p>
                        <p
                            className=' text-sm '
                        >
                            Mittal bhawan gol building manaitand dhanbad jharkhand 826001
                        </p>
                        <p className=' text-sm capitalize'>
                            Contact Number : <a className='underline underline-offset-4 hover:no-underline' href='tel:+919155511522'>+91 9155511522</a>
                         </p>
                        <p className=' text-sm capitalize transition-all'>
                            email : <a className='underline underline-offset-4 hover:no-underline' href='mailto:info@fittingswale.in'>info@fittingswale.in</a>
                        </p>
                    </div>
                    <div
                        className='lg:w-[30%] flex space-x-2 py-4' >
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
