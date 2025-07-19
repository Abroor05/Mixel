import React from 'react'
import "./Hero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Hero() {
  return (
    <>

        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="imgs/hero.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="imgs/hero.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="imgs/hero.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="imgs/hero.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="imgs/hero.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="imgs/hero.png" alt="" />
        </SwiperSlide>
      </Swiper>

    </>
  )
}

export default Hero