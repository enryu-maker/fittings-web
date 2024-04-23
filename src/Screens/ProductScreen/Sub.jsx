import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { GetProducts,Init } from '../../Store/actions';
import { Oval } from 'react-loader-spinner';

function Sub() {
  const { state } = useLocation();
  const [loading, setLoading] = React.useState(false);
  const role = useSelector((state) => state.Reducers.role);
  const [products,setproducts] =  React.useState([]);

  // console.log(role)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetProducts(state?.id,setproducts, setLoading, role));
  }, []);
  console.log(products);
  return (
    <div className='mt-[180px] w-full font-Raleway'>
      <div className='mx-auto '>
        <p className='text-left ml-8 md:text-4xl text-2xl'>
          {state?.sub_category_name}
        </p>
        <div className='grid md:grid-cols-3 gap-10 items-start mt-2 justify-evenly w-[100%] p-5'>
          {loading ? (
            <div className='flex justify-center items-center w-[70vw] h-[40vh]'>
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
            </div>
          ) : (
            products?.products?.map((product, index) => (
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
          )}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
export default Sub;
