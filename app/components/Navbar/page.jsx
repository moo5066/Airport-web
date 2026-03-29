import React from 'react'
import { PiAirplaneTakeoffLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className='flex md:justify-center gap-10 items-center   bg-gray-200 py-4 shadow-md px-5  md:px-25 lg:px-50 w-full'>
            <PiAirplaneTakeoffLight size={50} className='bg-blue-700 p-2 rounded-full text-white'/>
            <div className='flex flex-col '>
                <h1 className='text-2xl font-bold'>SkyHub International Airport</h1>
                <p className='text-gray-500'>Real-time flight information and booking</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
