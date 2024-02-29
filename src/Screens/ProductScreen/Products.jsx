import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Products() {
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      name: 'Solid brass cabinet',
      href: '#',
      imageSrc: " https://www.mobelhomestore.com/cdn/shop/files/Untitled_design_c4e9bc56-67e6-426b-af38-58bf94a49ef2.jpg?v=1670843886",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Nickel cabinet pull ',
      href: '#',
      imageSrc: "https://d2dwxeidp9b9gl.cloudfront.net/images/products/169200833856802.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Brass cabinet pull',
      href: '#',
      imageSrc: "https://static.asianpaints.com/content/dam/asian_paints/resources/aphomes-categorypage/furniture/ap-homes-usage-furniture-living-room-asian-paints.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Wooden bed',
      href: '#',
      imageSrc: "https://imgmedia.lbb.in/media/2022/05/62736afa42d07e2c4a83ea34_1651731194487.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }, {
      id: 5,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtEV_BTV53q_pwsbgsl79Nk1b7a1522t_6g&usqp=CAU",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }
    , {
      id: 6,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/52/66/40/52664088bb364f0b2ff731cdb88eedee.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }
    , {
      id: 7,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/a0/ed/b0/a0edb091eccb6084362613756cc06203.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }
    , {
      id: 8,
      name: 'nicket cabinet pull',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/94/0e/cb/940ecb862d684587726ef15db97b8e8b.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }

  ]
  const { state } = useLocation()
  return (
    <div className=" w-full flex flex-col justify-center items-center font-Raleway mt-[180px]">
      <h3 className="text-center text-4xl ">
        {state?.main_category_name}
      </h3>
      <div className='py-5 space-x-2'>
        {
          state?.category?.map((item, index) => (
            <button
              key={index}
              onClick={() => {
              }}
              className={`box-border border-gray-200 border-2 hover:bg-[#df633a] hover:text-white  bg-white  text-black  px-4 py-1 `}>
              <p>{item?.category_name}</p>
            </button>
          ))
        }
      </div>
    </div>
  )

}

export default Products
