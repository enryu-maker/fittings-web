import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';

const OTPForm = () => {
    const navigate = useNavigate();
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
    <div className="ml-100 m-10 p-10 h-50 w-50 bg-slate-100">
      <div className="ml-100 m-10 p-10 h-50 w-50 bg-slate-100">
        <div>
          <h2 className="mt-6 text-center text-3xl  text-gray-900">
            Enter OTP
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-4">
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
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPForm;

//  function Otp() {
//     const navigate = useNavigate();

//     const handleLogin = (e) =>{
//         e.preventDefault()
//        navigate('/registration')
//       }
//     return (
//       <> 
//       <div className="ml-100 m-10 p-10 h-50 w-50 bg-slate-100">
//        {/* <img
//               className="ml-100 p-10 h-100 w-100"
//               src="https://suta.in/cdn/shop/t/170/assets/suta_ladies.avif?v=69786775467960142401689960576"
//               alt="Your Company"
//             />  */} 
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 mr-100 lg:px-8">
//           <div className="sm:mx-auto sm:w-full  sm:max-w-sm">
           
//             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//               Sign in to your account
//             </h2>
//           </div>
  
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form className="space-y-6" action="#" method="POST">
//               <div>
//                 <label htmlFor="OTP" className="block text-sm text-left font-medium leading-6 text-gray-900">
//                   OTP
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="block w-full p-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div>
//               </div>  
//               <div>
//                 <button
//                 onClick={handleLogin} 
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//                   Verify OTP
//                 </button>
//               </div>
//             </form>
           
//           </div>
//         </div>
//         </div>
//       </>
//     )
//   }
//   export default Otp; 

//   import React, { useState } from 'react';

// const OTPForm = () => {
//   const [otp, setOTP] = useState('');

//   const handleChange = (e) => {
//     setOTP(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add your logic to verify the OTP
//     console.log('OTP submitted:', otp);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Enter OTP
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <input
//                 id="otp"
//                 name="otp"
//                 type="text"
//                 autoComplete="one-time-code"
//                 required
//                 value={otp}
//                 onChange={handleChange}
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Enter OTP"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OTPForm;
