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
        image:"https://cityfurnish.com/blog/wp-content/uploads/2023/04/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg-min-1200x900.jpg",
      },
      {
        id: 3,
        image:"https://cityfurnish.com/blog/wp-content/uploads/2023/04/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg-min-1200x900.jpg",
      },,
  ]; 
  const info = [
    {
      id: 1,
      info:"3 x 3/8 x 6 mm"
    },
    {
        id: 2,
        info:"3 x 3/8 x 12 mm"
    },
    {
        id: 3,
        info:"3 x 3/8 x 18 mm"
    },,
  ];
  const inform = [
    {
      id: 1,
      info:"SS"
    },
    {
        id: 2,
        info:"Rose Gold"
    },
    {
        id: 3,
        info:"CP"
    },
    ,
    {
        id: 4,
        info:"White PVC"
    },
    ,
    {
        id: 5,
      info:"Brown PVC"
    },
    ,
    {
        id: 6,
        info:"Satin"
    },

  ];  


  const handleSidebarImageClick = (image) => {
    setMainImage(image.image); 
 };
  return (
    <div>
      <div className="flex justify-center items-start ">
        <div className="w-20 h-50 m-5">
          {sidebarImages.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleSidebarImageClick(image)}
              className={`w-50 mb-5  cursor-pointer ${
                mainImage === image.image ? "border-2 border-gray-200" : ""
              }`}
            />
          ))}
        </div>
        <div className="w-3/5 mr-4">
          <img src={mainImage} alt="Main Product" className="w-100 m-5" />
        </div>

        <div className="w-50 m-5">
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
          <div className="box-border border-gray-300 h-32 w-50 p-4 m-2 border-2 px-4 py-2 rounded ">
            <p className="text-gray-700 mb-2">
              Special Offers: FREE delivery Thursday, <br></br>14 December.
              Details Or fastest delivery Tomorrow, 13 December. Order within 5
              hrs 2 mins
            </p>
          </div>
          <div className='flex'>
      {inform.map((des, index) => (
          <div className=" box-border border-gray-200 border-2 m-1 h-30 w-20 bg-white  text-black  px-4 py-2 rounded hover:bg-gray-200">
           <p className='text-center'>{des.info}</p>
          </div>
          ))}
          </div>
      <div className='flex'>
      {info.map((des, index) => (
          <div className=" box-border border-gray-200 border-2 m-5 h-30 w-30 bg-white  text-black  px-4 py-2 rounded hover:bg-gray-200">
           <p>{des.info}</p>
          </div>
          ))}
          </div>
          <div className="h-10 w-50 p-4 m-2 border-1">
            <p className="text-gray-700 mb-2 ">
              {" "}
              ₹42.25 excl. GST ₹49.86 incl. GST ₹65 (23.30 % off )
            </p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-black">
            Buy Now
          </button>
          <button className="bg-black  m-5 text-white px-4 py-2 rounded hover:bg-black">
            Add to cart
          </button>
          <Card className="h-full w-full">
            <table className="w-full min-w-max  table-auto text-left">
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
                        className="font-normal leading-none opacity-70"
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
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Typography>
                    </td>
                    <td className="p-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
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