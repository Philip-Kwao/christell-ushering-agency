import CallToAction from "@/components/CallToAction";
import OurService from "@/components/home/OurService";
import MainServices from "@/components/service/MainServices";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <main>
      <h1 className="font-black text-3xl text-center ">Our Services</h1>
      <p className="text-orange-500 text-center">
        A Glimpse into Our Work and Passion
      </p>
      <div className="my-10">
        <MainServices />
      </div>
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default page;
