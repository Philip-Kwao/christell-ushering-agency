import React from "react";

import Image from "next/image";
import { GalleryData } from "../../../lib";
import ServiceCard from "../ServiceCard";
import GalleryCard from "./GalleryCard";

const GalleryBox = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-5 items-center justify-between w-full flex-wrap mx-auto my-20">
      {GalleryData.map((data, key) => (
        <GalleryCard key={key} title={data.title} image={data.thumbnail} link={data.slug} detail={data.detail} />
      ))}
    </section>
  );
};

export default GalleryBox;
