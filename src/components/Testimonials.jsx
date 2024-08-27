"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import SwipeCard from "./SwipeCard";
import { TestimonialData } from "../../lib";

const Testimonials = () => {
  return (
    <div className="min-h-50vh">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          dynamicBullets:true
        }}
        modules={[Pagination, Autoplay, FreeMode]}
        className="mySwiper"
      >
        {TestimonialData?.map((data, key) => (
          <SwiperSlide key={key} className="">
            <SwipeCard name={data.name} detail={data.detail} linked_url={data.linkedInURL} fb_url={data.facebookURL} insta_url={data.instagramURL} x_url={data.xURL} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
