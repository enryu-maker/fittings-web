/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { TbCategory } from 'react-icons/tb';
import { CgDetailsMore } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MenuIcons = () => {
  const Menus = [
    { name: 'Home', icon: IoHomeOutline, href: '/' },
    { name: 'Search', icon: CiSearch, href: '/search' },
    { name: 'Category', icon: TbCategory, href: '/category' },
    { name: 'More', icon: CgDetailsMore, href: '/myaccount' },
  ];
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});
  const category = useSelector((state) => state.Reducers.cateogry);
  const navigate = useNavigate();

  return (
    <>
      <div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
        <div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
          {Menus.map((menu, index) => (
            <Link
              to={menu.href}
              key={index}
              onClick={() => {
                setActive(index);
              }}
              className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group`}>
              <menu.icon
                className={`w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-500 ${
                  index === active && 'text-orange-600'
                }`}
              />
              <span
                className={`text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-500 ${
                  index === active && 'text-orange-600'
                }`}>
                {menu.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      {/* // Mobile Menu Here */}
      <div className='md:hidden'>
        {isOpen && (
          <div className=' flex flex-col justify-between items-center w-full h-screen mt-10 bg-white text-black z-50 '>
            {category?.map((item, index) => {
              if (item?.status === 'Activate') {
                return (
                  <button
                    key={index}
                    onMouseEnter={() => {
                      setOpen(true);
                      setData(item);
                    }}
                    className=' uppercase text-xs hover:underline underline-offset-4 '>
                    {item?.main_category_name}
                  </button>
                );
              }
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MenuIcons;
