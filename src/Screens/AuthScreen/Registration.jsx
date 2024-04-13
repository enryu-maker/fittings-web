import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterAction } from '../../Store/actions';
import { Select, Option } from "@material-tailwind/react";
import { Oval } from 'react-loader-spinner';
function Registration() {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    "email": "",
    "name": "",
    "role": "",
    "mobile_no": 0,
    "password": ""
  })
  const [loading, setLoading] = React.useState(false)
  const dispatch = useDispatch()
  return (
    <>
      <div className="  font-Raleway mt-[140px]">
        <div className="flex min-h-full  flex-col justify-center py-12 mr-100 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full  sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl  tracking-widest text-gray-900">
              Sign up to continue
            </h2>
          </div>
          <div className="mt-5 space-y-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <div className="flex items-center justify-between">
                {/* <label htmlFor="role" className="block text-sm font-medium  text-gray-900">
                  User Type <span className='text-red-600'>*</span>
                </label> */}
              </div>
              <Select
                label="User Type"
                value={data.role}
                onChange={(val) => setData({ ...data, role: val })}
                className='font-Raleway'
              >
                <Option value='Business'>Business</Option>
                <Option value='Interior'>Interior</Option>
                <Option value='Customer'>Customer</Option>

              </Select>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-left font-medium leading-6 text-gray-900">
                Name <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full px-3 border-2 py-1.5 text-gray-900 outline-none"
                  onChange={(e)=>{
                    setData({ ...data, name: e.target.value })
                  }}
                />
              </div>
              <label htmlFor="email" className="block text-sm text-left font-medium leading-6 text-gray-900">
                Email <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 border-2 py-1.5 text-gray-900 outline-none"
                  onChange={(e)=>{
                    setData({ ...data, email: e.target.value })
                  }}
                />
              </div>
              <label htmlFor="email" className="block text-sm text-left font-medium leading-6 text-gray-900">
                Phone <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="number"
                  autoComplete="number"
                  required
                  className="block w-full px-3 border-2 py-1.5 text-gray-900 outline-none"
                  onChange={(e)=>{
                    setData({ ...data, mobile_no: e.target.value })
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium  text-gray-900">
                  Password <span className='text-red-600'>*</span>
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-3 border-2 py-1.5 text-gray-900 outline-none"
                  onChange={(e)=>{
                    setData({ ...data, password:  e.target.value })
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={() => {
                  console.log(data)
                  dispatch(RegisterAction(setLoading, data, navigate))
                }}
                className="flex w-full justify-center  bg-[#df633a] hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm "
              >
                {
                  loading?
                  <Oval
                  visible={true}
                  height="20"
                  width="20"
                  color="#df633a"
                  secondaryColor='#df633a40'
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
                :  
                'Register'
                }
              </button>
            </div>
            
            <p className="flex text-center text-sm py-2  justify-center items-center">
              Already have an account? &nbsp; <a href="#/login" className=" leading-6 text-grey">
                Sign In
              </a>
            </p>

          </div>
        </div>
      </div>
    </>
  )
}
export default Registration;  
