import React from 'react';
import { IMAGE } from '../../Assets/Image';


export default function Verification() {
    return (
        <div>
            <div className='py-14 px-16  font-Raleway'>
                <div className='flex flex-col justify-between py-10 items-center mt-[100px] space-y-4'>
                    <img
                        className='w-[200px] h-[200px]'
                        resizeMode="contain"
                        src={IMAGE.verified} />
                    <p
                        className={` font-Raleway capitalize text-2xl  text-center font-bold tracking-[4px] text-black`}
                    >
                        Under Verification
                    </p>
                    <p
                        className={` text-base font-Raleway capitalize  w-[75%] mt-2 text-center tracking-[4px] text-black`}
                    >
                        Your Documents have Been Submitted for Verification.
                        <br />
                        We will get back to you soon.
                    </p>
                    <p
                        className={` text-sm font-Raleway capitalize  w-[75%] mt-2 text-center tracking-[4px] text-black`}
                    >
                        Any query? Please Contact Us. <a className='text-[#df633a] font-bold' href="mailto:info@fittingswale.com">Email</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
