import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'

const Socials = () => {
  return (
    <div className='relative text-white'>
        <span className="absolute top-2 h-[1px] w-[5rem] bg-white rounded-full"></span>
        <div className="flex items-center justify-start gap-5 text-xl ml-24">
            <Link href={""} className='duration-300 ease-in-out hover:text-orange-500' target='_blank'>
            <FaTiktok />
            </Link>
            <Link href={""} className='duration-300 ease-in-out hover:text-orange-500' target='_blank'>
            <FaInstagram />
            </Link>
            <Link href={""} className='duration-300 ease-in-out hover:text-orange-500' target='_blank'>
            <FaXTwitter />
            </Link>
        </div>
    </div>
  )
}

export default Socials