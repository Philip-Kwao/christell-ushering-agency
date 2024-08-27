import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

const SwipeCard = ({name,detail,x_url,insta_url,fb_url,linked_url}) => {
  return (
    <div className="bg-slate-100 rounded-lg max-w-xl mx-auto p-10 m-10 shadow-md">
      <div className="flex items-center justify-start gap-y-5 gap-x-20 mb-6">
        <FaUserCircle className="text-3xl" />
        <span className="relative">
          <span className="absolute top-3 -left-14 h-[2px] w-[3rem] bg-teal-500"></span>
          <span className="">{name}</span>
        </span>
      </div>
      <p className="text-justify italic">
        {detail}
      </p>
      <span className="flex items-center justify-center text-slate-500 text-xl gap-5 mt-6 ">
        <Link href={fb_url||""} target="_blank">
          <FaFacebook className="hover:text-teal-500" />
        </Link>
        <Link href={insta_url||""} target="_blank">
          <FaInstagram className="hover:text-teal-500" />{" "}
        </Link>
        <Link href={x_url||""} target="_blank">
          <FaX className="hover:text-teal-500" />
        </Link>
        <Link href={linked_url||""} target="_blank">
          <FaLinkedin className="hover:text-teal-500" />
        </Link>
      </span>
    </div>
  );
};

export default SwipeCard;
