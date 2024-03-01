// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCreditCard, faMobileAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

// function Cartcheckout( ) {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNextStep = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const handlePreviousStep = () => {
//     setCurrentStep(currentStep - 1);
//   };
 

//   return (
// <div className="container mx-auto px-4 py-8 mt-20">
//       <h1 className="text-2xl font-bold mb-4 mt-40">Checkout</h1>
//       <div className="w-full max-w-3xl mx-auto">
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div className="flex items-center justify-between mb-4">
//             <div className="text-sm font-medium text-gray-600">Step {currentStep}</div>
//           </div>
//           {currentStep === 1 && <Step1 />}
//           {currentStep === 2 && <Step2 />}
//           {currentStep === 3 && <Step3 />}
//           <div className="flex justify-between">
//             {currentStep !== 1 && (
//               <button onClick={handlePreviousStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 m-5 rounded inline-flex items-center">
//                 <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M8.707 3.293a1 1 0 0 1 1.414 1.414L6.414 10l3.707 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4z" clipRule="evenodd" />
//                 </svg>
//                 Previous
//               </button>
//             )}
//             {currentStep !== 3 && (
//               <button onClick={handleNextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4  px-4 h-5 rounded inline-flex items-center">
//                 Next
//                 <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M11.293 16.707a1 1 0 0 1-1.414 0L5.586 12.5a1 1 0 0 1 0-1.414L9.293 7.293a1 1 0 1 1 1.414 1.414L7.414 12l3.293 3.293a1 1 0 0 1 0 1.414z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Step1({ onSubmit }) {
//     const savedAddresses = [
//       {
//         fullName: 'John Doe',
//         addressLine1: '123 Street',
//         city: 'City',
//         state: 'State',
//         postalCode: '12345',
//         country: 'Country'
//       },
//       {
//         fullName: 'Jane Smith',
//         addressLine1: '456 Avenue',
//         city: 'Town',
//         state: 'State',
//         postalCode: '67890',
//         country: 'Country'
//       }
//     ];
  
//     const [selectedAddress, setSelectedAddress] = useState(null);
  
//     const handleSelectAddress = (address) => {
//       setSelectedAddress(address);
//       // Here you can perform any actions based on the selected address, like updating state or proceeding to the next step
//     };
  
//     return (
//       <div>
//         <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
  
//         <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4">
//           {savedAddresses.map((address, index) => (
//             <div key={index} className={`bg-gray-300 p-4 rounded-md cursor-pointer ${selectedAddress === address ? 'border border-blue-500' : ''}`} onClick={() => handleSelectAddress(address)}>
//               <h3 className="text-lg font-semibold mb-2">Address {index + 1}</h3>
//               <p>{address.fullName}</p>
//               <p>{address.addressLine1}</p>
//               <p>{address.city}, {address.state}, {address.postalCode}</p>
//               <p>{address.country}</p>
//             </div>
//           ))}
//         </div>
  
//         <h2 className="text-lg font-semibold   mb-4 mt-6">Selected Shipping Address</h2>
  
//         {selectedAddress && (
//           <div className="bg-gray-100 p-4 rounded-md m-5 border border-black">
//             <h3 className="text-lg font-semibold mb-2">Selected Address</h3>
//             <p>{selectedAddress.fullName}</p>
//             <p>{selectedAddress.addressLine1}</p>
//             <p>{selectedAddress.city}, {selectedAddress.state}, {selectedAddress.postalCode}</p>
//             <p>{selectedAddress.country}</p>
//           </div>
//         )}
//       </div>
//     );
//   }
//   function Step2({ onSubmit }) {
//     const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
//     const [cardCvv, setCardCvv] = useState('');
//     const [cardEndYear, setCardEndYear] = useState('');
  
//     const handleSelectPaymentMethod = (method) => {
//       setSelectedPaymentMethod(method);
//       // Here you can perform any actions based on the selected payment method, like updating state or proceeding to the next step
//     };
  
//     const handleCvvChange = (e) => {
//       setCardCvv(e.target.value);
//     };
  
//     const handleEndYearChange = (e) => {
//       setCardEndYear(e.target.value);
//     };
  
//     return (
//       <div>
//         <h2 className="text-lg font-semibold mb-4">Payment Information</h2>

//         <div className="flex items-center mb-4">
//           <input
//             type="radio"
//             id="card"
//             name="paymentMethod"
//             value="card"
//             checked={selectedPaymentMethod === "card"}
//             onChange={() => handleSelectPaymentMethod("card")}
//             className="mr-2"
//           />
//           <label htmlFor="card" className="cursor-pointer flex items-center">
//             <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
//             Card
//           </label>
//         </div>

//         <div className="flex items-center mb-4">
//           <input
//             type="radio"
//             id="upi"
//             name="paymentMethod"
//             value="upi"
//             checked={selectedPaymentMethod === "upi"}
//             onChange={() => handleSelectPaymentMethod("upi")}
//             className="mr-2"
//           />
//           <label htmlFor="upi" className="cursor-pointer flex items-center">
//             <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
//             UPI
//           </label>
//         </div>

