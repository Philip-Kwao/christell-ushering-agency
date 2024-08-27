"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavbarData } from "../../lib";
import { FaGripLines } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const closeNav = () => {
    // alert("clicked")
    setNav(!nav);
  };
  return (
    <nav className="flex items-start md:items-center justify-between max-w-[90%] mx-auto my-4 relative">
      <Link href={"/"} className="flex items-center justify-start">
        <Image
          src={"/images/logo.png"}
          width={50}
          height={50}
          alt="Christell Ushering Agency"
        />
        <div className="flex flex-col items-center justify-center text-xs">
          <span className="uppercase font-black tracking-widest">Christell</span>
          <span className="text-orange-500">Ushering Agency</span>
        </div>
      </Link>
      <ul className="md:flex hidden items-center justify-center ">
        {NavbarData.map((data, key) => (
          <li className="mx-4 " key={key}>
            <Link
              href={data.name}
              className="capitalize duration-300 ease-in-out text-teal-500 hover:text-orange-500"
            >
              {data.name}
            </Link>
          </li>
        ))}
      </ul>
      <span
        className="duration-300 ease-in-out text-lg text-teal-500 hover:text-orange-500 cursor-pointer mr-0 absolute right-0 block md:hidden"
        onClick={closeNav}
      >
        <FaGripLines />
      </span>
      <div
        className={`md:hidden ${
          nav ? "flex" : "hidden"
        } absolute right-6 bg-teal-500 py-5 px-8 rounded-lg`}
      >
        <ul className={`flex-col items-end font-medium justify-start`}>
          {NavbarData.map((data, key) => (
            <li className="mx-4 mb-4 tracking-wider" key={key}>
              <Link
                href={data.name}
                className="capitalize duration-300 ease-in-out text-white hover:text-orange-500"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
