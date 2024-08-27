import Image from 'next/image'
import React from 'react'

const OurStory = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6">
        <div className="w-full md:max-w-[70vw] lg:max-w-[40vw] mb-5">
          <h2 className="font-bold text-xl">Our Story</h2>
          <p className="text-justify">
            Christell Ushering Agency was born out of a passion for creating
            memorable experiences and a deep understanding of the importance of
            flawless event execution. Our founder, [Founder’s Name], started
            this journey [X years ago] with a simple belief: every event, no
            matter how big or small, deserves a touch of excellence. Inspired by
            the joy and connections that events bring to peoples lives,
            [Founder’s Name] set out to build a team of dedicated professionals
            who share the same commitment to exceptional service.
          </p>
        </div>
        {/* Images */}
        <div className="flex  items-center relative gap-10">
        <div className="group flex flex-col items-end justify-center">

          <div className="bg-teal-500 duration-300 ease-in-out rounded-tr-[5rem] hover:rounded-tr-full rounded-es-[5rem] hover:rounded-es-full hover:bg-orange-500">
            <Image
              className=""
              src={"/images/christabel.png"}
              width={300}
              height={300}
              alt=""
            />
          </div>
          <span className="font-bold text-orange-500 text-lg  mt-4 text-center duration-300 ease-in-out group-hover:text-teal-500">Christabel</span>
          <span className="italic text-sm">(Co-Founder)</span>
        </div>
        <div className="group flex flex-col items-end justify-center">

          <div className="bg-teal-500 hover:bg-orange-500 duration-300 ease-in-out rounded-tr-[5rem] hover:rounded-tr-full rounded-es-[5rem] hover:rounded-es-full">
            <Image
              className=""
              src={"/images/ella.png"}
              width={300}
              height={300}
              alt=""
            />
          </div>
          <span className="font-bold text-orange-500 text-lg  mt-4 text-center duration-300 ease-in-out group-hover:text-teal-500">Emmanuella</span>
          <span className="italic text-sm">(Co-Founder)</span>
        </div>
        </div>
      </div>
  )
}

export default OurStory