import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { GetSearch } from '../../Store/actions';
import { Oval } from 'react-loader-spinner';

function Search() {
  const [data, setData] = React.useState({
    "query": ""
  })
  const dispatch = useDispatch()
  const [product, setProduct] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  console.log(product)
  console.log(data?.query)

  return (
    <div className='  text-2xl flex flex-col font-Raleway mt-[180px]  justify-center items-center '>
      <div className='flex items-center max-w-lg mx-auto w-full p-5'>
        <div className='relative w-full'>
          <input
            type='text'
            id='voice-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-gray-400 focus:ring-orange-500 focus:border-orange-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 '
            placeholder='Search...'
            required=''
            onChange={(e) => setData({ ...data, query: e.target.value })}
            value={data.query}
          />
          <button
            onClick={() => {
              dispatch(GetSearch(data?.query, setProduct, setLoading))
            }}
            className=' absolute right-2 top-2'>
            <IoSearchSharp className='text-[#df633a]' />
          </button>
        </div>
      </div>
      <div className='flex flex-wrap w-full justify-evenly py-5 items-center'>

        {
          loading ?
              <Oval
                visible={true}
                height='40'
                width='40'
                color='#df633a'
                secondaryColor='#df633a40'
                ariaLabel='oval-loading'
                wrapperStyle={{}}
                wrapperClass=''
              />
            :

            product.length > 0 ?

              product?.map((product, index) => (
                <a
                  href={'#/details/' + product?.id}
                  key={index}
                  className=' px-5 flex flex-col h-[300px] justify-evenly items-center cursor-pointer shadow-lg '>
                  <img
                    alt='icon'
                    src={product?.product_images[0]?.images[0]?.image}
                    className='w-full h-[180px]  object-contain'
                  />
                  <p className='text-left  font-Raleway  text-base w-full'>
                    {product?.product_name}
                  </p>
                  <p className='text-left font-Raleway  text-2xl w-full text-[#df633a]'>
                    ₹
                    {Math.round(
                      (parseInt(
                        product?.size_chart[0]?.price_map[0]?.price_with_gst
                      ) /
                        (parseInt(100) +
                          parseInt(
                            product?.size_chart[0]?.price_map[0]?.gst_percent
                          ))) *
                      100
                    )}{' '}
                    without GST
                  </p>
                  <p className='text-left font-Raleway  text-base w-full'>
                    ₹{product?.size_chart[0]?.price_map[0]?.price_with_gst} with
                    GST
                  </p>
                </a>
              ))
              :
              <p className=' font-Raleway  font-medium text-red-500 text-lg py-5'>
                No Results Found
              </p>
        }
      </div>
    </div>
  );
}

export default Search;
