import React from 'react';
import { PiAirplaneTakeoffLight, PiBuildingsLight } from "react-icons/pi";
import { GoPeople, GoChecklist } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";

const StatCard = ({ icon, label, value, trend, iconBg, iconColor }) => (
  <div className='bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow h-40 w-full flex justify-between px-6 items-center'>
    <div>
      <div className={`${iconBg} ${iconColor} p-3 rounded-full inline-block`}>
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <p className='mt-3 text-sm font-medium text-gray-500'>{label}</p>
      <p className='text-3xl font-bold text-gray-800'>{value}</p>
    </div>
    <div className='bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full self-start mt-6'>
      {trend}
    </div>
  </div>
);

const Navbar = () => {
  const stats = [
    {
      icon: <GoPeople />,
      label: "Passengers Today",
      value: "23,456",
      trend: "+8%",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <GoChecklist />,
      label: "On-Time Rate",
      value: "94%",
      trend: "+2%",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <PiBuildingsLight />,
      label: "Airlines",
      value: "45",
      trend: "+3",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      icon: <IoIosTrendingUp />,
      label: "Active Flights",
      value: "147",
      trend: "+12",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section */}
      <header className='flex flex-col md:flex-row md:justify-center gap-6 items-center bg-white py-6 shadow-sm px-6 w-full border-b border-gray-200'>
        <div className='bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-200'>
          <PiAirplaneTakeoffLight size={32} className='text-white' />
        </div>
        <div className='flex flex-col text-center md:text-left'>
          <h1 className='text-2xl font-extrabold text-gray-900 tracking-tight'>SkyHub International Airport</h1>
          <p className='text-sm text-gray-500 font-medium uppercase tracking-wider'>Real-time flight information and booking</p>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className='mt-12 max-w-4xl mx-auto'>
          <div className='bg-white shadow-xl shadow-gray-200/50 rounded-2xl p-2 border border-gray-100'>
            <div className='flex flex-wrap md:flex-nowrap justify-between gap-2'>
              {['Departures', 'Arrivals', 'Book Flight'].map((item) => (
                <button
                  key={item}
                  className='flex-1 py-4 px-6 text-sm font-bold text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all active:scale-95'
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
