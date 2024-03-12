import React from "react";
import { Slider } from "@material-tailwind/react";

import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Drawer,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,

} from "@heroicons/react/24/outline";
import { useNavigate, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { GetProducts } from "../../Store/actions";
import { Oval } from "react-loader-spinner";


function Sub() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(0);
  const { state } = useLocation()
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/details")
  };
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const dispatch = useDispatch()
  React.useEffect(() => {
    setLoading(true)
    setProducts([])
    dispatch(GetProducts(state?.id, setProducts, setLoading))
  }, [1])
  console.log(products)
  return (
    <div className="mt-[180px] w-full font-Raleway">
      <div className="mx-auto ">
        <p className="text-left ml-8 text-4xl">{state?.sub_category_name}</p>
        {/* <div className="grid grid-cols-4 gap-4"> */}
          {/* <Card className="h-[calc(100vh-2rem)] font-Raleway w-full max-w-[20rem] p-4 shadow-none">
            <div className="mb-2 flex items-center gap-4 p-4">
              <Typography
                className="font-Raleway text-lg "
              >
                Filter By
              </Typography>
            </div>
            <div className="p-2">
              <Input
                className="font-Raleway"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                label="Search"
              />

            </div>
            <List>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                      }`}
                  />
                }
              >
                <ListItem className=" font-Raleway p-0" selected={open === 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography className="mr-auto  font-Raleway ">
                      Price
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className=" font-Raleway py-1">
                  <List className="p-0">
                    <div className="w-60 m-5">
                      <Slider defaultValue={30} />
                    </div>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 2}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                      }`}
                  />
                }
              >
                <ListItem className="font-Raleway p-0" selected={open === 2}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography className="mr-auto  font-Raleway ">
                      Sort By
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Low to High
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      High to Low
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <hr className="my-2 border-blue-gray-50" />
            </List>
          </Card> */}
          <div className="flex flex-wrap items-start mt-2 justify-evenly w-[100%] py-5">

            {
              loading ?
                <div className="flex justify-center items-center w-[70vw] h-[40vh]">
                  <Oval
                    visible={true}
                    height="40"
                    width="40"
                    color="#df633a"
                    secondaryColor='#df633a40'
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
                :
                products?.products?.map((product, index) => (
                  <a
                    href={"#/details/" + product?.id}
                    key={index}
                    className=" px-2 flex flex-col h-[300px] justify-evenly items-center cursor-pointer "
                  >
                    <img
                      alt="icon"
                      src={product?.product_images[0]?.images[0].image}
                      className="w-[180px] h-[180px]  object-contain"
                    />
                    <p
                      className="text-left  font-Raleway  text-base w-full">
                      {product?.product_name}
                    </p>
                    <p
                      className="text-justify font-Raleway text-sm w-full">
                      {product?.description?.slice(0, 100)}
                    </p>
                    <p
                      className="text-left font-Raleway  text-2xl w-full text-[#df633a]">
                ₹{Math.round(parseInt(product?.size_chart[0]?.price_map[0]?.price_with_gst) / (parseInt(100) + (parseInt(product?.size_chart[0]?.price_map[0]?.gst_percent)))*100)} without GST

                    </p>
                    <p
                      className="text-left font-Raleway  text-base w-full">
                      ₹{product?.size_chart[0]?.price_map[0]?.price_with_gst} with GST
                    </p>
                    <div className=' space-x-3 w-full justify-between items-center'>
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
                    </div>
                  </a>
                ))}
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}
export default Sub;