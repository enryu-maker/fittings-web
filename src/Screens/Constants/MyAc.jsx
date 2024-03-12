
import React, { useState } from 'react';

const MyAc = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container mx-auto py-6 mt-40">
              <h2 className='text-center 	text-4xl '>My Account</h2>

      <div className="flex flex-col md:flex-row">

        <div className="md:w-1/4 md:mr-4 mb-6 md:mb-0 ">
      <div className="bg-grey-100 shadow p-4 ">
            <h2 className="text-lg  mb-4 ">My Account</h2>
            <ul className="space-y-2">
              <li onClick={() => handleSectionChange('profile')} className={activeSection === 'profile' ? 'text-black hover:bg-orange-700 h-50 ' : 'text-black rounded-lg bg-white-500 ' }>
                Profile
              </li>
              <hr></hr>
              <li onClick={() => handleSectionChange('order-history')} className={activeSection === 'order-history' ? 'text-black   ' : 'text-black'}>
                Order History
              </li>
              <hr></hr>
              <li onClick={() => handleSectionChange('address')} className={activeSection === 'logout' ? 'text-black   ' : 'text-black'}>
              Address
              </li>
              <hr></hr>
              <li onClick={() => handleSectionChange('logout')} className={activeSection === 'logout' ? 'text-black  ' : 'text-black'}>
              Coupons
              </li>
              <hr></hr>
              <li onClick={() => handleSectionChange('logout')} className={activeSection === 'logout' ? 'text-black  ' : 'text-black'}>
              Rating & Reviews
              </li>
              <hr></hr>
              <li onClick={() => handleSectionChange('logout')} className={activeSection === 'logout' ? 'text-black   ' : 'text-black'}>
              Settings
              </li>
              <hr></hr>
              <li onClick={() => handleSectionChange('logout')} className={activeSection === 'logout' ? 'text-black   ' : 'text-black'}>
                Logout
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:flex-1">
          <div className="bg-white shadow p-4">
            {activeSection === 'profile' && <ProfileSection />}
            {activeSection === 'order-history' && <OrderHistorySection />}
            {activeSection === 'address' && <AddressSection />}

            {activeSection === 'logout' && <LogoutSection />}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileSection = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    panCard: '',
    phoneNumber: '',
    GSTNumber:"",
    GSTcertificate:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  function handleFileChange(event) {
    const file = event.target.files[0]; // Assuming single file selection
    if (file) {
      
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageData = e.target.result;
   
      };
      reader.readAsDataURL(file);
    }
  }
  
  
  function handleGSTFileChange(event) {
    const file = event.target.files[0]; // Assuming single file selection
    if (file) {
     
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageData = e.target.result;
     
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className='grid grid-rows-4 grid-flow-col gap-4'>
      {/* <h2 className="text-lg  mb-4">Profile</h2> */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" value={userData.name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">PAN Number</label>
        <input type="text" name="panCard" value={userData.panCard} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">PAN Card</label>
        <input  type="file" accept="image/*" name="panCard" value={userData.panCard} onChange={handleFileChange}  className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="tel" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">GST Number</label>
        <input type="text" name="panCard" value={userData.panCard} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">GST Certificate</label>
        <input type="file" accept="image/*"   name="GST certificate" value={userData.phoneNumber} onChange={handleGSTFileChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>
    </div>
  );
};

const OrderHistorySection = () => {
  return (
    <div>
      <h2 className="text-lg  mb-4">Order History</h2>
      {/* Display order history */}
    </div>
  );
};
const AddressSection = () => {
    return (
  <div className='grid grid-cols-3 gap-3'>
      <h2 className="text-lg  mb-4 text-pretty	">
          Akif Khan . +92 1234567890 123, Lorem Ipsum Dolor Sit Amet Consectetur
          Adipisicing Elit. Quisquam, Voluptatibus.
        </h2>
      </div>
    );
  };

const LogoutSection = () => {
  return (
    <div>
      <h2 className="text-lg  mb-4">Logout</h2>
      {/* Logout functionality */}
      <p>Click here to logout</p>
    </div>
  );
};

export default MyAc;
    