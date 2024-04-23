import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pincode from 'pincode-distance';
import { createOrder } from '../../Store/actions';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cartcheckout() {
  const Pincode = new pincode();
  const [items, setItems] = React.useState([]);
  const [pay, setPay] = React.useState('cod');
  const [address, setAddress] = React.useState({
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: 'India',
  });
  const [loading, setLoading] = React.useState(false);
  const [contact, setContact] = React.useState({
    name: '',
    contact_number: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.Reducers.cart);
  function getTotal(cart) {
    var total = 0;
    cart.map((item, index) => {
      total += item?.price?.price_map[0]?.price_with_gst * item?.qty;
    });
    return total;
  }
  function getProduct() {
    cart.map((item, index) => {
      if (items.length > 1) {
        if (items.some((e) => e?.product_id != item?.id)) {
          items.push({
            product_id: item?.id,
            size_id: item?.price?.id,
            quantity: item?.qty,
          });
        }
      } else {
        items.push({
          product_id: item?.id,
          size_id: item?.price?.id,
          quantity: item?.qty,
        });
      }
    });
    return items;
  }

  const [data, setData] = React.useState({
    payment_method: pay,
    items: items,
    address: address,
    contact_details: contact,
    total: getTotal(cart),
  });

  function getDistance(pincode) {
    if (pincode != '') {
      return Pincode.getDistance('826001', pincode);
    } else {
      return 0;
    }
  }
  const summary = {
    subtotal: 56.0,
    discount: { amount: 28.0, percentage: 50 },
    shipping: Math.round(getDistance(address?.zipcode) * 3),
    total: 36.0,
  };
  return (
    <div>
      <div className='py-14 px-16  font-Raleway'>
        <div className='flex justify-between py-10 items-center mt-[50px]'>
          <h1 className='md:text-3xl text-2xl  text-gray-800 py-2 tracking-widest'>
            Secure Checkout
          </h1>
        </div>
        <div className='  shadow-lg p-5 flex flex-col grid-cols-3 md:flex-row justify-between space-y-8 md:space-y-0'>
          <div className='md:w-[60%]'>
            <h1 className='text-lg  text-black  tracking-widest'>
              Delivery Address
            </h1>
            <div className='flex flex-wrap justify-between w-full space-y-1 '>
              <div className='md:w-[45%]'>
                <label
                  htmlFor='name'
                  className='block text-sm text-left font-medium leading-6 text-gray-900'>
                  Name <span className='text-red-600'>*</span>
                </label>
                <div className='mt-2'>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    value={contact.name}
                    onChange={(e) => {
                      setContact({ ...contact, name: e.target.value });
                    }}
                    required
                    className='block w-full p-5 border-2 py-1.5 text-gray-900'
                  />
                </div>
              </div>
              <div className='md:w-[45%]'>
                <label
                  htmlFor='mobile'
                  className='block text-sm text-left font-medium leading-6 text-gray-900'>
                  Mobile Number <span className='text-red-600'>*</span>
                </label>
                <div className='mt-2'>
                  <input
                    id='mobile'
                    name='mobile'
                    type='tel'
                    autoComplete='tel'
                    value={contact.contact_number}
                    onChange={(e) => {
                      setContact({
                        ...contact,
                        contact_number: e.target.value,
                      });
                    }}
                    required
                    className='block w-full p-5 border-2 py-1.5 text-gray-900'
                  />
                </div>
              </div>

              <div className='w-full'>
                <label
                  htmlFor='address'
                  className='block text-sm text-left font-medium leading-6 text-gray-900'>
                  Address <span className='text-red-600'>*</span>
                </label>
                <div className='mt-2'>
                  <input
                    id='address'
                    name='address'
                    type='text'
                    autoComplete='additional-name'
                    value={address.street}
                    onChange={(e) => {
                      setAddress({ ...address, street: e.target.value });
                    }}
                    required
                    className='block w-full h-20 p-5 border-2 py-1.5 text-gray-900'
                  />
                </div>
              </div>

              <div className='md:w-[45%]'>
                <label
                  htmlFor='city'
                  className='block text-sm text-left font-medium leading-6 text-gray-900'>
                  City <span className='text-red-600'>*</span>
                </label>
                <div className='mt-2'>
                  <input
                    id='city'
                    name='city'
                    type='text'
                    value={address.city}
                    onChange={(e) => {
                      setAddress({ ...address, city: e.target.value });
                    }}
                    required
                    className='block w-full p-5 border-2 py-1.5 text-gray-900'
                  />
                </div>
              </div>
              <div className='md:w-[45%]'>
                <label
                  htmlFor='state'
                  className='block text-sm text-left font-medium leading-6 text-gray-900'>
                  State <span className='text-red-600'>*</span>
                </label>
                <div className='mt-2'>
                  <input
                    id='state'
                    name='state'
                    type='text'
                    value={address.state}
                    onChange={(e) => {
                      setAddress({ ...address, state: e.target.value });
                    }}
                    required
                    className='block w-full p-5 border-2 py-1.5 text-gray-900'
                  />
                </div>
              </div>
              <div className='w-[45%]'>
                <label
                  htmlFor='country'
                  className='block text-sm text-left font-medium leading-6 text-gray-900'>
                  Country <span className='text-red-600'>*</span>
                </label>
                <div className='mt-2'>
                  <input
                    disabled
                    readOnly
                    id='country'
                    name='country'
                    type='text'
                    value={'India'}
                    onChange={(e) => {
                      // setData({ ...data, email: e.target.value });
                    }}
                    required
                    className='block w-full bg-gray-200 p-5 border-2 py-1.5 text-gray-900'
                  />
                </div>
              </div>
              <div className='w-[45%]'>
                <label
                  htmlFor='pincode'
                  className='block text-sm text-left font-medium leading-6 text-gray-900'>
                  Pincode <span className='text-red-600'>*</span>
                </label>
                <div className='mt-2'>
                  <input
                    id='pincode'
                    name='pincode'
                    type='tel'
                    value={address?.zipcode}
                    onChange={(e) => {
                      setAddress({ ...address, zipcode: e.target.value });
                    }}
                    required
                    className='block w-full  p-5 border-2 py-1.5 text-gray-900'
                  />
                </div>
              </div>
            </div>
            <h1 className='text-lg  text-black  tracking-widest pt-5'>
              Payment Method <span className='text-red-600'>*</span>{' '}
            </h1>
            <div className='w-[15%] flex items-center space-x-4 mt-2'>
              <label
                htmlFor='pincode'
                className='block text-base text-left font-bold leading-6 text-gray-900'>
                Cash
              </label>
              <div className=''>
                <input
                  id='pincode'
                  name='pincode'
                  type='radio'
                  checked={pay === 'cod'}
                  // value={"India"}
                  onChange={(e) => {
                    setPay('cod');
                  }}
                  required
                  className='block w-full  p-5 border-2 py-1.5 text-gray-900'
                />
              </div>
            </div>
            <div className='w-[15%] flex items-center  space-x-4 mt-2'>
              <label
                htmlFor='pincode'
                className='block text-base text-left font-bold leading-6 text-gray-900'>
                Online
              </label>
              <div className=''>
                <input
                  id='pincode'
                  name='pincode'
                  type='radio'
                  checked={pay === 'online'}
                  // value={"India"}
                  onChange={(e) => {
                    setPay('online');
                  }}
                  required
                  className='block w-full  p-5 border-2 py-1.5 text-gray-900'
                />
              </div>
            </div>
          </div>
          <div className='w-full md:w-[36%]   '>
            {cart?.map((product, index) => (
              <div
                key={index}
                className='flex items-start space-x-4 '>
                <img
                  className='w-32 md:w-30 h-auto'
                  src={product?.finish?.images[0]?.image}
                  alt={product.name}
                />
                <div>
                  <h2 className='text-xl tracking-widest font-regular  text-[#df633a]'>
                    {product?.name}
                  </h2>
                  <p className='text-sm tracking-widest text-gray-600'>
                    Finish: {product?.finish?.finish?.title}
                  </p>
                  <p className='text-sm tracking-widest text-gray-600'>
                    Size: {product?.price?.size}
                  </p>
                  <p className='text-sm tracking-widest text-gray-600'>
                    Price: ₹{product?.price?.price_map[0]?.price_with_gst}
                  </p>
                  <div className='flex items-center space-x-4 mt-2'>
                    <p className='text-base  tracking-widest text-gray-600'>
                      Quantity: {product?.qty}
                    </p>
                    <p className='text-base tracking-widest text-gray-600'>
                      Total : ₹{' '}
                      {product?.qty *
                        product?.price?.price_map[0]?.price_with_gst}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className='bg-gray-50 shadow-lg p-6 mt-2'>
              <h2 className='text-xl font-regular tracking-wider  text-gray-800'>
                Summary
              </h2>
              <div className='flex justify-between items-center mt-4 border-b pb-4'>
                <p className='text-base text-gray-800'>Subtotal</p>
                <p className='text-base text-gray-800'>₹ {getTotal(cart)}</p>
              </div>
              <div className='flex justify-between items-center mt-4 border-b pb-4'>
                <p className='text-base text-gray-800'>
                  Shipping / Delivery cost
                </p>
                <p className='text-base text-gray-800'>
                  ₹ {summary.shipping.toFixed(2)}
                </p>
              </div>
              <div className='flex justify-between items-center mt-4'>
                <p className='text-base  text-gray-800'>Total</p>
                <p className='text-base  text-gray-800'>
                  ₹ {summary.shipping + getTotal(cart)}
                </p>
              </div>
              <button
                onClick={() => {
                  if (address.street==="" || address.city==="" || address.zipcode==="" ||  address.state==="" || contact.name==="" || contact.contact_number===""){
                    toast.error("Please fill all the fields", {
                      position: "top-center",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                  });
                  }
                  else{
                    data['payment_method'] = pay;
                    data['items'] = getProduct();
                    data['address'] = address;
                    data['contact_details'] = contact;
                    getDistance(address?.zipcode);
                    data['total'] = getTotal(cart) + summary.shipping;
                    dispatch(createOrder(setLoading, data, navigate));
                  }
                  
                }}
                className=' w-full mt-4  bg-[#df633a] hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm '>
                {loading ? (
                  <Oval
                    visible={true}
                    height='20'
                    width='20'
                    color='#df633a'
                    secondaryColor='#df633a40'
                    ariaLabel='oval-loading'
                    wrapperStyle={{}}
                    wrapperClass=''
                  />
                ) : (
                  ' Place order'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cartcheckout;
