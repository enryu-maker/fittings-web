import React from 'react'
import { useNavigate } from 'react-router-dom'

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
  return (
    <div className=" w-[95%] flex justify-center items-center font-Raleway mt-[180px]">
      <div className="mx-auto max-w-2xl px-4  lg:max-w-7xl ">
        <h3 className="text-left text-4xl font-bold">
          SCREW & NAIL
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 py-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
            onClick={()=>{
              navigate("/sub")
            }}
            key={product.id} className="group relative">
              <div className="overflow-hidden h-[100px] rounded-md bg-gray-200 lg:aspect-none  group-hover:opacity-75 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-50 w-50 object-cover "
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a className=' text-xl font-semibold text-gray-900 dark:text-white' href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Products
