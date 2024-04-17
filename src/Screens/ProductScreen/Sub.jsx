import React from 'react';
import { Slider } from '@material-tailwind/react';

import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Drawer,
  Card,
  CardHeader,
  CardBody,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import {
  ChevronRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { GetProducts } from '../../Store/actions';
import { Oval } from 'react-loader-spinner';

function Sub() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(0);
  const { state } = useLocation();
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/details');
  };
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();
  React.useEffect(() => {
    setLoading(true);
    setProducts([]);
    dispatch(GetProducts(state?.id, setProducts, setLoading));
  }, [1]);
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
                {/* <p
                    className="text-justify font-Raleway text-sm w-full">
                    {product?.description?.slice(0, 100)}
                  </p> */}
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
                {/* <div className=' space-x-3 w-full justify-between items-center'>
                    <button
                      className=" font-Raleway justify-center  bg-[#df633a] hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm leading-6 text-white shadow-sm "
                    >
                      Buy Now
                    </button>
                    <button
                      className=" font-Raleway justify-center  bg-[#df633a] hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm "
                    >
                      Add to Cart
                    </button>
                  </div> */}
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
