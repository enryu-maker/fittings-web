import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useRef } from 'react';

const OTPForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation()
  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value !== '' && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    // console.log('OTP submitted:', otpCode);
  };
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/Product')
    const otpCode = otp.join('');
    console.log('OTP submitted:', otpCode);
  };
  return (
    <>
      <div className="flex justify-center items-center font-Raleway">
        <div className="flex min-h-full space-x-4 flex-col justify-center px-6 py-12 mr-100 lg:px-8">
          <div className="sm:mx-auto sm:w-full  sm:max-w-sm">

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Email Verification
            </h2>
            <p
              className=' text-xs'
            >
              We have sent a code to your {state?.email}
            </p>
          </div>
          <div className="flex mt-8 justify-center items-center space-x-4">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength="1"
                className="appearance-none w-12 h-12 border border-gray-300 rounded-md text-center text-2xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>

          <div>
            <button
              onClick={handleClick}
              type="submit"
              className="group mt-8 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPForm;