//         <div className="flex items-center mb-4">
//           <input
//             type="radio"
//             id="cod"
//             name="paymentMethod"
//             value="cod"
//             checked={selectedPaymentMethod === "cod"}
//             onChange={() => handleSelectPaymentMethod("cod")}
//             className="mr-2"
//           />
//           <label htmlFor="cod" className="cursor-pointer flex items-center">
//             <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
//             Cash on Delivery
//           </label>
//         </div>

//         {selectedPaymentMethod === "card" && (
//           <div>
//             <div className="mb-4">
//               <label
//                 htmlFor="cardCvv"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 CVV
//               </label>
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="cardEndYear"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 End Year
//               </label>
//             </div>
//           </div>
//         )}

//         {selectedPaymentMethod && (
//           <div className="bg-gray-100 p-4 rounded-md border border-blue-500 mt-6">
//             <h3 className="text-lg font-semibold mb-2">
//               Selected Payment Method
//             </h3>
//             <p>
//               {selectedPaymentMethod === "card"
//                 ? "Card"
//                 : selectedPaymentMethod === "upi"
//                 ? "UPI"
//                 : "Cash on Delivery"}
//             </p>
//             {selectedPaymentMethod === "card" && (
//               <>
//                 <input
//                   type="text"
//                   id="cardCvv"
//                   name="cardCvv"
//                   value={cardCvv}
//                   onChange={handleCvvChange}
//                   className="mt-1 p-2 border border-gray-300 rounded-md w-"
//                   required
//                 />

//                 <p>CVV: {cardCvv}</p>
//                 <input
//                   type="text"
//                   id="cardEndYear"
//                   name="cardEndYear"
//                   value={cardEndYear}
//                   onChange={handleEndYearChange}
//                   className="mt-1 p-2 border border-gray-300 rounded-md w-40"
//                   required
//                 />

//                 <p>End Year: {cardEndYear}</p>
//                 <input
//                   type="text"
//                   id="cardEndYear"
//                   name="cardEndYear"
//                   value={cardEndYear}
//                   onChange={handleEndYearChange}
//                   className="mt-1 p-2 border border-gray-300 rounded-md w-40"
//                   required
//                 />
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   }
// function Step3() {
//     const orderDetails = {
//         items: [
//           { name: 'Product 1', price: 20 ,img:"https://ii1.pepperfry.com/assets/3e0ebb48-8087-476c-8e6b-4df370effe95.jpg"},
//           { name: 'Product 2', price: 30 ,img:'https://www.ikea.com/in/en/images/products/herrakra-armchair-diseroed-dark-yellow__1213667_pe911203_s5.jpg?f=s' }
//         ],
//         shippingAddress: {
//           fullName: 'John Doe',
//           addressLine1: '123 Street',
//           addressLine2: 'Apt 456',
//           city: 'City',
//           state: 'State',
//           postalCode: '12345',
//           country: 'Country'
//         },
//         paymentInfo: {
//           cardNumber: '**** **** **** 1234',
//           cardHolderName: 'John Doe',
//           expirationDate: '12/24',
//           cvv: '123'
//         },
//         totalprice:{
//           price:"100$"
//         }
//       };
//   return (
//     <div>
//       <h2 className="text-lg font-semibold mb-4">Review Your Order</h2>
//       <div className="mb-4">
//         <h3 className="text-md font-semibold mb-2">Order Summary</h3>
//         <ul>
//           {orderDetails.items.map((item, index) => (
//             <li key={index} className="flex justify-between items-center mb-2">
//          <img className='w-60 h-40  justify-items-start' src={item.img}></img>
//               <p className='mr-80' >{item.name}</p>
//               <span>${item.price}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//   <div className="mb-4 flex ">
//         <h3 className="text-md font-semibold mb-2">Shipping Address</h3>
//         <p className='ml-'>{orderDetails.shippingAddress.fullName}</p>
//         <p>{orderDetails.shippingAddress.addressLine1}</p>
//         {orderDetails.shippingAddress.addressLine2 && <p>{orderDetails.shippingAddress.addressLine2}</p>}
//         <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}, {orderDetails.shippingAddress.postalCode}</p>
//         <p>{orderDetails.shippingAddress.country}</p>
//       </div>
//       <div className="mb-4">
//         <h3 className="text-md font-semibold mb-2">Payment Information</h3>
//         <p>Card Number: {orderDetails.paymentInfo.cardNumber}</p>
//         <p>Cardholder Name: {orderDetails.paymentInfo.cardHolderName}</p>
//         <p>Expiration Date: {orderDetails.paymentInfo.expirationDate}</p>
//         <p>CVV: {orderDetails.paymentInfo.cvv}</p>
//       </div>
//       <div className="mb-4">
//         <h3 className="text-md font-semibold mb-2">Total Price</h3>
//         <p>Total Amount: {orderDetails.totalprice.price}</p>
//       </div>
//       <button className="bg-blue-500 text-white px-4 py-2 m-5 rounded-md hover:bg-blue-600">Place Order</button>
//     </div>
  
