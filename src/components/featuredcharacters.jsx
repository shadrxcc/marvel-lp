import React from "react";
import { featChar } from "./images";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination } from "swiper";

const Featuredcharacters = () => {
  return (
    <>
      <div id="character-main">
        
        <div className="character-container">
          {featChar.map((character, id) => {
            const { char, heroname, name } = character;
            return (
              <>
                  <div className="relative" id="character" key={id}>
                    <img className="w-[16em]" src={char} />
                    <div className="character-detail">
                      <span>{heroname.toUpperCase()}</span>
                      <span>{name}</span>
                    </div>
                  </div>
              </>
            );
          })}
       </div>
      </div>
    
    </>
  );
};

export default Featuredcharacters;
