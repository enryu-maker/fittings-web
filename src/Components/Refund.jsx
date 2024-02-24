import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { List, ListItem } from '@material-tailwind/react';

const Refund = () => {
  const sections = [
    {  id:1, title: " INTRODUCTION", description: "Description for Dashboard" },
    { id:2,
      title: "OBJECTIVES OF THIS POLICY",
      description:
        "Description for Collection of Personal and Other Information",
    },
    { id:3,title: "TERMS OF CANCELLATION", description: "Description for Cookies" },
    { id:4,
      title: "REFUND",
      description: "Description for Divulging/Sharing of Personal Information",
    }
  ];

  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  return (
    <>
<div >
    {/* <h2 className='mt-90 text-black text-bold text-5xl'>CANCELLATION, REFUND AND RETURN POLICY</h2> */}
    
    <div className="flex flex-col mt-40 md:flex-row h-screen">        
      <div className="w-full md:w-1/4 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">Privacy Policy</h2>       
        <List>
          {sections.map(section => (
            <ListItem key={section.id} onClick={() => handleSectionClick(section.id)} className="cursor-pointer hover:text-blue-500 mb-2">
              {section.title}
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
                <h2 className="text-lg font-bold mb-4">{sections[selectedSection - 1].title}</h2>
                <p>{sections[selectedSection - 1].description}</p>
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

export default  Refund;

