import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-teal-600 w-full text-white h-20 z-10 text-center mb-0">
      <div className="pt-8">Copyright Reserved - <Link href={'/'}>Christell Ushering Agency</Link></div>
    </footer>
  )
}

export default Footer