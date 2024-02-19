
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import Cards from "./Cards";
export default function Home() {
  const banner = [1,2,3]
  return (
    <div
      className=" font-Raleway mt-[140px]"
    >
      <Carousel
        infiniteLoop
        autoPlay
        swipeable={true}
        showThumbs={false}
        showIndicators={true}
        showArrows={false}
        showStatus={false}
        interval={3500}
        transitionTime={2000}
      >
        {
          banner?.map((item, index) => (
            <img
              key={index}
              alt='banner'
              className='w-full h-[60vh] object-cover'
              // src={URLS.imageurl + item?.image}
              src='https://www.mobelhomestore.com/cdn/shop/files/Untitled_design_c4e9bc56-67e6-426b-af38-58bf94a49ef2.jpg?v=1670843886'
            />
          ))
        }
      </Carousel>
      <Cards />
      {/* <Products /> */}
    </div>
  );
}