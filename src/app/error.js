"use client"
import Image from 'next/image'
// import { useRouter } from 'next/navigation'
import React from 'react'



const error = () => {
    // const router = useRouter()
    // const handleBack = ()=>{
    //     router.back()
    
    // }
  return (
    <div className='min-h-[73vh] flex flex-col items-center justify-center overflow-hidden'>
        <Image src={"/images/icons/404.png"} alt='404 Error' width={200} height={200} />
        <h1 className='font-bold uppercase text-center'>OOPS! An error occured</h1>
        <span className='text-center cursor-pointer bg-orange-500 text-white rounded-lg py-3 px-5 '>Click To Go Back to previous page</span>

    </div>
  )
}

export default error