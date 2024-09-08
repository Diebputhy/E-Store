import React from 'react'
import Image from 'next/image';
import pro from "../../../public/asset/img/pro.jpg"

function Promotion() {
  return (
    <div className='w-screen  overflow-hidden md:h-[400px] bg-red-500 mt-10  block md:flex'>
        <div className=' w-full md:w-1/2 h-full bg-gray-600 flex items-center justify-center'>
            <Image src={pro} alt="Man" width={450} height={450} className='hover:transform-gpu hover:scale-102 ml-[50px] md:ml-[200px] mt-2' />
        </div>
        <div className='w-full md:w-1/2 h-full bg-yellow-500 font-mono p-4'>
            <p className='ml-5 text-blue-600 text-2xl font-bold mt-4 mb-6'>promotion</p>
            <p className='ml-5 text-3xl  md:text-5xl font-bold mb-4'>Hurry up! 40% OFF</p>
            <p className='ml-5 text-lg font-bold mb-4'>Thousands of high tech are waiting for you</p>
            <p className='ml-5  text-lg font-bold mb-3'>Offer expires in:</p>
            <div className='w-[80%] md:h-[15%] md:w-[37%] flex justify-between ml-4'>
                <div className='w-[22%] h-full bg-white flex items-center justify-center text-4xl font-bold '>
                    02
                </div>
                <div className='w-[22%] h-full bg-white flex items-center justify-center text-4xl font-bold '>
                    12
                </div>
                <div className='w-[22%] h-full bg-white flex items-center justify-center text-4xl font-bold '>
                    45
                </div>
                <div className='w-[22%] h-full bg-white flex items-center justify-center text-4xl font-bold '>
                    05
                </div>
            </div>
            <div className=' w-[80%] md:h-[3%] md:w-[39%] flex justify-between ml-4 mt-2 '>
                <div className='w-[22%] h-full  flex items-center justify-center text-sm font-bold font-serif'>
                    Day
                </div>
                <div className='w-[22%] h-full  flex items-center justify-center text-sm font-bold font-serif'>
                    Hours
                </div>
                <div className='w-[22%] h-full  flex items-center justify-center text-sm font-bold font-serif'>
                    Minuts
                </div>
                <div className='w-[22%] h-full flex items-center justify-center text-sm font-bold font-serif'>
                    Seconds
                </div>
            </div>
            <button className='h-[40px] w-[130px] bg-black mt-5 ml-4 rounded-md text-white hover:bg-white hover:text-black'>Shop Now</button>
        </div>
    </div>
  )
}

export default Promotion