"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="relative bg-teal-500 h-full lg:min-h-[70vh] ">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between py-4 max-w-[80vw] mx-auto">
        <motion.div className="max-w-sm"
        initial={{ opacity: 0, x:100 }}
        animate={{ opacity: 1, x:0 }}
        transition={{ duration: 1 }} 
        >
          <h4 className="font-bold text-xl text-white mb-4 uppercase">
            Know more about us
          </h4>
          <p className="text-white">
            At Christell Ushering Agency, we pride ourselves on delivering
            exceptional ushering services tailored to enhance the guest
            experience at every event. With our team of well-trained and
            courteous ushers, we ensure every guest feels welcomed and attended
            to.
          </p>
        </motion.div>
        <motion.div className="relative"
        initial={{ opacity: 0, x:-100 }}
        animate={{ opacity: 1, x:0 }}
        transition={{ duration: 1 }} 
        >
          <div className="flex items-center">
            <div className="bg-orange-500 p-1 rounded-tl-[300px]">
              <Image
                className="rounded-tl-[300px]"
                src={"/images/about.jpg"}
                alt=""
                width={250}
                height={350}
              />
            </div>
          <div className="block md:absolute top-28 -right-48 z-20">
            <div className="bg-white p-1 rounded-tr-[300px]">
              <Image
                className="rounded-tr-[300px]"
                src={"/images/about2.jpg"}
                alt=""
                width={250}
                height={250}
              />
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
