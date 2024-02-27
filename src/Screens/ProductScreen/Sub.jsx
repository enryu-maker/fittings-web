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
    console.log("started")
    setLoading(true)
    setProducts([])
    dispatch(GetProducts(state?.id, setProducts, setLoading))
    console.log("product", products)
  }, [1])
  return (
    <div className="mt-[180px] font-Raleway">
      <div className="mx-auto ">
        <p className="text-left ml-8 text-4xl">{state?.sub_category_name}</p>
        <div className="grid grid-cols-4 gap-4">
          <Card className="h-[calc(100vh-2rem)] font-Raleway w-full max-w-[20rem] p-4 shadow-none">
            <div className="mb-2 flex items-center gap-4 p-4">
              <Typography
                className="font-Raleway"
                variant="h5" color="blue-gray">
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
                    <Typography color="blue-gray" className="mr-auto font-normal">
                      Price
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className=" font-Raleway py-1">
                  <List className="p-0">
                    <div className="w-40">
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
                    <Typography color="blue-gray" className="mr-auto font-normal">
                      Product type
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Orders
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Products
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 3}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                      }`}
                  />
                }
              >
                <ListItem className="p-0 font-Raleway" selected={open === 2}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                      Availability
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Orders
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Products
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <hr className="my-2 border-blue-gray-50" />
            </List>
          </Card>
          <div className="h-50  grid grid-cols-subgrid gap-4 col-span-3">
            {
              loading ?
              <div className="flex justify-center items-center h-[40vh]">
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
                :
                products?.products?.map((product, index) => (
                  <Card
                    key={index}
                    className="w-74  m-2 shadow-lg" onClick={(e) => handleSubmit(e)} >
                    <CardHeader floated={false} color="blue-gray">
                      <img src={product.imageSrc} alt="ui/ux review check" className="h-80" />
                      <div className="to-bg-black-10 absolute inset-0 h-full  bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                      <IconButton
                        size="sm"
                        color="red"
                        variant="text"
                        className="!absolute top-4 right-4 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                      </IconButton>
                    </CardHeader>
                    <CardBody>
                      <div className="mb-3 flex items-center justify-between">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="font-medium"
                        >
                          Wooden House, Florida
                        </Typography>
                        <Typography
                          color="blue-gray"
                          className="flex items-center gap-1.5 font-normal"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          5.0
                        </Typography>

                      </div>
                      <p>{product.des}</p>
                    </CardBody>
                  </Card>
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sub;