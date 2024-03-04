import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { GetSubCateogry } from '../../Store/actions';
import { baseURL } from '../../Helper/Helper';

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data,setData] = React.useState([])
  const { state } = useLocation();
  return (
    <div className=" w-full flex flex-col justify-center items-center font-Raleway mt-[180px]">
      <h3 className="text-center text-4xl ">
        {state?.main_category_name}
      </h3>
      <div className='py-5 space-x-2 transition-all'>
        {
          state?.category?.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                dispatch(GetSubCateogry(item?.id,setData))
              }}
              className={`${item?.id===data?.id?"bg-[#df633a] text-white":"bg-white"} box-border border-gray-200 border-2 hover:bg-[#df633a] hover:text-white    text-black  px-4 py-1 `}>
              <p>{item?.category_name}</p>
            </button>
          ))
        }
      </div>
      <h3 className="text-center text-3xl ">
        Sub Category
      </h3>
      <div className='flex flex-wrap justify-evenly my-5 items-start w-[95%]'>
      {
          data?.sub_category?.map((item, index) => {
            if (item?.status === "Activate") {
              return (
                <a
                  onClick={()=>{
                    navigate('/subcategory/'+item?.id,{
                      state: item
                    })
                  }}
                  key={index}
                  className=' flex flex-col w-[120px] text-center justify-center hover:text-[#df633a] items-center capitalize text-base '
                >
                  <img
                  alt='icon'
                  className='h-[100px] rounded-full w-[100px] border-2'
                  src= {baseURL+item?.image}
                  />  
                  {item?.sub_category_name}
                </a>
              )
            }
          })
        }
      </div>
    </div>
  )

}

export default Products
