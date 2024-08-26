"use client"
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <header className="flex flex-col lg:flex-row items-center lg:justify-between justify-center text-center lg:text-left max-w-[80vw] mx-auto">
      <motion.div className=""  
      initial={{ opacity: 0, x:-100 }}
      animate={{ opacity: 1, x:0 }}
      transition={{ duration: 1 }}   
      >
        <h1 className="font-black capitalize text-4xl lg:text-left text-teal-500">
        Your Premier Ushering Service for Memorable Events
        </h1>
        <h4 className="font-light italic bg-orange-500 text-white text-sm max-w-[18rem] rounded-lg mx-auto lg:mx-0 p-2 my-4">Professional, Elegant, and Attentive Ushers to Elevate Your Event Experience.</h4>
        <div className="my-2 flex items-center justify-start gap-2 max-w-[16rem] mx-auto lg:mx-0">
            <Button title={"book us"} href={"contact"} />
            <Button title={"our services"} href={"service"} />
        </div>
      </motion.div>


      {/* Images */}
      <motion.div className=""
      initial={{ opacity: 0, x:100 }}
      animate={{ opacity: 1, x:0 }}
      transition={{ duration: 1 }}
      >
        <Image src={"/images/hero.png"} width={1000} height={1000} alt="" loading="lazy" />
      </motion.div>
    </header>
  );
};

export default Hero;