//   );
// }

// export default Cartcheckout;
// import React, { useState } from 'react';
// import { MaterialTailwindTheme } from '@material-tailwind/react';

// function Cartcheckout() {
//     // Define array of products
//     const products = [
//         {
//             id: 1,
//             name: "Product 1",
//             price: 19.99,
//             quantity: 1,
//             image: "https://images.woodenstreet.de/image/data/coffee-table/farrow-center-table-with-stools/revised/honey/updated%20new/1.jpg"
//         },
//         {
//             id: 2,
//             name: "Product 2",
//             price: 29.99,
//             quantity: 1,
//             image: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709078400&semt=ais"
//         }
//         // Add more products here as needed
//     ];

//     // Define state for quantities of each product
//     const [quantities, setQuantities] = useState(products.map(product => product.quantity));

//     // Function to handle increasing quantity
//     const increaseQuantity = (index) => {
//         const newQuantities = [...quantities];
//         newQuantities[index] += 1;
//         setQuantities(newQuantities);
//     };

//     // Function to handle decreasing quantity
//     const decreaseQuantity = (index) => {
//         if (quantities[index] > 1) {
//             const newQuantities = [...quantities];
//             newQuantities[index] -= 1;
//             setQuantities(newQuantities);
//         }
//     };

//     // Calculate subtotal and total
//     const subtotal = products.reduce((acc, product, index) => acc + product.price * quantities[index], 0);
//     const tax = 1.99;
//     const shipping = 0.00;
//     const total = subtotal + tax;

//     return (
//         <div className="bg-gray-100 mt-40 h-screen py-8">
//             <div className="container mx-auto px-4">
//                 <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
//                 <div className="flex flex-col md:flex-row gap-4">
//                     <div className="w-full md:w-3/4">
//                         <div className="bg-gray-300 rounded-lg shadow-md p-6 mb-4">
//                             <table className="w-full">
//                                 <thead>
//                                     <tr>
//                                         <th className="text-left font-semibold">Product</th>
//                                         <th className="text-left font-semibold">Price</th>
//                                         <th className="text-left font-semibold">Quantity</th>
//                                         <th className="text-left font-semibold">Total</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {products.map((product, index) => (
//                                         <tr key={product.id}>
//                                             <td className="py-4">
//                                                 <div className="flex items-center">
//                                                     <img className="h-200 w-20 mr-4" src={product.image} alt={`Product ${product.id} image`} />
//                                                     <span className="font-semibold">{product.name}</span>
//                                                 </div>
//                                             </td>
//                                             <td className="py-4">${product.price.toFixed(2)}</td>
//                                             <td className="py-4">
//                                                 <div className="flex items-center">
//                                                     <button className="border rounded-md py-2 px-4 mr-2" onClick={() => decreaseQuantity(index)}>-</button>
//                                                     <span className="text-center w-8">{quantities[index]}</span>
//                                                     <button className="border rounded-md py-2 px-4 ml-2" onClick={() => increaseQuantity(index)}>+</button>
//                                                 </div>
//                                             </td>
//                                             <td className="py-4">${(product.price * quantities[index]).toFixed(2)}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                     <div className="w-full md:w-1/4">
//                         <div className="bg-gray-300 border-black rounded-lg shadow-md p-6">
//                             <h2 className="text-lg font-semibold mb-4">Summary</h2>
//                             <div className="flex justify-between mb-2">
//                                 <span>Subtotal</span>
//                                 <span>${subtotal.toFixed(2)}</span>
//                             </div>
//                             <div className="flex justify-between mb-2">
//                                 <span>Taxes</span>
//                                 <span>${tax.toFixed(2)}</span>
//                             </div>
//                             <div className="flex justify-between mb-2">
//                                 <span>Shipping</span>
//                                 <span>${shipping.toFixed(2)}</span>
//                             </div>
//                             <hr className="my-2" />
//                             <div className="flex justify-between mb-2">
//                                 <span className="font-semibold">Total</span>
//                                 <span className="font-semibold">${total.toFixed(2)}</span>
//                             </div>
//                             <button className="bg-black text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Cartcheckout;
import React from 'react';

function Cartcheckout() {
    // Define dynamic data arrays
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
            <div className="py-14  mt-40 px-4 md:px-20 2xl:px-40">
                <div className="flex justify-between items-center mb-10">
                    {/* <h1 className="text-3xl font-semibold text-gray-800">Order #13432</h1>
                    <p className="text-base text-gray-600">21st March 2021 at 10:34 PM</p> */}
                </div>
                <div className=" mt-30 shadow-lg p-10 flex  flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                    <div className="w-full md:w-2/3">
                        {products.map((product, index) => (
                            <div key={index} className="flex items-start space-x-4 border-b pb-4">
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
                                <p className="text-base text-gray-800">Discount <span className="bg-gray-200 p-1 text-xs font-medium text-gray-800">STUDENT</span></p>
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






