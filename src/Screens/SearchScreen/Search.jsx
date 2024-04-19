import React from 'react';

function Search() {
  return (
    <div className=' h-screen text-2xl flex  justify-center items-center '>
      <form className='flex items-center max-w-lg mx-auto'>
        <label
          htmlFor='voice-search'
          className='sr-only'>
          Search
        </label>
        <div className='relative w-full'>
          <div className='absolute inset-y-0 start-0 top-10 flex items-center ps-3 pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='100'
              height='100'
              viewBox='0 0 48 48'>
              <path
                fill='#ff5f01'
                d='M24.839,35.239c2.343-0.745,4.452-2.012,6.189-3.666s3.102-3.695,3.956-5.988 l-0.631-0.631c-1.364-1.364-3.156-2.046-4.949-2.046s-3.585,0.682-4.95,2.047s-2.047,3.157-2.047,4.95s0.682,3.585,2.047,4.95 L24.839,35.239z'
                opacity='.1'></path>
              <path
                fill='#ff5f01'
                d='M25.161,25.661c-1.17,1.17-1.755,2.706-1.755,4.243s0.585,3.073,1.755,4.243 l0.638,0.638c1.969-0.696,3.749-1.802,5.234-3.216s2.674-3.135,3.461-5.06l-0.848-0.848c-1.17-1.169-2.706-1.754-4.242-1.754 S26.331,24.491,25.161,25.661z'
                opacity='.2'></path>
              <path
                fill='#ff5f01'
                d='M25.868,26.368c-0.975,0.975-1.463,2.255-1.463,3.536s0.488,2.56,1.463,3.536 l0.891,0.891c1.595-0.647,3.046-1.593,4.279-2.766s2.246-2.574,2.966-4.131l-1.065-1.065c-0.975-0.975-2.255-1.462-3.535-1.462 S26.844,25.393,25.868,26.368z'
                opacity='.3'></path>
              <path
                fill='#ff5f01'
                d='M26.575,27.075c-0.781,0.781-1.171,1.804-1.171,2.828s0.39,2.048,1.171,2.828 l1.144,1.145c1.221-0.598,2.343-1.384,3.324-2.317s1.818-2.014,2.471-3.203l-1.282-1.282c-0.78-0.78-1.804-1.17-2.828-1.17 S27.356,26.295,26.575,27.075z'
                opacity='.4'></path>
              <path
                fill='#ff5f01'
                d='M28.68,33.423c0.847-0.55,1.64-1.174,2.368-1.867s1.391-1.453,1.976-2.274l-1.499-1.499 c-0.586-0.586-1.354-0.879-2.121-0.879s-1.536,0.293-2.121,0.879h0c-0.586,0.586-0.879,1.354-0.879,2.121s0.293,1.536,0.879,2.121 L28.68,33.423z'
                opacity='.5'></path>
              <linearGradient
                id='TzfY4TRVXOoqh3bcHqxCWa_qW0hxm9M3J5x_gr1'
                x1='7.309'
                x2='-14.935'
                y1='-1.993'
                y2='16.856'
                gradientTransform='matrix(.7071 -.7071 .8141 .8141 31.652 27.55)'
                gradientUnits='userSpaceOnUse'>
                <stop
                  offset='0'
                  stop-color='#ffda03'></stop>
                <stop
                  offset='.256'
                  stop-color='#ffba02'></stop>
                <stop
                  offset='1'
                  stop-color='#ff5f01'></stop>
              </linearGradient>
              <path
                fill='url(#TzfY4TRVXOoqh3bcHqxCWa_qW0hxm9M3J5x_gr1)'
                d='M42.75,43.25L42.75,43.25c-1.172,1.172-3.071,1.172-4.243,0L27.282,32.025	c-1.172-1.172-1.172-3.071,0-4.243l0,0c1.172-1.172,3.071-1.172,4.243,0L42.75,39.007C43.922,40.179,43.922,42.078,42.75,43.25z'></path>
              <path
                fill='#ff5f01'
                d='M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l3.558,3.558c1.652-1.153,3.102-2.565,4.315-4.171L31.525,27.782z'
                opacity='.1'></path>
              <path
                fill='#ff5f01'
                d='M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l3.126,3.126c1.66-1.142,3.115-2.554,4.319-4.166L31.525,27.782z'
                opacity='.15'></path>
              <path
                fill='#ff5f01'
                d='M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l2.695,2.695c1.669-1.131,3.127-2.542,4.323-4.162L31.525,27.782z'
                opacity='.2'></path>
              <path
                fill='#ff5f01'
                d='M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l2.264,2.264c1.678-1.12,3.139-2.531,4.327-4.158L31.525,27.782z'
                opacity='.25'></path>
              <path
                fill='#ff5f01'
                d='M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l1.833,1.833c1.686-1.109,3.152-2.52,4.332-4.154L31.525,27.782z'
                opacity='.3'></path>
              <path
                fill='#ff5f01'
                d='M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l1.401,1.401c1.695-1.099,3.164-2.508,4.336-4.149L31.525,27.782z'
                opacity='.35'></path>
              <linearGradient
                id='TzfY4TRVXOoqh3bcHqxCWb_qW0hxm9M3J5x_gr2'
                x1='35.79'
                x2='8.408'
                y1='35.79'
                y2='8.408'
                gradientUnits='userSpaceOnUse'>
                <stop
                  offset='0'
                  stop-color='#fff'
                  stop-opacity='.4'></stop>
                <stop
                  offset='1'
                  stop-color='#f4805d'
                  stop-opacity='.3'></stop>
              </linearGradient>
              <circle
                cx='20'
                cy='20'
                r='16'
                fill='url(#TzfY4TRVXOoqh3bcHqxCWb_qW0hxm9M3J5x_gr2)'></circle>
              <linearGradient
                id='TzfY4TRVXOoqh3bcHqxCWc_qW0hxm9M3J5x_gr3'
                x1='13.665'
                x2='35.637'
                y1='13.292'
                y2='36.557'
                gradientUnits='userSpaceOnUse'>
                <stop
                  offset='0'
                  stop-color='#f4805d'
                  stop-opacity='.4'></stop>
                <stop
                  offset='1'
                  stop-color='ivory'
                  stop-opacity='.2'></stop>
              </linearGradient>
              <path
                fill='url(#TzfY4TRVXOoqh3bcHqxCWc_qW0hxm9M3J5x_gr3)'
                d='M20,4.5c8.547,0,15.5,6.953,15.5,15.5	S28.547,35.5,20,35.5S4.5,28.547,4.5,20S11.453,4.5,20,4.5 M20,4C11.163,4,4,11.163,4,20s7.163,16,16,16s16-7.163,16-16	S28.837,4,20,4L20,4z'></path>
            </svg>
          </div>
          <input
            type='text'
            id='voice-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-deep-orange-300 focus:ring-orange-500 focus:border-orange-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 '
            placeholder='Search here...'
            required=''
          />
          <button
            type='button'
            className='absolute inset-y-0 end-0 flex items-center pe-3'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 16 20'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z'
              />
            </svg>
          </button>
        </div>
        <button
          type='submit'
          className='inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800'>
          <svg
            className='w-4 h-4 me-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'>
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
