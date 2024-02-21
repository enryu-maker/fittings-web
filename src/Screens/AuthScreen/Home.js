
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import Cards from "./Cards";
import Products from "../ProductScreen/Products";
export default function Home() {
    
  return (
    <>
      <TECarousel showControls  ride="carousel">
        <div className="relative w-90 h-90 flex-1	 rounded-lg overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img 
              src="https://i.pinimg.com/originals/2f/2b/ff/2f2bff255fc46eeab07c8ff6cce6189a.jpg"
              className="block"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h1 className="text-5xl	text-black	">LIVING AREA</h1>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/18122248/Easy-and-simple-kitchen-design-ideas-for-your-home-FB-1200x700-compressed.jpg"
              className="block "
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h1 className="text-5xl	 text-black	">KITCHEN AREA</h1>
              
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://assets-news.housing.com/news/wp-content/uploads/2022/02/28174439/bed-with-wardrobe-feature-compressed.jpg"
              className="block "
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h1 className="text-5xl	 text-black	">BEDROOM AREA</h1>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
     
      <Cards/> 
      <Products/>
    </>
  );
}