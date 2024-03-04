import React, { useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { GetProduct } from '../../Store/actions';
import { Oval } from 'react-loader-spinner';

const Details = () => {
  let id = useLocation()
  id = id.pathname.split("/").pop();
  const dispatch = useDispatch()
  const role = useSelector(state => state.Reducers.role)
  const [data, setData] = React.useState({})
  const [currentSize, setCurrentSize] = React.useState(0)
  const [currentFinish, setCurrentFinish] = React.useState(0)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    dispatch(GetProduct(id, role, setData, setLoading))
  }, [data])
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





  const handleSidebarImageClick = (image) => {
    setMainImage(image.image);
  };
  if (loading) {
    return (
      <div className='h-screen w-screen'>
        <Oval
          visible={true}
          height="40"
          width="40"
          color="#000"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />

      </div>
    )
  }
  else {
    return (
      <div className='mt-[180px] font-Raleway transition-all'>
        <div className="flex justify-evenly items-start ">
          {/* <div className="w-20 h-50 m-5">
            {data?.product_images[0]?.images?.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt={`prod_img ${index + 1}`}
                onClick={() => {
                  handleSidebarImageClick(image)
                  setCurrentFinish(index)
                }}
                className={`w-50 mb-5 bg-black  cursor-pointer ${mainImage === image.image ? "border-2 border-gray-200" : ""
                  }`}
              />
            ))}
          </div> */}
          <div className="w-[40%]">
            <img src={mainImage} alt="Main Product" className="w-100 m-5" />
          </div>

          <div className="w-[40%] space-y-5 mt-5 ">
            <h2 className="text-xl font-bold  mb-4">{data?.product_name}</h2>
            <p className="text-gray-700 mb-2">Price: $200</p>
            <p className="text-gray-700 mb-2">
              Description: {data?.description}
            </p>
            <div className='flex space-x-2'>
              {data?.product_images?.map((des, index) => (
                <button
                  className=" box-border border-gray-200 border-2  bg-white  text-black  px-4 py-1  hover:bg-gray-200">
                  <p className='text-center'>{des?.finish?.title}</p>
                </button>
              ))}
            </div>
            <div className='flex space-x-2'>
              {data?.size_chart?.map((des, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSize(index)
                    console.log(index)
                    console.log('current size', data?.size_chart[currentSize])
                  }}
                  className=" box-border border-gray-200 border-2 h-30 w-30 bg-white  text-black  px-4 py-2  hover:bg-gray-200">
                  <p>{des?.size}</p>
                </button>
              ))}
            </div>
            <div className="">
              {/* <p
                className="text-left font-Raleway font-bold text-lg w-full">
                ₹{Math.round(parseInt(data?.size_chart[currentSize]?.price_map[0]?.price_with_gst) - parseInt(data?.size_chart[currentSize]?.price_map[0]?.price_with_gst) * (parseInt(data?.size_chart[currentSize]?.price_map[0]?.gst_percent) / 100))} without GST
              </p>
              <p
                className="text-left font-Raleway font-bold text-base w-full">
                ₹{data?.size_chart[currentSize]?.price_map[0]?.price_with_gst} with GST
              </p> */}
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
  }
};

export default Details;