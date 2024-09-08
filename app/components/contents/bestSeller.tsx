import React from 'react'
import Image from 'next/image';
import header1 from "../../../public/asset/img/header1.jpg"
import header2 from "../../../public/asset/img/header2.jpg"
import header3 from "../../../public/asset/img/header3.jpg"
import header4 from "../../../public/asset/img/header4.jpg"
import header5 from "../../../public/asset/img/header5.jpg"
import { BiStar } from 'react-icons/bi';

function BestSeller() {
    const data = [
        {
            img: header1,
            name: "Skull Candy-Crusher anc 2..",
            price: 299
        },
        {
            img: header4,
            name: "Skull Candy-Crusher anc 2..",
            price: 259
        },
        {
            img: header3,
            name: "Skull Candy-Crusher anc 2..",
            price: 270
        },
        {
            img: header4,
            name: "Skull Candy-Crusher anc 2..",
            price: 399
        },
        {
            img: header5,
            name: "Skull Candy-Crusher anc 2..",
            price: 200
        },
        
    ]
  return (
    <div className='w-screen overflow-hidden px-8  mt-7'>
    <h1 className='text-4xl text-black font-serif mb-10'>Best Seller</h1>
    <div className='w-full block md:flex justify-between'>
        {
            data.map((value, key) => (
                <div className='w-full md:w-[19%] relative '>
                    <div className='w-full h-[75%] bg-slate-200 '>
                        <Image src={value.img} alt="Man" width={500} height={500} className='hover:transform-gpu hover:scale-105' />
                    </div>
                    <div className='w-full h-[25%] '>
                        <div className='flex text-black text-sm p-2 font-serif ml-0 '>
                            <BiStar className='' />
                            <BiStar className='ml-1' />
                            <BiStar className='ml-1' />
                            <BiStar className='ml-1' />
                            <BiStar className='ml-1' />
                        </div>
                        <p className='font-serif  font-bold'>{value.name}</p>
                        <p className='font-serif  font-bold' >$ {value.price}.00</p>

                    </div>
                    <button className='bg-white h-[35px] w-[70px] rounded-lg absolute top-4 left-3 hover:bg-yellow-400'>New</button>
                </div>
            ))
        }

    </div>
    <div className='w-full h-[75%] hidden  md:flex justify-between '>
        {
            data.map((value, key) => (
                <div className='w-[19%] relative '>
                    <div className='w-full h-[75%] bg-slate-200 '>
                        <Image src={value.img} alt="Man" width={500} height={500} className='hover:transform-gpu hover:scale-105' />
                    </div>
                    <div className='w-full h-[25%] '>
                        <div className='flex text-black text-sm p-2 font-serif ml-0 '>
                            <BiStar className='' />
                            <BiStar className='ml-1' />
                            <BiStar className='ml-1' />
                            <BiStar className='ml-1' />
                            <BiStar className='ml-1' />
                        </div>
                        <p className='font-serif  font-bold'>{value.name}</p>
                        <p className='font-serif  font-bold' >$ {value.price}.00</p>

                    </div>
                    <button className='bg-white h-[35px] w-[70px] rounded-lg absolute top-4 left-3 hover:bg-yellow-400'>New</button>
                </div>
            ))
        }

    </div>
    
    </div>
    
    
  )
}

export default BestSeller