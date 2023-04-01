import React from "react";
import { featChar } from "./images";
// import Slider from "./swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination } from "swiper";

const Featuredcharacters = () => {
  return (
    <>
      <div id="character-main">
        <div className="character-container">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
      
              },
              "@0.75": {
                slidesPerView: 4,
           
              },
              "@1.00": {
                slidesPerView: 3,
             
              },
              "@1.50": {
                slidesPerView: 5,
               
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
          {featChar.map((character, id) => {
            const { char, heroname, name } = character;
            return (
              <>
                <SwiperSlide>
                  {" "}
                  <div className="relative" id="character" key={id}>
                    <img className="w-[16em]" src={char} />
                    <div className="character-detail">
                      <span>{heroname.toUpperCase()}</span>
                      <span>{name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper></div>
      </div>
      {/* <div style={{ background: "black" }}>
        <Slider />
      </div> */}
    </>
  );
};

export default Featuredcharacters;
