import React from 'react'
import Image from 'next/image';
import header3 from "../../../public/asset/img/header3.jpg"
import header4 from "../../../public/asset/img/header4.jpg"
import header5 from "../../../public/asset/img/header5.jpg"
import { GoArrowRight } from 'react-icons/go';

function ShopCollection() {
  return (
    <div className='overflow-hidden md:h-[650px] w-full  mt-6 p-3'>
        <h1 className='font-serif text-4xl ml-8 mb-5 '>Shop Collection</h1>
        <div className='w-full  h-[90%] p-3 block md:flex justify-between' >
            <div className='h-[50%] w-full md:w-[50%] md:h-full bg-slate-200 mb-3 md:mb-0 p-3 md:p-0'>
                <div className='w-full h-[80%]  flex justify-center items-center mt-4'>
                <Image src={header3} alt="Man" width={400} height={400} className='' />
                </div>
                <div className='w-full h-[20%] ml-6'>
                    <h1 className='text-4xl font-bold font-serif'>Headband</h1>
                    <div className='flex underline'>
                        <p className='text-lg font-serif underline'>Collection</p> 
                        <GoArrowRight className='text-black mt-2 ml-2 tetx-xl'/>
                        </div>
                </div>
            </div>
            <div className='h-[50%] w-full md:w-[50%] md:h-full block justify-between'>
                <div className='h-[49%] w-full bg-slate-200 flex'>
                    <div className='w-[40%] h-full ml-8 '>
                        <h1 className='text-4xl font-bold font-serif mt-[150px]'>Earbuds</h1>
                        <div className='flex underline'>
                        <p className='text-lg font-serif underline'>Collection</p> 
                        <GoArrowRight className='text-black mt-2 ml-2 tetx-xl'/>
                        </div> 
                    </div>
                    <div className='w-[60%] h-full flex justify-center items-center'>
                        <Image src={header4} alt="Man" width={250} height={250} className='' />
                    </div>
                </div>
                <div className='h-[48.5%] w-full bg-slate-200 flex mt-3'>
                    <div className='w-[40%] h-full ml-8 '>
                        <h1 className='text-4xl font-bold font-serif mt-[150px]'>Earbuds</h1>
                        <div className='flex underline'>
                        <p className='text-lg font-serif underline'>Collection</p> 
                        <GoArrowRight className='text-black mt-2 ml-2 tetx-xl'/>
                        </div>
                    </div>
                    <div className='w-[60%] h-full flex justify-center items-center'>
                        <Image src={header5} alt="Man" width={250} height={250} className='' />
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default ShopCollection