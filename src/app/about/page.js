import OurStory from "@/components/about/OurStory";
import Statement from "@/components/about/Statement";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <section className="">
      <h1 className="font-black text-3xl text-center ">
        About Christell Ushering Agency
      </h1>
      <p className="text-orange-500 text-center">Get to know more about us </p>
      <OurStory />
      <Statement />
      <CallToAction />
    </section>
  );
};

export default AboutPage;
