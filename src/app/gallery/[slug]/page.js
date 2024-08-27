"use client";
import React from "react";
import { GalleryData } from "../../../../lib";
import Image from "next/image";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";

const page = ({ params }) => {
  const slugParams = params.slug;
  const imagesurl = GalleryData?.find((data) => slugParams === data.slug);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="my-10">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom,lgAutoplay]}
        elementClassNames="flex items-start gap-2 justify-center flex-wrap max-w-[90vw] mx-auto cursor-pointer"
      >
        {imagesurl.images.map((img, key) => (
          <a href={img.image} key={key}>
            <Image className="rounded-xl hover:rounded-none shadow-md" src={img.image} width={500} height={500} alt="" />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default page;
