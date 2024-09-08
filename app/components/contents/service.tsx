import React from 'react'
import { BiCableCar } from 'react-icons/bi'
import { FaCarSide, FaKey, FaMoneyBill, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import { FaUnlockKeyhole } from 'react-icons/fa6'

function Service() {
const data =[
    {
        icon: <FaCarSide/>,
        h1: "Free Shipping",
        h2: "Order above $200"
    },
    {
        icon: <FaMoneyBill/>,
        h1: "Money-back",
        h2: "30 days guarantee",
    },
    {
        icon:<FaUnlockKeyhole/>,
        h1: "Secure Payments",
        h2: "Secured by Striped"
    },
    {
        icon: <FaPhoneAlt/>,
        h1: "24/7 Support",
        h2: "Phone and Email support"
    },
]

  return (
    <div className='w-[90%] overflow-hidden md:h-[250px] mt-4 md:mt-8 p-5 block  md:flex justify-between m-auto'>
        {
            data.map((value , index) =>(
            <div className='w-full md:w-[24%] h-[170px] md:h-full bg-slate-200 hover:bg-yellow-500'>
                <div className='text-5xl mt-[50px] ml-8'>
                    {value.icon}
                </div>
                <h1 className='text-xl ml-7 mt-3'>{value.h1}</h1>
                <p className='text-sm text-gray-400 ml-7 mt-3'>{value.h2}</p>
            </div>
            ))
        } 
    </div>
  )
}

export default Service