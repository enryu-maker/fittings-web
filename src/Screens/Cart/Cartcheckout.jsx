import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobileAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

function Cartcheckout( ) {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
 

  return (
<div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-2xl  mb-4">Checkout</h1>
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-600">Step {currentStep}</div>
            <div className="text-sm font-medium text-gray-600">Progress Bar</div>
          </div>
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          <div className="flex justify-between">
            {currentStep !== 1 && (
              <button onClick={handlePreviousStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 px-4 m-5 rounded inline-flex items-center">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.707 3.293a1 1 0 0 1 1.414 1.414L6.414 10l3.707 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4z" clipRule="evenodd" />
                </svg>
                Previous
              </button>
            )}
            {currentStep !== 3 && (
              <button onClick={handleNextStep} className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded inline-flex items-center">
                Next
                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.293 16.707a1 1 0 0 1-1.414 0L5.586 12.5a1 1 0 0 1 0-1.414L9.293 7.293a1 1 0 1 1 1.414 1.414L7.414 12l3.293 3.293a1 1 0 0 1 0 1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step1({ onSubmit }) {
    const savedAddresses = [
      {
        fullName: 'John Doe',
        addressLine1: '123 Street',
        city: 'City',
        state: 'State',
        postalCode: '12345',
        country: 'Country'
      },
      {
        fullName: 'Jane Smith',
        addressLine1: '456 Avenue',
        city: 'Town',
        state: 'State',
        postalCode: '67890',
        country: 'Country'
      }
    ];
  
    const [selectedAddress, setSelectedAddress] = useState(null);
  
    const handleSelectAddress = (address) => {
      setSelectedAddress(address);
      // Here you can perform any actions based on the selected address, like updating state or proceeding to the next step
    };
  
    return (
      <div>
        <h2 className="text-lg  mb-4">Shipping Address</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4">
          {savedAddresses.map((address, index) => (
            <div key={index} className={`bg-gray-300 p-4 rounded-md cursor-pointer ${selectedAddress === address ? 'border border-blue-500' : ''}`} onClick={() => handleSelectAddress(address)}>
              <h3 className="text-lg  mb-2">Address {index + 1}</h3>
              <p>{address.fullName}</p>
              <p>{address.addressLine1}</p>
              <p>{address.city}, {address.state}, {address.postalCode}</p>
              <p>{address.country}</p>
            </div>
          ))}
        </div>
  
        <h2 className="text-lg    mb-4 mt-6">Selected Shipping Address</h2>
  
        {selectedAddress && (
          <div className="bg-gray-100 p-4 rounded-md m-5 border border-black">
            <h3 className="text-lg  mb-2">Selected Address</h3>
            <p>{selectedAddress.fullName}</p>
            <p>{selectedAddress.addressLine1}</p>
            <p>{selectedAddress.city}, {selectedAddress.state}, {selectedAddress.postalCode}</p>
            <p>{selectedAddress.country}</p>
          </div>
        )}
      </div>
    );
  }
  function Step2({ onSubmit }) {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [cardEndYear, setCardEndYear] = useState('');
  
    const handleSelectPaymentMethod = (method) => {
      setSelectedPaymentMethod(method);
      // Here you can perform any actions based on the selected payment method, like updating state or proceeding to the next step
    };
  
    const handleCvvChange = (e) => {
      setCardCvv(e.target.value);
    };
  
    const handleEndYearChange = (e) => {
      setCardEndYear(e.target.value);
    };
  
    return (
      <div>
        <h2 className="text-lg  mb-4">Payment Information</h2>

        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="card"
            checked={selectedPaymentMethod === "card"}
            onChange={() => handleSelectPaymentMethod("card")}
            className="mr-2"
          />
          <label htmlFor="card" className="cursor-pointer flex items-center">
            <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
            Card
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="upi"
            name="paymentMethod"
            value="upi"
            checked={selectedPaymentMethod === "upi"}
            onChange={() => handleSelectPaymentMethod("upi")}
            className="mr-2"
          />
          <label htmlFor="upi" className="cursor-pointer flex items-center">
            <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
            UPI
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cod"
            checked={selectedPaymentMethod === "cod"}
            onChange={() => handleSelectPaymentMethod("cod")}
            className="mr-2"
          />
          <label htmlFor="cod" className="cursor-pointer flex items-center">
            <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
            Cash on Delivery
          </label>
        </div>

        {selectedPaymentMethod === "card" && (
          <div>
            <div className="mb-4">
              <label
                htmlFor="cardCvv"
                className="block text-sm font-medium text-gray-700"
              >
                CVV
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardEndYear"
                className="block text-sm font-medium text-gray-700"
              >
                End Year
              </label>
            </div>
          </div>
        )}

        {selectedPaymentMethod && (
          <div className="bg-gray-100 p-4 rounded-md border border-blue-500 mt-6">
            <h3 className="text-lg  mb-2">
              Selected Payment Method
            </h3>
            <p>
              {selectedPaymentMethod === "card"
                ? "Card"
                : selectedPaymentMethod === "upi"
                ? "UPI"
                : "Cash on Delivery"}
            </p>
            {selectedPaymentMethod === "card" && (
              <>
                <input
                  type="text"
                  id="cardCvv"
                  name="cardCvv"
                  value={cardCvv}
                  onChange={handleCvvChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-40"
                  required
                />

                <p>CVV: {cardCvv}</p>
                <input
                  type="text"
                  id="cardEndYear"
                  name="cardEndYear"
                  value={cardEndYear}
                  onChange={handleEndYearChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-40"
                  required
                />

                <p>End Year: {cardEndYear}</p>
                <input
                  type="text"
                  id="cardEndYear"
                  name="cardEndYear"
                  value={cardEndYear}
                  onChange={handleEndYearChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-40"
                  required
                />
              </>
            )}
          </div>
        )}
      </div>
    );
  }
function Step3() {
    const orderDetails = {
        items: [
          { name: 'Product 1', price: 20 ,img:"https://ii1.pepperfry.com/assets/3e0ebb48-8087-476c-8e6b-4df370effe95.jpg"},
          { name: 'Product 2', price: 30 ,img:'https://www.ikea.com/in/en/images/products/herrakra-armchair-diseroed-dark-yellow__1213667_pe911203_s5.jpg?f=s' }
        ],
        shippingAddress: {
          fullName: 'John Doe',
          addressLine1: '123 Street',
          addressLine2: 'Apt 456',
          city: 'City',
          state: 'State',
          postalCode: '12345',
          country: 'Country'
        },
        paymentInfo: {
          cardNumber: '**** **** **** 1234',
          cardHolderName: 'John Doe',
          expirationDate: '12/24',
          cvv: '123'
        },
        totalprice:{
          price:"100$"
        }
      };
  return (
    <div>
      <h2 className="text-lg  mb-4">Review Your Order</h2>
      <div className="mb-4">
        <h3 className="text-md  mb-2">Order Summary</h3>
        <ul>
          {orderDetails.items.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
         <img className='w-60 h-40  justify-items-start' src={item.img}></img>
              <p className='mr-80' >{item.name}</p>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
      </div>
  <div className="mb-4 flex ">
        <h3 className="text-md  mb-2">Shipping Address</h3>
        <p className='ml-'>{orderDetails.shippingAddress.fullName}</p>
        <p>{orderDetails.shippingAddress.addressLine1}</p>
        {orderDetails.shippingAddress.addressLine2 && <p>{orderDetails.shippingAddress.addressLine2}</p>}
        <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}, {orderDetails.shippingAddress.postalCode}</p>
        <p>{orderDetails.shippingAddress.country}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-md  mb-2">Payment Information</h3>
        <p>Card Number: {orderDetails.paymentInfo.cardNumber}</p>
        <p>Cardholder Name: {orderDetails.paymentInfo.cardHolderName}</p>
        <p>Expiration Date: {orderDetails.paymentInfo.expirationDate}</p>
        <p>CVV: {orderDetails.paymentInfo.cvv}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-md  mb-2">Total Price</h3>
        <p>Total Amount: {orderDetails.totalprice.price}</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 m-5 rounded-md hover:bg-blue-600">Place Order</button>
    </div>
  
  );
}

export default Cartcheckout;

