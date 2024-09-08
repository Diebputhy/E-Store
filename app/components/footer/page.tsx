import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='bg-black w-screen overflow-hidden md:h-[230px] p-10 mt-10'>
            <div className='w-full h-[50%] block md:flex '>
                <div className='h-full w-full md:w-[50%] block md:flex text-white '>
                    <h1 className='text-2xl mr-3 ml-14 md:ml-7'>Asdo@w12</h1>
                    <h1 className='text-xl mr-4  hidden md:flex'>|</h1>
                    <h1 className='text-sm mt-2 ml-14 md:ml-0'>Headphone Store</h1>
                </div>
                <div className='h-full w-[50%]   p-3 text-gray-300 '>
                    <ul className='block md:flex justify-end ite'>
                        <li className='mr-10  hover:text-white'>Home</li>
                        <li className='mr-10 mt-3 md:mt-0 hover:text-white'>Shop</li>
                        <li className='mr-10 mt-3 md:mt-0 hover:text-white'>Product</li>
                        <li className='mr-10 mt-3 md:mt-0 hover:text-white'>About</li>
                        <li className='hover:text-white mt-3 md:mt-0'>Contact Us </li>
                    </ul>
                </div>
            </div>
            <div className='border-t border-gray-500'></div>
                <div className='w-full h-[50%] block md:flex'>

                <div className='w-full md:w-[50%] h-full flex text-gray-200 text-[13px] mt-3 '>
                    <p className='hover:text-white'>Copyright © 2024 Puthy01. All rights reserved</p>
                    <p className='ml-6 hover:text-white hover:underline'>Privacy Policy</p>
                    <p className='ml-6 hover:text-white hover:underline'>Term of Use</p>
                </div>
                <div className='w-full md:w-[50%] h-full flex justify-center md:justify-end mt-5  text-white text-2xl'>
                    <BiLogoFacebook className='mr-5 hover:scale-105' />
                    <FaInstagram className='mr-5 hover:scale-105' />
                    <FaYoutube className='mr-6 hover:scale-105' />
                </div>


            </div>

        </div>
    )
}
