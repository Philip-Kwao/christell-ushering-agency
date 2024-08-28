"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./GallerySlideStyles.css"


// import required modules
import { Autoplay, EffectCoverflow, FreeMode, Pagination } from "swiper/modules";
import { GalleryData, GallerySlideData } from "../../../lib";
import Image from "next/image";

const GallerySlide = () => {
  
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        freeMode={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable:true,
          dynamicBullets:true
        }}
        modules={[EffectCoverflow, Pagination, Autoplay, FreeMode]}
        className="mySwiper"
      >
        {GallerySlideData.map((img, key) => (
          <SwiperSlide key={key}>
            <Image src={img.image} width={300} height={300} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlide;
