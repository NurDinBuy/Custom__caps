import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./slider.css";

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper';

const Slider = () => {
  const caps = useSelector(({ caps }) => caps.items);
  console.log(caps);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper">
        {caps.map((data) => (
          <SwiperSlide>
            <div key={data.id} className="slider__block">
              <div className="slider__img">
                <img src="https://www.freepnglogos.com/uploads/cap-png/cap-new-caps-png-download-for-picsart-png-download-nsb-7.png" alt="" />
              </div>
              <div className="slider__brand">
                <p>{data.brand}</p>
              </div>
              <div className="slider__name">
                <p>{data.name}</p>
              </div>
              <div className="slider__price">
                <p>{data.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
