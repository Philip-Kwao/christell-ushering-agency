import Image from "next/image";
import Button from "./Button";
import Socials from "./Socials";

const CallToAction = () => {
  return (
    <div className=" w-full bg-teal-500 min-h-[24rem]  ">
      <div className="relative xl:max-w-[80vw] mx-auto mt-32 p-10 flex items-center justify-between  z-30 ">
        <div className="max-w-[100vw] mx-auto md:mx-0 bg-teal-500/50 rounded-xl p-5">
          <Socials />
          <h4 className="text-3xl font-extrabold mt-6 mb-3 text-white tracking-wide max-w-sm  lg:max-w-md">
            Dont hesitate to contact us
          </h4>
          <p className="text-white max-w-xs lg:max-w-md">
            Make Your Event Unforgettable – Contact Us Now
          </p>
          <div className="my-6">
            <Button href={"contact"} title={"Get In Touch"} />
          </div>
        </div>
        <div className="lg:absolute -top-44 right-6 hidden md:block -z-10">
          <Image
            className=""
            src={"/images/hero-transparent.png"}
            width={800}
            height={800}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
