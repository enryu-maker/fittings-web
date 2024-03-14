
import React from 'react';
import { useSelector } from 'react-redux';

function Cartcheckout() {
    const cart = useSelector(state => state.Reducers.cart)
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
        },
        {
            name: "High Quaility Italic Furniture",
            price: 20.00,
            quantity: 1,
            imageUrl: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709078400&semt=ais",
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
            <div className="py-14 mt-10 px-4 md:px-20 2xl:px-40 font-Raleway">
                <div className="flex justify-between items-center mb-10">
                    {/* <h1 className="text-3xl  text-gray-800">Order #13432</h1> */}
                </div>
                <div className=" mt-20 shadow-lg p-10 flex flex-col grid-cols-3 md:flex-row justify-between space-y-8 md:space-y-0">
                    <div className="w-60 md:w-2/3">
                        {products.map((product, index) => (
                            <div key={index} className="flex  items-start space-x-4 pb-4">
                                <img className="w-32 md:w-40 h-auto" src={product.imageUrl} alt={product.name} />
                                <div>
                                    <h2 className="text-xl  text-gray-800">{product.name}</h2>
                                    <p className="text-sm text-gray-600">Style: {product.style}</p>
                                    <p className="text-sm text-gray-600">Size: {product.size}</p>
                                    <p className="text-sm text-gray-600">Color: {product.color}</p>
                                    <div className="flex items-center space-x-4 mt-2">
                                        <p className="text-base  text-gray-800">${product.price.toFixed(2)}</p>
                                        <p className="text-base text-gray-600">Quantity: {product.quantity}</p>
                                        <p className="text-base  text-gray-800">${(product.price * product.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full md:w-1/3 ">
                        <div className="bg-gray-50 shadow-lg p-6">
                            <h2 className="text-xl  text-gray-800">Summary</h2>
                            <div className="flex justify-between items-center mt-4 border-b pb-4">
                                <p className="text-base text-gray-800">Subtotal</p>
                                <p className="text-base text-gray-800">${summary.subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4 border-b pb-4">
                                <p className="text-base text-gray-800">Discount </p>
                                <p className="text-base text-gray-800">-${summary.discount.amount.toFixed(2)} ({summary.discount.percentage}%)</p>
                            </div>
                            <div className="flex justify-between items-center mt-4 border-b pb-4">
                                <p className="text-base text-gray-800">Shipping</p>
                                <p className="text-base text-gray-800">${summary.shipping.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-base  text-gray-800">Total</p>
                                <p className="text-base  text-gray-800">${summary.total.toFixed(2)}</p>
                            </div>
                            <button className=" w-full mt-4  bg-[#df633a] hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm ">Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartcheckout;