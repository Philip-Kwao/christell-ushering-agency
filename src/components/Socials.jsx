import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'

const Socials = () => {
  return (
    <div className='relative text-white'>
        <span className="absolute top-2 h-[1px] w-[5rem] bg-white rounded-full"></span>
        <div className="flex items-center justify-start gap-5 text-xl ml-24">
            <Link href={"https://www.tiktok.com/@christellushering"} className='duration-300 ease-in-out hover:text-orange-500' target='_blank'>
            <FaTiktok />
            </Link>
            <Link href={"https://www.instagram.com/christellusheringagency/"} className='duration-300 ease-in-out hover:text-orange-500' target='_blank'>
            <FaInstagram />
            </Link>
            <Link href={"https://web.facebook.com/profile.php?id=100006308538612&__cft__[0]=AZWopihOx7Ef1isKr6mT6vUXJGlqa4GdbBG7Nk9AYcl9wk1gdWsIrZjSWpGBtq2zniL5lwXZeZlapnjmNPOT7X4mk-FuMfXTIpP7_bgpr69YWPSOj7IEUegef4p8ewZa8pik8Oi6bipN1x4NxmoStYTn8jee2_i_-mtd4zGFIprQaA&__tn__=-UC%2CP-R"} className='duration-300 ease-in-out hover:text-orange-500' target='_blank'>
            <FaFacebook />
            </Link>
        </div>
    </div>
  )
}

export default Socials