import React from 'react'
import Image from 'next/image';
import MyForm from './form'
import contact from '../../../public/asset/img/contact.png'

function Contact() {
  return (
    <div className=' overflow-hidden md:h-[600px] w-screen mt-0 md:mt-[100px]'>
        <div className=' mt-5 h-[100%] w-full md:w-[70%] m-auto block md:flex box-border rounded-lg  '>
            <div className='bg-gray-600 h-[63.5%] w-full md:w-[50%]  flex items-start justify-center p-5 mt-5  shadow-2xl'>
                  <MyForm/>
            </div>
            <div className='  h-[90%]  w-full md:w-[50%] p-3'>
                <Image src={contact}  width={800} height={800} className='mt-2' alt='' />
            </div>
        </div>
    </div>
  )
}

export default Contact