import React, { useState } from "react";
import { Card, List, ListItem } from "@material-tailwind/react";

const privacyPolicyData = [
  { title: "GENERAL", description: "Description for Dashboard" },
  {
    title: "COLLECTION OF PERSONAL AND OTHER INFORMATION",
    description: "Description for Collection of Personal and Other Information",
  },
  { title: "COOKIES", description: "Description for Cookies" },
  {
    title: "DIVULGING/SHARING OF PERSONAL INFORMATION",
    description: "Description for Divulging/Sharing of Personal Information",
  },
  {
    title: "SECURITY",
    description: "Description for Divulging/Sharing of Personal Information",
  },
  {
    title: "THIRD PARTY ADVERTISEMENTS / PROMOTIONS",
    description: "Description for Divulging/Sharing of Personal Information",
  },
  {
    title: "USER’S CONSENT",
    description: "Description for Divulging/Sharing of Personal Information",
  },
  {
    title: "CHILDREN INFORMATION",
    description: "Description for Divulging/Sharing of Personal Information",
  },
  {
    title: "GRIEVANCE OFFICER",
    description: "Description for Divulging/Sharing of Personal Information",
  },
  {
    title: "DISPUTE RESOLUTION AND JURISDICTION",
    description:
      "The portal, www.fittingswale.com (“Website”) and the mobile application ‘fittingswale’ (“App”) (collectively “Platforms”) is managed and operated by Mittal enterprises (“fittingswale” or “We”), a proprietorship firm with its registered office located at mittal bhawan gol building manaitand dhanbad Jharkhand – 826001 India. Fittingswale is inter alia engaged in the business of wholesale and retail trade in home improvement sector and sale of their allied and auxiliary products (“Products”), through brick and mortar stores and through its Platforms and providing other home design and decor solutions (collectively as “Services”) to the users of the Platforms (“User” or “You” or “Your”)",
  },
];

function Refund() {
  const [selectedTitle, setSelectedTitle] = useState(
    privacyPolicyData[0].title
  );

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };
  return (
    <>
      <div className="flex w-full h-[100vh] mt-10 justify-evenly items-center">
    <div className="w-[30%] bg-orange-300">
    <Card >
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
    </div>
    <div className="w-[70%] bg-yellow-300">
    
    </div>
      </div>
    </>
  );
}

export default Refund;
