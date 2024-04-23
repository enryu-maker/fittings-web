import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sub from '../ProductScreen/Sub';
import { useSelector } from 'react-redux';
export default function Cards({ data }) {
  const navigate = useNavigate();
  const spot = useSelector(state => state.Reducers.spot);
  console.log(spot)
  const best = useSelector(state => state.Reducers.best);
  const products = [
    {
      id: 1,
      name: 'Solid brass cabinet',
      href: '#',
      imageSrc:
        ' https://www.mobelhomestore.com/cdn/shop/files/Untitled_design_c4e9bc56-67e6-426b-af38-58bf94a49ef2.jpg?v=1670843886',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Nickel cabinet pull ',
      href: '#',
      imageSrc:
        'https://d2dwxeidp9b9gl.cloudfront.net/images/products/169200833856802.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Brass cabinet pull',
      href: '#',
      imageSrc:
        'https://static.asianpaints.com/content/dam/asian_paints/resources/aphomes-categorypage/furniture/ap-homes-usage-furniture-living-room-asian-paints.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Wooden bed',
      href: '#',
      imageSrc:
        'https://imgmedia.lbb.in/media/2022/05/62736afa42d07e2c4a83ea34_1651731194487.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹35',
      color: 'Black',
    },
    {
      id: 5,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtEV_BTV53q_pwsbgsl79Nk1b7a1522t_6g&usqp=CAU',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹35',
      color: 'Black',
    },
    {
      id: 6,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc:
        'https://i.pinimg.com/564x/52/66/40/52664088bb364f0b2ff731cdb88eedee.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹35',
      color: 'Black',
    },
    {
      id: 7,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc:
        'https://i.pinimg.com/564x/a0/ed/b0/a0edb091eccb6084362613756cc06203.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹35',
      color: 'Black',
    },
    {
      id: 8,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc:
        'https://i.pinimg.com/564x/94/0e/cb/940ecb862d684587726ef15db97b8e8b.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹35',
      color: 'Black',
    },
  ];
  return (
    <div className=' font-Raleway flex flex-col justify-center items-center'>
      <h3 className='text-left m-10 text-3xl	'>Shop By Category</h3>
      <div className='flex flex-wrap justify-evenly items-start w-[95%]'>
        {data?.map((item, index) => {
          if (item?.status === 'Activate') {
            return (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.85 }}
                onClick={() => {
                  navigate(`/category/`, {
                    state: item,
                  });
                }}
                key={index}
                className=' flex flex-col w-[110px] justify-center items-center capitalize text-xs '>
                <img
                  alt='icon'
                  className='h-[100px] rounded-full w-[100px] border-2'
                  src={item?.image}
                />
                {item?.main_category_name}
              </motion.button>
            );
          }
        })}
      </div>
      <h3 className='text-left m-10 text-3xl	'>Our Spotlight</h3>
      <div className=' w-[85%] grid md:grid-cols-3 gap-5 font-Raleway   '>
        {spot?.map((item, index) => {
          if (item?.product?.status === 'Activate') {
            return (
              <a
              href={`#/details/${item?.product?.id}`}

                key={item?.id}
                className='group relative'>
                <div className='w-150 overflow-hidden  rounded-md shadow-lg  lg:aspect-none  group-hover:opacity-75 lg:h-80'>
                  <img
                    src={item?.product?.image}
                    alt={item?.imageAlt}
                    className='h-full w-100 object-contain object-center lg:h-full lg:w-full'
                  />

                  <button className='bg-orange text-gray-700'> Shop Now</button>
                </div>
                <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-gray-700'>
                      <a
                        className=' text-2xl  text-gray-900 dark:text-white'
                        href={item?.href}>
                        <span
                          aria-hidden='true'
                          className='absolute inset-0'
                        />
                        {item?.product?.product_name}
                      </a>
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>{item?.color}</p>
                  </div>
                  <p className='text-m font-medium text-black-900'>
                    {item?.price}
                  </p>
                </div>
              </a>
            )
          }
        })
        }
      </div>
      <h3 className='text-left m-10 text-3xl	'>Best Sellers</h3>
      <div className=' w-[85%] grid md:grid-cols-3 gap-5 font-Raleway   '>
        {best?.map((item, index) => {
          if (item?.product?.status === 'Activate') {
            return (
              <a
                href={`#/details/${item?.product?.id}`}
                key={item?.product?.id}
                className='group relative'>
                <div className='w-150 overflow-hidden  rounded-md shadow-lg  lg:aspect-none  group-hover:opacity-75 lg:h-80'>
                  <img
                    src={item?.product?.image}
                    alt={item?.imageAlt}
                    className='h-full w-100 object-contain object-center lg:h-full lg:w-full'
                  />

                  <button className='bg-orange text-gray-700'> Shop Now</button>
                </div>
                <div className='mt-4 flex justify-between'>
                  <p className='text-m font-medium text-black-900'>
                    {item?.price}
                  </p>
                </div>
              </a>
            )
          }
        })
        }
      </div>
    </div>
  );
}
