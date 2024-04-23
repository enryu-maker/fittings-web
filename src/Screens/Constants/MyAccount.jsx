import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE } from '../../Assets/Image';
import { GetProfile, LogoutAction } from '../../Store/actions';

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const profile = useSelector((state) => state.Reducers.profile);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(GetProfile())
  }, [])

  return (
    <div className='container mx-auto py-6 mt-40 font-Raleway'>

      <div className='mt-5  w-[25%] flex flex-col justify-start space-y-2 border-r-2 '>
        <button className='w-[88%] flex flex-row justify-between  items-center  rounded-xl h-[120px]'>
          <img src={IMAGE.man} className='h-[80px] w-[80px]' />
          <div className=' flex flex-col items-start justify-start '>
            <p className='text-[#5c5c5c] text-2xl font-Mundoregular font-medium tracking-widest '>
              {profile?.name}
            </p>
            <p className='text-[#8c8c8c] text-base font-Mundoregular font-medium tracking-widest '>
              {profile?.role}
            </p>
          </div>
          {
            profile?.is_verified ?
              <img src={IMAGE.checked} className='h-[40px] w-[40px]' />
              :
              <img src={IMAGE.cancel} className='h-[40px] w-[40px]' />
          }

        </button>
        <button
          onClick={() => {
            setActiveSection(0)
          }}
          className='  self-start '>
          <p className='text-black text-lg font-Raleway font-medium tracking-widest '>
            Order
          </p>
        </button>
        <button
          onClick={() => {
            setActiveSection(1)
          }}
          className='self-start '>
          <p className='text-black text-lg font-Raleway font-medium tracking-widest '>
            Coupons
          </p>
        </button>
        <button
          onClick={() => {
            setActiveSection(2)
          }}
          className=' self-start '>
          <p className='text-black text-lg font-Raleway font-medium tracking-widest '>
            Settings
          </p>
        </button>
        <button
          onClick={() => {
            localStorage.clear();
            dispatch({
              type: 'LOGOUT',
              payload: {
                access: null,
                role: 1,
              },
            });
          }}
          className='self-start '>
          <p className='text-red-500 text-lg font-Raleway font-medium tracking-widest '>
            Logout
          </p>
        </button>
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
    GSTNumber: '',
    GSTcertificate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  function handleFileChange(event) {
    const file = event.target.files[0]; // Assuming single file selection
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageData = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  function handleGSTFileChange(event) {
    const file = event.target.files[0]; // Assuming single file selection
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageData = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className='grid md:grid-rows-4 md:grid-flow-col gap-4'>
      {/* <h2 className="text-lg  mb-4">Profile</h2> */}
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>Name</label>
        <input
          type='text'
          name='name'
          value={userData.name}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>Email</label>
        <input
          type='email'
          name='email'
          value={userData.email}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>
          PAN Number
        </label>
        <input
          type='text'
          name='panCard'
          value={userData.panCard}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>
          PAN Card
        </label>
        <input
          type='file'
          accept='image/*'
          name='panCard'
          value={userData.panCard}
          onChange={handleFileChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>
          Phone Number
        </label>
        <input
          type='tel'
          name='phoneNumber'
          value={userData.phoneNumber}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>
          GST Number
        </label>
        <input
          type='text'
          name='panCard'
          value={userData.panCard}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>
          GST Certificate
        </label>
        <input
          type='file'
          accept='image/*'
          name='GST certificate'
          value={userData.phoneNumber}
          onChange={handleGSTFileChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </div>
    </div>
  );
};

const OrderHistorySection = () => {
  return (
    <div>
      <h2 className='text-lg  mb-4'>Order History</h2>
      {/* Display order history */}
    </div>
  );
};
const AddressSection = () => {
  return (
    <div className='grid grid-cols-3 gap-3'>
      <h2 className='text-lg  mb-4 text-pretty	'>
        Akif Khan . +92 1234567890 123, Lorem Ipsum Dolor Sit Amet Consectetur
        Adipisicing Elit. Quisquam, Voluptatibus.
      </h2>
    </div>
  );
};

const LogoutSection = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className='text-lg  mb-4'>Logout</h2>
      {/* Logout functionality */}
      <button
        onClick={() => {
          localStorage.clear();
          dispatch({
            type: 'LOGOUT',
            payload: {
              access: null,
              role: 1,
            },
          });
        }}>
        Click here to logout
      </button>
    </div>
  );
};

export default MyAccount;
