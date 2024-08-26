import React from 'react'
import { serviceData } from '../../../lib'
import ServiceCard from '../ServiceCard'



const OurService = () => {
  return (
    <div className='mt-20'>
        <div className="max-w-xl mx-auto text-center">
            <h4 className="font-bold text-3xl mt-20">Our Services</h4>
            <p className="">Our ushers are trained to handle high-profile corporate events with grace and professionalism, ensuring smooth guest management and logistics.</p>
        </div>
        <div className="max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between grid-rows-2 gap-3">
            {
                serviceData.map((data, key)=>(
                        <ServiceCard key={key} name={data.name} icon={data.icon} detail={data.detail}  />
                ))
            }
        </div>
    </div>
  )
}

export default OurService