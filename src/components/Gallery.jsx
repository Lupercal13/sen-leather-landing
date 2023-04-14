import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"

import { Navigation, Pagination, EffectFade } from "swiper";

import blackWallet from "../assets/black-wallets.jpg";
import orangeWallet from "../assets/orange-wallet.jpg";
import handCleanerCase from "../assets/hand-cleaner-holder.jpg";
import hairTies from "../assets/hair-ties.jpg";

const Gallery = () => {
  return (
    <div className="my-20" id="gallery">
      <div className="text-center text-5xl font-semibold border-b-4 pb-4 mx-6 ">
        <h1>Our Works</h1>
      </div>

      <Swiper
      style={{"--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#000"}}
        className=""
        // loop='true'
        modules={[Navigation, Pagination, EffectFade]}
        navigation
        autoHeight
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide Change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="rounded " src={blackWallet} />
            <p className="text-sm sm:text-base text-center tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ut est eum harum error rem amet commodi sunt officiis rerum.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded " src={orangeWallet} />
          <p className="text-sm sm:text-base text-center tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, incidunt! Quia laudantium veniam nesciunt, rerum optio ut error quod eaque molestias. Excepturi fuga totam error repellat. Incidunt dolores odio qui?</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded " src={handCleanerCase} />
          <p className="text-sm sm:text-base text-center tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, eos?</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded " src={hairTies} />
          <p className="text-sm sm:text-base text-center tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet, incidunt ex facilis quidem delectus.</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };
