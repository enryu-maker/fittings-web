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
            <div className='flex flex-row justify-evenly items-center text-gray-500'>
              <div
              >
                ----------
              </div>
              <p
                className='text-center text-[15px]  tracking-wider font-regular text-gray-500'
              >
                Or sign up with
              </p>
              <div
              >
                ----------
              </div>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center w-full p-5  border-2 py-1.5 text-gray-900 ">
              <img
                className=" mr-5 h-5 w-5"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABIFBMVEX////qQzU0qFNChfT7vAUwffPY5Pw9g/Rpmvb7ugAwp1AppUzpNSTqPi/pOCf7uADL2/tunfYfo0bpLBfubWX8wwD2vbr1tbHpMh/qRzr++vr97u3+9uT80XFflfXl8uhCrF612r3J5M/T6dj75uT50c74ycb629nwgXrsV0vynZf0qqbsXVPudm7oJAjwjIXtZVz94aLygwfpNDj3pBn+577sVTL8yFHwdyr/+vD1lx/947H5rxLvay3ziiL5u2Lz9v4WdPO5zvr91YWgvfn8zGH7xDyMsPd7pvfbyGydsj9vr0+n1LGtxfneuSW4tjqEr0bvvB3NtyxxvYOfry2ExZMynYw5p2dCks0zqz9AnKY7pHlGj91Al7mCwaJbtXFYly4pAAADKklEQVRYhdXVa3vSMBQH8K60Y72ypVwK27izAdtgc84554XpVFSmTmSKt37/b2EKvSQhTUPxedT/yzbPj5PTkyAI/1tKzdZevpDP7+1vJ0eahXZHt2xbh7Etay3bbZUSKN2OpRvGGhLDtIz23nJMK2uZGBJgdvGAv6zWoUVV5tHNAz6mdMRiZlSxxeHk4xg3vX6s07biGRizwx6H7Y7J5cCu6/sMp7nGsS0vepbhGPyOyXC2l3GOo51Ske4YhmmSP8FyhCylz6bd6xz1u93+sQ0PDJ9zYC+UYhv9cPKahWN/wlj9EZo90rE7eXJNe0YxHaFDdMHQC5RV+3DO2E6B2Jh5GDG57R7TEYh67KPon2Q6J/dOUUdvM1czIuXuo/uKricmZxlJyjzwizKKSR3hXJEkKffQk6xmUucCFuRKj2aS2U1c0OUcknKPZztL8J/j5aUi+Xlyynu10yKFUO6pnvwvdScjIXm2uGCwzo6/7gyFMpeL0OaVzMqVL51g0A4FklOsyM+9dS8UBFIoe4+Drr11yEeTlFfLQ+nX3rpzFNpNAA3/FLT1z0IrN9uHVv38QbNXHcjg88cfETlNBoXkG2/dBQopbyhQeYMMKgVHRLgNmqQobwGlSQsZoJuVg+O/60OK9E4EIw7oBoXSwWP/qlXei6KoihxQGdlauhw89pqkfBDdcJS0ju3sOnzhjqSifBTnAZU4aIj1ejN8AQdAuRX9qNVlCkJaJLjX/ycxjDZmQ/RxnOXys4gGTFjOFj6O69hLTcQlRk1DfGNl/G0N4JLmRHR8sIEfvHCsvVRVXFLpU1C7k7GNpVPkigpREtxetUYuqlcB+FLGhmiTXCOMFiQVaJMGokw0oLpPv4ZScKehcTRSgq0CoDqewDgiAP776bdAkge0/ZNt8urS3GCvpt9T6aiNzdqkUSVKNPGHTJyyhJI6/Smn5GGEAyWVVxKndwwHSlVKxyOkXwwHZrwwBfTE31o1wFGUBhpxzqyomE6p7NshTMNhURpweMqZp+4A+iioGhjzM24qI3hAcQwiwBnFXugUqzaGWBDNmdQSKIHWqNdg6o0VjL+T37LOV58YHsy6AAAAAElFTkSuQmCC"
              />
              Google
            </button>
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
