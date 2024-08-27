import Link from 'next/link'
import React from 'react'

const Button = ({href,title}) => {
  return (
    <Link href={href} className={`duration-300 ease-in-out bg-black hover:bg-orange-500 text-white py-3 px-5  rounded-lg capitalize  `}>{title}</Link>
  )
}

export default Button