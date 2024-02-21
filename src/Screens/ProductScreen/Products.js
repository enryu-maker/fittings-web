import React from 'react'
import { useNavigate } from 'react-router';

function Products() {
  const navigate = useNavigate();
  const handleOpen = (e) => {
    e.preventDefault()
   navigate("/Sub")
     };
    const products = [
        {
          id: 1,
          name: 'Solid brass cabinet',
          href: '#',
          imageSrc:" https://www.mobelhomestore.com/cdn/shop/files/Untitled_design_c4e9bc56-67e6-426b-af38-58bf94a49ef2.jpg?v=1670843886",
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
          des: "N&H Handmade Coconut Shell Two Toned Lotus Shaped Table Top Water Fountain"

        },
        {
            id: 2,
            name: 'Nickel cabinet pull ',
            href: '#',
            imageSrc:"https://d2dwxeidp9b9gl.cloudfront.net/images/products/169200833856802.jpg",
            imageAlt:"Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            des: "N&H Handmade Coconut Shell Two Toned Lotus Shaped Table Top Water Fountain"

          },
          {
            id: 3,
            name: 'Brass cabinet pull',
            href: '#',
            imageSrc:"https://static.asianpaints.com/content/dam/asian_paints/resources/aphomes-categorypage/furniture/ap-homes-usage-furniture-living-room-asian-paints.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            des: "N&H Handmade Coconut Shell Two Toned Lotus Shaped Table Top Water Fountain"

          },
          {
            id: 4,
            name: 'Wooden bed',
            href: '#',
            imageSrc:"https://imgmedia.lbb.in/media/2022/05/62736afa42d07e2c4a83ea34_1651731194487.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            des: "N&H Handmade Coconut Shell Two Toned Lotus Shaped Table Top Water Fountain"
          }, {
            id: 5,
           name: 'nicket cabinet pull',
            href: '#',
            imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtEV_BTV53q_pwsbgsl79Nk1b7a1522t_6g&usqp=CAU",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color:"black",
            des: "N&H Handmade Coconut Shell Two Toned Lotus Shaped Table Top Water Fountain",
          }
          , {
            id: 6,
           name: 'nicket cabinet pull',
            href: '#',
            imageSrc:"https://i.pinimg.com/564x/52/66/40/52664088bb364f0b2ff731cdb88eedee.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            des: "N&H Handmade Coconut Shell Two Toned Lotus Shaped Table Top Water Fountain"

          }
          , {
            id: 7,
           name: 'nicket cabinet pull',
            href: '#',
            imageSrc:"https://i.pinimg.com/564x/a0/ed/b0/a0edb091eccb6084362613756cc06203.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            des: "N&H Handmade Coconut Shell Two Toned Lotus Shaped Table Top Water Fountain"

          }
          , {
            id: 8,
           name: 'nicket cabinet pull',
            href: '#',
            imageSrc:"https://i.pinimg.com/564x/94/0e/cb/940ecb862d684587726ef15db97b8e8b.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
            des: "N&H Handmade Coconut Shell Two Toned Lotus Shaped Table Top Water Fountain"

          }
          
      ]
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Best Sellers</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div  className="w-150 overflow-hidden  rounded-md bg-gray-200 lg:aspect-none  group-hover:opacity-75 lg:h-80">
                <img   onClick={handleOpen}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-100 object-cover object-center lg:h-full lg:w-full"
              
                />
                
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                <a className=' text-2xl font-semibold text-gray-900 dark:text-white' href={product.href}>
                   <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                 <p className="text-m font-medium text-black-900">{product.price}</p>
                 
              </div>
              <p   className="mt-1 text-sm text-gray-500">{product.des}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Products
