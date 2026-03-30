import React from 'react'
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";


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


<div className='px-6 md:px-12 lg:px-20 mt-10'>
 
 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>

  <div className='border border-gray-300 rounded-lg shadow-lg h-40 w-full flex justify-between px-8 items-center'>
    <div >
    < PiAirplaneTakeoffLight size={50} className='bg-blue-200 text-blue-500 p-2 rounded-full'/>
    <p className='mt-3 text-gray-500'>Passengers Today</p>
    <p className='text-3xl'>23,456</p>
    </div>
    <div className='bg-green-100 p-1.5 rounded-full'>
    <p>+8%</p>
    </div>
  </div>


  <div className='border border-gray-300 rounded-lg shadow-lg h-40 w-full flex justify-between px-8 items-center'>
    <div >
    <GoPeople size={50} className='bg-green-200 text-green-500 p-2 rounded-full'/>
    <p className='mt-3 text-gray-500'>On-Time Rate</p>
    <p className='text-3xl'>94%</p>
    </div>
    <div className='bg-green-100 p-1.5 rounded-full'>
    <p>+2%</p>
    </div>
  </div>
  <div className='border border-gray-300 rounded-lg shadow-lg h-40 w-full flex justify-between px-8 items-center'>
    <div >
    <MdOutlineWatchLater size={50} className='bg-indigo-200 text-indigo-500 p-2 rounded-full'/>
    <p className='mt-3 text-gray-500'>Airlines</p>
    <p className='text-3xl'>45</p>
    </div>
    <div className='bg-green-100 p-1.5 rounded-full'>
    <p>+3</p>
    </div>
  </div>


  <div className='border border-gray-300 rounded-lg shadow-lg h-40 w-full flex justify-between px-8 items-center'>
    <div >
    <IoIosTrendingUp size={50} className='bg-red-200 text-red-500 p-2 rounded-full'/>
    <p className='mt-3 text-gray-500'>Active Flights</p>
    <p className='text-3xl'>147</p>
    </div>
    <div className='bg-green-100 p-1.5 rounded-full'>
    <p>+12</p>
    </div>
  </div>






</div>
</div>


      </div>
    </div>
  )
}

export default Navbar
