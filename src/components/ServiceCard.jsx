import Image from "next/image";
import React from "react";

const ServiceCard = ({ name, icon, detail }) => {
  return (
    <div className="max-w-xl mx-auto min-h-96 duration-300 ease-in-out rounded-lg hover:bg-orange-500 p-5 bg-teal-500/90 text-white">
      <div className="p-5">
        <div className="flex items-center gap-5 justify-start">
          <Image src={icon} alt={name} width={50} height={50} />
          <h4 className="uppercase font-bold text-xl">{name}</h4>
        </div>
      </div>
      <p className="text-justify">{detail}</p>
    </div>
  );
};

export default ServiceCard;
