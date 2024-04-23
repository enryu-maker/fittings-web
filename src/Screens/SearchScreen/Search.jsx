import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

function Search() {
  return (
    <div className=' h-[50vh] text-2xl flex flex-col mt-5  justify-center items-center '>
      <form className='flex items-center max-w-lg mx-auto w-full p-5'>
        <div className='relative w-full'>
          <input
            type='text'
            id='voice-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-gray-400 focus:ring-orange-500 focus:border-orange-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 '
            placeholder='Search...'
            required=''
          />
          <button
            type='submit'
            className=' absolute right-2 top-2'>
            <IoSearchSharp className='text-[#df633a]' />
          </button>
        </div>
      </form>
      <div className='flex'>
        <h1 className='text-xl text-orange-900'>No Results Found</h1>
      </div>
    </div>
  );
}

export default Search;
