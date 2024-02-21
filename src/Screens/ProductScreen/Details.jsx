import React, { useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router";

const Details = () => {

  const TABLE_HEAD = ["Product details", "", "", ""];
  const [mainImage, setMainImage] = useState(null);
  const TABLE_ROWS = [
    {
      name: "SKU",
      job: "MAG-100208.00",
    },
    {
      name: "MODEL NO.",
      job: "100208",
    },
    {
      name: "UNIT",
      job: "PCS",
    },
    {
      name: "DELIVERY TIME",
      job: "1 Days",
    },
    {
      name: "GST",
      job: "18",
    },
    ,
    {
      name: "SIZE",
      job: "3 x 3/8 x 6 mm",
    },
    {
      name: "FINISH",
      job: "Matt",
    },
    {
      name: "MATERIAL TYPE",
      job: "Stainless Steel",

    },
  ];

  const sidebarImages = [
    {
      id: 1,
      image:
        "https://cityfurnish.com/blog/wp-content/uploads/2023/04/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg-min-1200x900.jpg",
    },
    {
      id: 2,
      image: "https://cityfurnish.com/blog/wp-content/uploads/2023/04/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg-min-1200x900.jpg",
    },
    {
      id: 3,
      image: "https://cityfurnish.com/blog/wp-content/uploads/2023/04/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg-min-1200x900.jpg",
    }, ,
  ];
  const info = [
    {
      id: 1,
      info: "3 x 3/8 x 6 mm"
    },
    {
      id: 2,
      info: "3 x 3/8 x 12 mm"
    },
    {
      id: 3,
      info: "3 x 3/8 x 18 mm"
    }, ,
  ];
  const inform = [
    {
      id: 1,
      info: "SS"
    },
    {
      id: 2,
      info: "Rose Gold"
    },
    {
      id: 3,
      info: "CP"
    },
    ,
    {
      id: 4,
      info: "White PVC"
    },
    ,
    {
      id: 5,
      info: "Brown PVC"
    },
    ,
    {
      id: 6,
      info: "Satin"
    },

  ];


  const handleSidebarImageClick = (image) => {
    setMainImage(image.image);
  };
  return (
    <div className='mt-[180px] font-Raleway transition-all'>
      <div className="flex justify-evenly items-start ">
        <div className="w-20 h-50 m-5">
          {sidebarImages.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleSidebarImageClick(image)}
              className={`w-50 mb-5  cursor-pointer ${mainImage === image.image ? "border-2 border-gray-200" : ""
                }`}
            />
          ))}
        </div>
        <div className="w-[40%]">
          <img src={mainImage} alt="Main Product" className="w-100 m-5" />
        </div>

        <div className="w-[40%] space-y-5 mt-5 ">
          <h2 className="text-xl font-bold  mb-4">Product Details</h2>
          <p className="text-gray-700 mb-2">Price: $200</p>
          <p className="text-gray-700 mb-2">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <p className="text-gray-700 mb-2">
            Special Offers: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <div className="border-2  p-4 my-2 px-4 py-2  ">
            <p className="text-gray-700 mb-2">
              Special Offers: FREE delivery Thursday, <br></br>14 December.
              Details Or fastest delivery Tomorrow, 13 December. Order within 5
              hrs 2 mins
            </p>
          </div>
          <div className='flex space-x-2'>
            {inform.map((des, index) => (
              <button className=" box-border border-gray-200 border-2  bg-white  text-black  px-4 py-2  hover:bg-gray-200">
                <p className='text-center'>{des.info}</p>
              </button>
            ))}
          </div>
          <div className='flex space-x-2'>
            {info.map((des, index) => (
              <button className=" box-border border-gray-200 border-2 h-30 w-30 bg-white  text-black  px-4 py-2  hover:bg-gray-200">
                <p>{des.info}</p>
              </button>
            ))}
          </div>
          <div className="">
            <p className="text-gray-700 mb-2 ">
              {" "}
              ₹42.25 excl. GST ₹49.86 incl. GST ₹65 (23.30 % off )
            </p>
          </div>
          <div className=' space-x-3'>
            <button
              className=" justify-center  bg-black hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
            >
              Buy Now
            </button>
            <button
              className=" justify-center  bg-black hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
            >
              Add to Cart
            </button>
          </div>

          <Card className="h-full w-full shadow-none font-Raleway ">
            <table className="w-full min-w-max  border-2 table-auto text-left mb-5">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal font-Raleway leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, job, date }, index) => (
                  <tr key={name} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-Raleway"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-Raleway"
                      >
                        {job}
                      </Typography>
                    </td>
                    <td className="p-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-Raleway"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className="p-4"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
      {/* <div className="w-50 m-5">
        <h2 className="text-xl font-bold  mb-4">Product Name</h2>
        <p className="text-gray-700 mb-2">
          Special Offers: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </div> */}
    </div>
  );
};

export default Details;