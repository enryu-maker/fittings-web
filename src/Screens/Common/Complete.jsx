import React from 'react';
import { Oval } from 'react-loader-spinner';
import { GetProfile, LogoutAction, patchProfile } from '../../Store/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IMAGE } from '../../Assets/Image';
export default function Complete() {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const access = useSelector((state) => state.Reducers.access);
  const profile = useSelector(state => state.Reducers.profile)
  React.useEffect(() => {
    dispatch(GetProfile())
    setLoading(false)
  }, [dispatch])
  const [data, setData] = React.useState({
    gst_certificate: "",
    gst_no: "",
    pan_no: "",
    pan_card: "",
  });
  return (
    <>
      <div className='flex justify-center items-center font-Raleway mt-[140px]'>
        <div className='flex min-h-full  flex-wrap w-[78%]  justify-center px-6 py-12 mr-100 lg:px-8'>
          <div className='sm:mx-auto sm:w-full  '>
            <h2 className='mt-10 text-center text-2xl  leading-9 tracking-tight text-gray-900'>
              KYC Verification
            </h2>
          </div>
          <div className='sm:mx-auto mt-10  flex flex-row justify-between  items-center sm:w-full  '>
            <h2 className='text-xl  leading-9 tracking-tight text-gray-900'>
              Welcome, <span className='text-[#df633a]'>{profile?.name}</span>
            </h2>
            <button 
            onClick={()=>{
              dispatch(LogoutAction())
              navigate('/login')
            }}
            className=' text-red-500 font-Raleway font-extrabold'>
              Logout
            </button>
          </div>
          <div className='w-full flex justify-center items-center '>
          <img
          className='h-[100px] w-[100px]'
          src={IMAGE.kyc}
          />
          </div>
          
          {
            loading ?
              <Oval />
              :
              <>
                <div className='mt-10 space-y-5 sm:mx-auto sm:w-full sm:max-w-sm'>
                  <div>
                    <label
                      htmlFor='pan'
                      className='block text-sm text-left font-medium leading-6 text-gray-900'>
                      PAN Card <span className='text-red-600'>*</span>
                    </label>
                    <div className='mt-2'>
                      <input
                        id='pan'
                        name='pan'
                        type='text'
                        value={data.pan_no}
                        onChange={(e) => {
                          setData({ ...data, pan_no: e.target.value });
                        }}
                        required
                        className='block w-full p-5 border-2 py-1.5 text-gray-900'
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-10 space-y-5 sm:mx-auto sm:w-full sm:max-w-sm'>
                  <div>
                    <label className='block text-sm text-left font-medium leading-6 text-gray-900'>
                      Attach Pan Card <span className='text-red-600'>*</span>
                    </label>
                    <div className='mt-2'>
                      <input
                        type='file'
                        name='uploadFile'
                        id='cv-upload'
                        onChange={(e) => {
                          setData({ ...data, pan_card: e.target.files[0] });
                        }}
                        placeholder='ATTACH RESUME / CV'
                        className=' w-full items-center space-x-2 flex p-5 border-2 py-1 text-gray-900'
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-10 space-y-5 sm:mx-auto sm:w-full sm:max-w-sm'>
                  <div>
                    <label
                      htmlFor='pan'
                      className='block text-sm text-left font-medium leading-6 text-gray-900'>
                      GST Number <span className='text-red-600'>*</span>
                    </label>
                    <div className='mt-2'>
                      <input
                        id='pan'
                        name='pan'
                        type='text'
                        value={data.gst_no}
                        onChange={(e) => {
                          setData({ ...data, gst_no: e.target.value });
                        }}
                        required
                        className='block w-full p-5 border-2 py-1.5 text-gray-900'
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-10 space-y-5 sm:mx-auto sm:w-full sm:max-w-sm'>
                  <div>
                    <label className='block text-sm text-left font-medium leading-6 text-gray-900'>
                      Attach GST Certifcate <span className='text-red-600'>*</span>
                    </label>
                    <div className='mt-2'>
                      <input
                        type='file'
                        name='uploadFile'
                        id='cv-upload'
                        className=' w-full items-center space-x-2 flex p-5 border-2 py-1 text-gray-900'
                        required
                        onChange={(e) => {
                          setData({ ...data, gst_certificate: e.target.files[0] });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </>

          }

          <div className='w-full flex justify-center items-center  mt-5'>
            <button
              type='submit'
              onClick={() => {
                // console.log(data)
                if (data?.gst_no === "" || data?.gst_certificate === "" || data?.pan_no === "" || data?.pan_card === "") {
                  toast.error("Please Enter the Data Below", {
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
                else {
                  dispatch(patchProfile(setLoading, data, navigate));
                }
              }}
              className='flex self-center w-[40%] justify-center  bg-[#df633a] hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm '>
              {loading ? (
                <Oval
                  visible={true}
                  height='20'
                  width='20'
                  color='#ffffff'
                  secondaryColor='#ffffff'
                  ariaLabel='oval-loading'
                  wrapperStyle={{}}
                  wrapperClass=''
                />
              ) : (
                'Complete Profile'
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
