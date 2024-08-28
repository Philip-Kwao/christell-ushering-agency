import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='min-h-[73vh] flex flex-col items-center justify-center overflow-hidden'>
        <Image src={"/images/icons/404.png"} alt='404 Error' width={200} height={200} />
        <h1 className='font-bold uppercase text-center'>Loading ...</h1>

    </div>
  )
}

export default loading