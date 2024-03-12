
import React from 'react';

function Cartcheckout() {
    const products = [
        {
            name: "Premium Quaility Furniture",
            price: 36.00,
            quantity: 1,
            imageUrl: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg",
            style: "Italic Minimal Design",
            size: "Small",
            color: "Light Blue"
        },
        {
            name: "High Quaility Italic Furniture",
            price: 20.00,
            quantity: 1,
            imageUrl: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709078400&semt=ais",
            style: "Italic Minimal Design",
            size: "Small",
            color: "Light Blue"
        }
    ];

    const summary = {
        subtotal: 56.00,
        discount: { amount: 28.00, percentage: 50 },
        shipping: 8.00,
        total: 36.00
    };

    const address = {
        shipping: "180 North King Street, Northhampton MA 1060",
        billing: "180 North King Street, Northhampton MA 1060"
    };

    return (
        <div>
            <div className="py-14 mt-10 px-4 md:px-20 2xl:px-40">
                <div className="flex justify-between items-center mb-10">
                    {/* <h1 className="text-3xl font-semibold text-gray-800">Order #13432</h1> */}
                </div>
                <div className=" mt-20 shadow-lg p-10 flex flex-col grid-cols-3 md:flex-row justify-between space-y-8 md:space-y-0">
                    <div className="w-60 md:w-2/3">
                        {products.map((product, index) => (
                            <div key={index} className="flex  items-start space-x-4 border-b pb-4">
                                <img className="w-32 md:w-40 h-auto" src={product.imageUrl} alt={product.name} />
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                                    <p className="text-sm text-gray-600">Style: {product.style}</p>
                                    <p className="text-sm text-gray-600">Size: {product.size}</p>
                                    <p className="text-sm text-gray-600">Color: {product.color}</p>
                                    <div className="flex items-center space-x-4 mt-2">
                                        <p className="text-base font-semibold text-gray-800">${product.price.toFixed(2)}</p>
                                        <p className="text-base text-gray-600">Quantity: {product.quantity}</p>
                                        <p className="text-base font-semibold text-gray-800">${(product.price * product.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full md:w-1/3 ">
                        <div className="bg-gray-50 shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
                            <div className="flex justify-between items-center mt-4 border-b pb-4">
                                <p className="text-base text-gray-800">Subtotal</p>
                                <p className="text-base text-gray-800">${summary.subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4 border-b pb-4">
                                <p className="text-base text-gray-800">Discount <span className="bg-gray-200 p-1 text-xs font-medium text-gray-800"></span></p>
                                <p className="text-base text-gray-800">-${summary.discount.amount.toFixed(2)} ({summary.discount.percentage}%)</p>
                            </div>
                            <div className="flex justify-between items-center mt-4 border-b pb-4">
                                <p className="text-base text-gray-800">Shipping</p>
                                <p className="text-base text-gray-800">${summary.shipping.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-base font-semibold text-gray-800">Total</p>
                                <p className="text-base font-semibold text-gray-800">${summary.total.toFixed(2)}</p>
                            </div>
                            <button className="mt-4 bg-gray-800 w-full text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none">Place order</button>

                        </div>
                    </div>
                </div>
                <div className="mt-10 shadow-lg">
                    <div className="bg-gray-50  p-6">
                        <h2 className="text-xl font-semibold text-gray-800">Customer</h2>
                        <div className=" flex flex-col md:flex-row justify-between mt-4">
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center space-x-4 pb-4 ">
                                    <img className="w-12 h-12 rounded-full" src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                    <div>
                                        <p className="text-base font-semibold text-gray-800">David Kent</p>
                                        <p className="text-sm text-gray-600">10 Previous Orders</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <img className="w-6 h-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg" alt="email" />
                                    <p className="text-sm leading-5 cursor-pointer">david89@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 mt-6 md:mt-0">
                                <div className="flex flex-col space-y-2">
                                    <p className="text-base font-semibold text-gray-800">Shipping Address</p>
                                    <p className="text-sm text-gray-600">{address.shipping}</p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <p className="text-base font-semibold text-gray-800">Billing Address</p>
                                    <p className="text-sm text-gray-600">{address.billing}</p>
                                </div>
                                <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none">Edit Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartcheckout;