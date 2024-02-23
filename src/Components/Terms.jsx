import React, { useState } from 'react';
import {
    Card,
    Typography,
    List,
    ListItem
  } from "@material-tailwind/react";

const privacyPolicyData = [
    
  { title:"GENERAL", description: "Description for Dashboard" },
  { title:"COLLECTION OF PERSONAL AND OTHER INFORMATION", description: "Description for Collection of Personal and Other Information" },
  { title:"COOKIES", description: "Description for Cookies" },
  { title:"DIVULGING/SHARING OF PERSONAL INFORMATION", description: "Description for Divulging/Sharing of Personal Information" },
  { title:"SECURITY", description: "Description for Divulging/Sharing of Personal Information" },
  { title:"THIRD PARTY ADVERTISEMENTS / PROMOTIONS", description: "Description for Divulging/Sharing of Personal Information" },
  { title:"USER’S CONSENT", description: "Description for Divulging/Sharing of Personal Information"},
  { title:"CHILDREN INFORMATION", description: "Description for Divulging/Sharing of Personal Information"},
  { title:"GRIEVANCE OFFICER", description: "Description for Divulging/Sharing of Personal Information"},
  { title:"DISPUTE RESOLUTION AND JURISDICTION", 
  description:"nmbjnnnnnnnnnnnnn"} ];

function Terms() {
  const [selectedTitle, setSelectedTitle] = useState(privacyPolicyData[0].title);

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };
return (
    <div className=" mt-20  grid grid-cols-4 gap-4 flex bg-gray-100 min-h-screen">
      <Card className=" w-full max-w-full p-4  mt-10 shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h3" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          {privacyPolicyData.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem onClick={() => handleTitleClick(item.title)} className={`${selectedTitle === item.title ? 'bg-blue-100' : ''}`}>
                {item.title}
              </ListItem>
              <hr></hr>
            </React.Fragment>
          ))}
        </List>
      </Card>
      <div className="container-sm mt-10 grid grid-flow-col auto-cols-max flex">
        <div className=" mx-auto h-100 w-full bg-white ">
      <div className="px-6 py-4 max-w-70">
            <h2 className="text-4xl m-20 font-semibold text-gray-800 mb-4">
              {selectedTitle}
            </h2>
            <p className=" text-wrap w-full" >
              {privacyPolicyData.find(item => item.title === selectedTitle)?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
