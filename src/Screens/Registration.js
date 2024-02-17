import {  useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Registration() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();
    const handleClick = (e) =>{
        e.preventDefault()
       navigate('/login')
      }
      const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
      };
    
      const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
      };
    return (
      <>
      
  <div className="ml-100 m-10 p-10 h-50 w-50 bg-slate-100">
  
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 mr-100 lg:px-8">
            
          <div className="sm:mx-auto sm:w-full  sm:max-w-sm">    
              
            <h2 className="mt-5 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up 
            </h2>
            <h3 className="mt-5 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900"></h3>
             Please fill in the information below
          </div> 
          
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
            <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          {selectedOption ? selectedOption : 'Role'}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M10 3a7 7 0 100 14 7 7 0 000-14zm0-2a9 9 0 100 18 9 9 0 000-18z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          className={`${
            dropdownOpen ? 'block' : 'hidden'
          } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => handleOptionSelect('Option 1')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Customer
            </button>
            <button
              onClick={() => handleOptionSelect('Option 2')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Interior
            </button>
            <button
              onClick={() => handleOptionSelect('Option 3')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Business
            </button>
          </div>
        </div>
      </div>
              <div>
                <label htmlFor="email" className="block text-sm text-left font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="Name"
                    autoComplete="name"
                    required
                    className="block w-full p-5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <label htmlFor="email" className="block text-sm text-left font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full p-5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <label htmlFor="email" className="block text-sm text-left font-medium leading-6 text-gray-900">
                  Phone No
                </label>
                <div className="mt-2">
                  <input
                    id="number"
                    name="number"
                    type="email"
                    autoComplete="number"
                    required
                    className="block w-full p-5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-grey-600 hover:text-grey-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full  p-5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center  bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
             
              <a  onClick={handleClick} href="#" className="font-semibold leading-6 text-grey hover:text-indigo-500">
                Already have account ? Log in
              </a>
            </p>
            {/* <button
                  type="submit"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            Sign up with Google
                </button> */}
          </div>
        </div>
        </div>
      </>
    )
  }
  export default Registration;  
