
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Cartcheckout() {
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
            <div className="py-14 px-4 md:px-20 2xl:px-40 font-Raleway">
                <div className="flex justify-between items-center mt-[100px]">
                    <h1 className="text-3xl  text-gray-800 py-2 font-semibold tracking-widest">Checkout</h1>
                </div>
                <div className="  shadow-lg p-10 flex flex-col grid-cols-3 md:flex-row justify-between space-y-8 md:space-y-0">
                    <div className="w-[60%]">
                        {cart?.map((product, index) => (
                            <div key={index} className="flex items-start space-x-4 pb-4 border-b-2">
                                <img className="w-32 md:w-40 h-auto" src={product?.finish?.images[0]?.image} alt={product.name} />
                                <div>
                                    <h2 className="text-xl tracking-widest font-semibold  text-[#df633a]">{product?.name}</h2>
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
                    </div>
                    <div className="w-full md:w-1/3 ">
                        <div className="bg-gray-50 shadow-lg p-6">
                            <h2 className="text-xl font-semibold tracking-wider  text-gray-800">Summary</h2>
                            <div className="flex justify-between items-center mt-4 border-b pb-4">
                                <p className="text-base text-gray-800">Subtotal</p>
                                <p className="text-base text-gray-800">₹ {getTotal(cart)}</p>
                            </div>
                            {/* <div className="flex justify-between items-center mt-4 border-b pb-4">
                                <p className="text-base text-gray-800">Discount </p>
                                <p className="text-base text-gray-800">-${summary.discount.amount.toFixed(2)} ({summary.discount.percentage}%)</p>
                            </div> */}
                            <div className="flex justify-between items-center mt-4 border-b pb-4">
                                <p className="text-base text-gray-800">Shipping</p>
                                <p className="text-base text-gray-800">₹ {summary.shipping.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-base  text-gray-800">Total</p>
                                <p className="text-base  text-gray-800">₹ {summary.shipping + getTotal(cart)}</p>
                            </div>
                            <button 
                            onClick={()=>{
                                
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