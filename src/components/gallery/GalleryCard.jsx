"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const GalleryCard = ({ title, image, detail, link }) => {
    const router = useRouter()
  return (
    <div onClick={()=>router.push(`gallery/${link}`)} className="min-w-[50vw] mx-auto h-full duration-300 ease-in-out rounded-lg hover:bg-orange-500 bg-teal-500/90 text-white group cursor-pointer">
        <div className="flex flex-col lg:flex-row items-center gap-5 justify-start shadow-md">
          <Image className=" rounded-2xl"
            src={image}
            alt={title || ""}
            width={400}
            height={400} 
          />
          <div className="p-5 max-w-sm">
            <h4 className="uppercase font-bold text-xl">
              {title}
            </h4>
            <p className="text-justify">
                {detail}
            </p>
            <div className="flex items-center justify-start  my-4  gap-10">
            <BsArrowRight className="text-2xl duration-300 ease-in-out group-hover:translate-x-10" />
            <span className="hidden group-hover:block">Click To View</span>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default GalleryCard;
