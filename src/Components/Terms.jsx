import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { List, ListItem } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { GetRefund, GetTerms } from '../Store/actions';

const Terms = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(GetTerms(setData, setLoading))
  })

  return (
    <>
      <div >
        <div className="flex flex-col mt-[150px] md:flex-row ">
          <div className="w-full md:w-1/4 bg-gray-200 p-4">
            <List>
              {data.map(section => (
                <ListItem
                   onClick={() => handleSectionClick(section.id)} className="cursor-pointer hover:              mb-2 font-Raleway">
                  {section?.title}
                </ListItem>
              ))}
            </List>
          </div>
          <Transition
            show={selectedSection !== null}
            enter="transition ease-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            className="w-full md:w-3/4 bg-white p-4 overflow-y-auto"
          >
            {(ref) => (
              <div ref={ref}>
                {selectedSection !== null && (
                  <div>
                    <h2 className="text-lg font-Raleway  mb-4">{data[selectedSection - 1].title}</h2>
                    {
                      data[selectedSection - 1]?.description?.split('|').map((item, index) => (
                        <p
                          className=' font-Raleway'
                        >{item}</p>
                      ))
                    }
                  </div>
                )}
              </div>
            )}
          </Transition>
        </div>
      </div>
    </>
  );
};

export default Terms;

