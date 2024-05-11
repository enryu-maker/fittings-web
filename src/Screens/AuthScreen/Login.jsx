import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LoginAction } from '../../Store/actions';
import { Oval } from 'react-loader-spinner';

function Login() {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className='flex justify-center items-center font-Raleway mt-[140px] '>
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 mr-100 lg:px-8'>
          <div className='sm:mx-auto sm:w-full  sm:max-w-sm'>
            <h2 className='mt-10 text-center text-2xl  leading-9 tracking-tight text-gray-900'>
              Sign in to your account
            </h2>
          </div>

          <div className='mt-10 space-y-5 sm:mx-auto sm:w-full sm:max-w-sm'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm text-left font-medium leading-6 text-gray-900'>
                Email <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                  required
                  className='block w-full p-5 border-2 py-1.5 text-gray-900'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Password <span className='text-red-600'>*</span>
                </label>
                <div className='text-sm'>
                  <a
                    href='#/forgot'
                    className=' underline underline-offset-4 text-grey-600 hover:text-grey-500'>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  value={data.password}
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                  required
                  className='block w-full p-5 border-2 py-1.5 text-gray-900 '
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                onClick={() => {
                  dispatch(LoginAction(setLoading, data, navigate));
                }}
                className='flex w-full justify-center  bg-[#df633a] hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm '>
                {loading ? (
                  <Oval
                    visible={true}
                    height='20'
                    width='20'
                    color='#df633a'
                    secondaryColor='#df633a40'
                    ariaLabel='oval-loading'
                    wrapperStyle={{}}
                    wrapperClass=''
                  />
                ) : (
                  'Login'
                )}
              </button>
            </div>

            <p className='flex text-center text-sm py-4  justify-center items-center'>
              Don’t have an account? &nbsp;{' '}
              <a
                href='#/register'
                className=' leading-6 text-grey'>
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
