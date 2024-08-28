import ContactForm from "@/components/contact/ContactForm";
import Socials from "@/components/Socials";
import Link from "next/link";
import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

const page = () => {
  return (
    <main>
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <div className="bg-teal-500 p-10 w-full md:max-w-[70vw] rounded-xl min-h-[30vw]">
        <Socials />
        <div className="">
          <h4 className="text-3xl my-5 font-bold text-white">Need to make an enquiry ?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-10 my-5">
            <Link className="flex items-center justify-start gap-5 bg-white duration-300 ease-in-out hover:bg-white/50 px-6 py-3 rounded-lg text-sm text-orange-500 text-center" href={"tel:233555357220"} target="_blank">
            <span>
                <FaPhone className="text-lg" />
            </span>
              <span>Give Us a Call</span>
            </Link>
            <Link className="flex items-center justify-start gap-5 bg-white duration-300 ease-in-out hover:bg-white/50 px-6 py-3 rounded-lg text-sm text-orange-500 text-center" href={"https://wa.me/233555357220"} target="_blank">
            <span>
                <FaWhatsapp className="text-lg" />
            </span>
              <span>Send Us a DM</span>
            </Link>
            <Link className="flex items-center justify-start gap-5 bg-white duration-300 ease-in-out hover:bg-white/50 px-6 py-3 rounded-lg text-sm text-orange-500 text-center"
              href={"mailto:christellusheringagency@gmail.com"}
              target="_blank"
            >
                <span>
                    <FaMailBulk className="text-lg" />
                </span>
              <span>Send Us An Email</span>
            </Link>
          </div>
        </div>
      </div>
      <ContactForm />
    </main>
  );
};

export default page;
