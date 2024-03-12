
import React, { useState } from 'react';
import { FaPhoneAlt, FaCreditCard, FaMoneyBill, FaWallet } from 'react-icons/fa'; 

function Paymentpage() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDeliveryChecked, setIsDeliveryChecked] = useState(false);
  const summary = {
    subtotal: 56.00,
    discount: { amount: 28.00, percentage: 50 },
    shipping: 8.00,
    total: 36.00
  };

  const paymentMethods = [
    {
      name: 'Phone Pay',
      description: 'Pay using your Phone Pay account.',
      icon: <FaPhoneAlt />,
    },
    {
      name: 'UPI',
      description: 'Pay using any UPI enabled app.',
      icon: <FaWallet />,
      cardDetails: (
        <div>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="CVV" />
        </div>
      ),
    },
    {
        name: 'Card',
        description: 'Pay using your debit or credit card.',
        icon: <FaCreditCard />,
        cardDetails: (
          <div>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="Valid Through (MM/YY)" />
          </div>
        ),
      },
    {
      name: 'Cash on Delivery',
      description: 'Pay when your order is delivered.',
      icon: <FaMoneyBill />,
    },
  ];

  const handleMethodClick = (index) => {
    setSelectedMethod(index === selectedMethod ? null : index);
  };

  const handleDeliveryCheck = () => {
    setIsDeliveryChecked(!isDeliveryChecked);
  };

  const handleLoginCheck = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="flex flex-col mt-40 m-10 space-y-10 lg:flex-row lg:space-x-10">
      <div className="flex flex-col w-full lg:w-2/3 space-y-3">
      <div className="bg-gray-50 shadow-lg border-gray-200 border-2 rounded-lg p-6 relative">
          <h2 className="text-xl text-black  bg-white  w-full font-semibold ">
            Delivery Details
          </h2>
          <button
            className="absolute bottom-0 right-0 mb-5 mr-8 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
            onClick={handleDeliveryCheck}
          >
             CHANGE
          </button>
        </div>

        <div className="bg-gray-50 shadow-lg border-gray-200 border-2 rounded-lg p-6 relative">
          <h2 className="text-xl text-black  bg-white  w-full font-semibold ">
            Summary Details
          </h2>
          <button
            className="absolute bottom-0 right-0 mb-5 mr-8 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
            onClick={handleLoginCheck}
          >
             CHANGE
          </button>
        </div>

        <div className="bg-gray-50 shadow-lg border-gray-200 border-2 rounded-lg p-6 relative">
          <h2 className="text-xl text-black  bg-white  w-full font-semibold ">
            Login Details
          </h2>
          <button
            className="absolute bottom-0 right-0 mb-5 mr-8 bg-black  text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
            onClick={handleLoginCheck}
          >
            CHANGE
          </button>
        </div>
        <div className="bg-gray-50 shadow-lg border-gray-200 border-2 rounded-lg p-6">
          <h2 className="text-lg text-white p-5 w-full rounded-lg  bg-black font-semibold mb-4">
            Choose Payment Method
          </h2>
          <div className="space-y-2">
            {paymentMethods.map((method, index) => (
              <div key={index}>
                <button
                  className={`w-full bg-white border p-8 rounded-lg text-left focus:outline-none ${
                    selectedMethod === index
                      ? "border-blue-500"
                      : "border-gray-200"
                  } transition-colors duration-300`}
                  onClick={() => handleMethodClick(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {method.icon && <span className="mr-2">{method.icon}</span>}
                      <span className="font-semibold">{method.name}</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 transform ${
                        selectedMethod === index ? "rotate-180" : ""
                      } transition-transform duration-300`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {selectedMethod === index && (
              <div className="description p-4 bg-white p-5">
                    <p className="text-xl text-gray-500  m-5  p-5 mt-3">
                      {method.cardDetails}  
                      {method.description}                 
                    </p>
                    <button className='bg-black p-3  w-40  rounded-lg text-white'> Pay Now</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/3 space-y-6">
        <div className="bg-gray-50 shadow-lg border-gray-200 border-2 rounded-lg p-6">
          <h2 className="text-xl text-black bg-white p-5 w-full font-semibold ">
            Summary
          </h2>
          <div className="flex justify-between items-center mt-4 border-b pb-4">
            <p className="text-base text-gray-800">Subtotal</p>
            <p className="text-base text-gray-800">
              ${summary.subtotal.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 border-b pb-4">
            <p className="text-base text-gray-800">
              Discount{" "}
              <span className="bg-gray-200 p-1 text-xs font-medium text-gray-800">
                STUDENT
              </span>
            </p>
            <p className="text-base text-gray-800">
              -${summary.discount.amount.toFixed(2)} (
              {summary.discount.percentage}%)
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 border-b pb-4">
            <p className="text-base text-gray-800">Shipping</p>
            <p className="text-base text-gray-800">
              ${summary.shipping.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-base font-semibold text-gray-800">Total</p>
            <p className="text-base font-semibold text-gray-800">
              ${summary.total.toFixed(2)}
            </p>
            
          </div>
          <button
            className="p-5 mt-10 w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
            onClick={handleLoginCheck}
          >
             CHECKOUT
          </button>
        </div>

       
      </div>
    </div>
  );
}

export default Paymentpage;
