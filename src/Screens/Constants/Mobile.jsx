
import React from "react";
import { FaYoutube, FaGooglePlay } from "react-icons/fa";

const Mobile = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">    
      <div className="md:w-1/2 flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-black  text-5xl">Get the FittingsWale App</h2><br></br>
          <h2 className="text-gray-400 text-lg">We will send you a link, open it on your phone to download the app</h2><br></br>
          <div className="flex flex-row items-center">
          <input
            type="text"
         placeholder="Enter your Email "
            className="px-4 py-2 border border-gray-300 rounded-l-lg w-80"
          />
          <button className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-[#df633a]-600">
            Send
          </button>
          </div>
        </div>
        
        <p className="text-lg ">Download App From</p>
        
        <div className="flex space-x-4">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#df633a] text-white rounded-lg hover:bg-red-600"
          >
            <FaYoutube className="mr-2" /> Get it on app store
          </a>
            <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#df633a] text-white rounded-lg hover:bg-green-600"
          >
            <FaGooglePlay className="mr-2 color-orange" />Get it on Play Store
          </a>
        </div>
      </div>
        <div className="flex flex-col justify-center items-center w-1/2">
       <img
            src="https://www.fittingswale.in/static/media/Banner.01e82a2f801e6328200c.png"
            alt="Mobile Application"
            className="mt-4 w-3/4 "
          />
        </div>
    </div>
  );
};

export default Mobile;

