
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pincode from "pincode-distance"
function Cartcheckout() {
    const Pincode = new pincode();
    const distance = Pincode.getDistance("826001", "828111");
    const navigate = useNavigate()
    const cart = useSelector(state => state.Reducers.cart)
    function getTotal(cart) {
        var total = 0
        cart.map((item, index) => {
            total += item?.price?.price_map[0]?.price_with_gst * item?.qty
        })
        return total;
    }
    const summary = {
        subtotal: 56.00,
        discount: { amount: 28.00, percentage: 50 },
        shipping: 0.0,
        total: 36.00
    };

    return (
        <div>
            <div className="py-14 px-16  font-Raleway">
                <div className="flex justify-between py-10 items-center mt-[50px]">
                    <h1 className="text-3xl  text-gray-800 py-2 tracking-widest">Secure Checkout</h1>
                </div>
                <div className="  shadow-lg p-5 flex flex-col grid-cols-3 md:flex-row justify-between space-y-8 md:space-y-0">
                    <div className="w-[60%]">
                        <h1 className="text-lg  text-black  tracking-widest">Delivery Address</h1>
                        <div className='flex flex-wrap justify-between w-full space-y-1 '>
                            <div className='w-[45%]'>
                                <label
                                    htmlFor="email"
                                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                                >
                                    Name <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        // value={data.email}
                                        onChange={(e) => {
                                            // setData({ ...data, email: e.target.value });
                                        }}
                                        required
                                        className="block w-full p-5 border-2 py-1.5 text-gray-900"
                                    />
                                </div>
                            </div>
                            <div className='w-[45%]'>
                                <label
                                    htmlFor="mobile"
                                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                                >
                                    Mobile Number <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="tel"
                                        autoComplete="tel"
                                        // value={data.email}
                                        onChange={(e) => {
                                            // setData({ ...data, email: e.target.value });
                                        }}
                                        required
                                        className="block w-full p-5 border-2 py-1.5 text-gray-900"
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <label
                                    htmlFor="company"
                                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                                >
                                    Company <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        // value={data.email}
                                        onChange={(e) => {
                                            // setData({ ...data, email: e.target.value });
                                        }}
                                        required
                                        className="block w-full p-5 border-2 py-1.5 text-gray-900"
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <label
                                    htmlFor="address"
                                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                                >
                                    Address <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        autoComplete='address-level1'
                                        // value={data.email}
                                        onChange={(e) => {
                                            // setData({ ...data, email: e.target.value });
                                        }}
                                        required
                                        className="block w-full p-5 border-2 py-1.5 text-gray-900"
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <label
                                    htmlFor="address"
                                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                                >
                                    Apartment, suite, etc. <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        autoComplete='address-level1'
                                        // value={data.email}
                                        onChange={(e) => {
                                            // setData({ ...data, email: e.target.value });
                                        }}
                                        required
                                        className="block w-full p-5 border-2 py-1.5 text-gray-900"
                                    />
                                </div>
                            </div>
                            <div className='w-[45%]'>
                                <label
                                    htmlFor="city"
                                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                                >
                                    City <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        // value={data.email}
                                        onChange={(e) => {
                                            // setData({ ...data, email: e.target.value });
                                        }}
                                        required
                                        className="block w-full p-5 border-2 py-1.5 text-gray-900"
                                    />
                                </div>
                            </div>
                            <div className='w-[45%]'>
                                <label
                                    htmlFor="state"
                                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                                >
                                    State <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="state"
                                        name="state"
                                        type="text"
                                        // value={data.email}
                                        onChange={(e) => {
                                            // setData({ ...data, email: e.target.value });
                                        }}
                                        required
                                        className="block w-full p-5 border-2 py-1.5 text-gray-900"
                                    />
                                </div>
                            </div>
                            <div className='w-[45%]'>
                                <label
                                    htmlFor="country"
                                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                                >
                                    Country <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        disabled
                                        id="country"
                                        name="country"
                                        type="text"
                                        value={"India"}
                                        onChange={(e) => {
                                            // setData({ ...data, email: e.target.value });
                                        }}
                                        required
                                        className="block w-full bg-gray-200 p-5 border-2 py-1.5 text-gray-900"
                                    />
                                </div>
                            </div>
                            <div className='w-[45%]'>
                                <label
                                    htmlFor="pincode"
                                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                                >
                                    Pincode <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="pincode"
                                        name="pincode"
                                        type="tel"
                                        // value={"India"}
                                        onChange={(e) => {
                                            // setData({ ...data, email: e.target.value });
                                        }}
                                        required
                                        className="block w-full  p-5 border-2 py-1.5 text-gray-900"
                                    />
                                </div>
                            </div>
                        </div>
                        <h1 className="text-lg  text-black  tracking-widest pt-5">Payment Method</h1>
                        <h1 className="text-lg  text-black  tracking-widest pt-5">{distance}</h1>
                        
                    </div>
                    <div className="w-full md:w-1/3   ">
                        {cart?.map((product, index) => (
                            <div key={index} className="flex items-start space-x-4 ">
                                <img className="w-32 md:w-30 h-auto" src={product?.finish?.images[0]?.image} alt={product.name} />
                                <div>
                                    <h2 className="text-xl tracking-widest font-regular  text-[#df633a]">{product?.name}</h2>
                                    <p className="text-sm tracking-widest text-gray-600">Finish: {product?.finish?.finish?.title}</p>
                                    <p className="text-sm tracking-widest text-gray-600">Size: {product?.price?.size}</p>
                                    <p className="text-sm tracking-widest text-gray-600">Price: ₹{product?.price?.price_map[0]?.price_with_gst}</p>
                                    <div className="flex items-center space-x-4 mt-2">
                                        <p className="text-base  tracking-widest text-gray-600">Quantity: {product?.qty}</p>
                                        <p className="text-base tracking-widest text-gray-600">Total : ₹ {product?.qty * product?.price?.price_map[0]?.price_with_gst}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="bg-gray-50 shadow-lg p-6">
                            <h2 className="text-xl font-regular tracking-wider  text-gray-800">Summary</h2>
                            <div className="flex justify-between items-center mt-4 border-b pb-4">
                                <p className="text-base text-gray-800">Subtotal</p>
                                <p className="text-base text-gray-800">₹ {getTotal(cart)}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4 border-b pb-4">
                                <p className="text-base text-gray-800">Shipping</p>
                                <p className="text-base text-gray-800">₹ {summary.shipping.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-base  text-gray-800">Total</p>
                                <p className="text-base  text-gray-800">₹ {summary.shipping + getTotal(cart)}</p>
                            </div>
                            <button
                                onClick={() => {

                                }}
                                className=" w-full mt-4  bg-[#df633a] hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm ">Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cartcheckout;