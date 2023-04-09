import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import blackWallet from '../assets/black-wallets.jpg'
import orangeWallet from '../assets/orange-wallet.jpg'
import handCleanerCase from '../assets/hand-cleaner-holder.jpg'
import hairTies from '../assets/hair-ties.jpg'

const Gallery = () => {
  return (
    <div>
        <div className="text-center text-5xl font-semibold border-b-4 pb-4 mx-6">
            <h1>Our Works</h1>
        </div>

    <Swiper
    className="my-20 mx-6"
      modules={[Navigation, Pagination]}
      navigation
      autoHeight
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log("slide Change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className="rounded border-2 border-black/50"  src={blackWallet}/></SwiperSlide>
      <SwiperSlide><img className="rounded border-2 border-black/50" src={orangeWallet}/></SwiperSlide>
      <SwiperSlide><img className="rounded border-2 border-black/50" src={handCleanerCase}/></SwiperSlide>
      <SwiperSlide><img className="rounded border-2 border-black/50" src={hairTies}/></SwiperSlide>

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
