
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import Cards from "./Cards";
import { useSelector } from 'react-redux';
export default function Home() {
  const cateogry = useSelector(state => state.Reducers.cateogry)
  const banner = useSelector(state => state.Reducers.banner)

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
              className='w-full h-[60vh] object-contain'
              src={item?.image}
            />
          ))
        }
      </Carousel>
      <Cards data={cateogry}/>
    </div>
  );
}