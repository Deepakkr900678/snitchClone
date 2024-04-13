import React from 'react'
import flag from "../assets/indiaFlag.webp"
import { CiMail } from "react-icons/ci";

export default function Login() {
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-40'>
        <h1 className='text-3xl font-semibold'>LOGIN WITH OTP</h1>
        <p className='py-3'>Please enter your 10 digit mobile number</p>
        <div className="flex gap-5">
          <button className="border px-4 border-gray-300 shadow-sm focus:outline-none" >
            <img src={flag} alt="" className='w-8' />
          </button>
          <input type="text" placeholder='Phone Number' className="w-[400px] sm:w-70 md:w-70 px-4 py-2 border -ml-5 border-gray-300 shadow-sm focus:outline-none " />
        </div>
        <button className='border px-12 my-4 py-3 bg-black text-white text-sm rounded-lg'>Request OTP</button>
        <p className='text-sm mb-5'>A 6 digit OTP will be sent to your phone number</p>
        <div className='flex item-center justify-center space-x-6'>
          <hr class="w-28 mt-2" />
          <p className='text-sm mb-6'> Or Sign in with </p>
          <hr class="w-28 mt-2" />
        </div>

        <div className="flex justify-center items-center text-lg gap-2 border py-2 px-5 border-gray-300 rounded-lg">
          <CiMail className="text-2xl" />
          <h1>Email</h1>
        </div>
      </div>
    </>
  )
}
