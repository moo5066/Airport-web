"use client";

import React, { useState } from "react";
import {
  PiAirplaneTakeoffLight,
  PiBuildingsLight,
  PiAirplaneLandingLight,
  PiTicketLight,
  PiMagnifyingGlass,
} from "react-icons/pi";
import { GoPeople, GoChecklist } from "react-icons/go";
import { IoIosTrendingUp } from "react-icons/io";

/* 🔹 Reusable Stat Card */
const StatCard = ({ icon: Icon, label, value, trend, iconBg, iconColor, isNegative }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex justify-between items-center">
    <div>
      <div className={`${iconBg} ${iconColor} p-3 rounded-full inline-flex`}>
        <Icon size={26} />
      </div>
      <p className="mt-3 text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>

    <div
      className={`text-xs font-semibold px-3 py-1 rounded-full ${
        isNegative
          ? "bg-orange-100 text-orange-700"
          : "bg-green-100 text-green-700"
      }`}
    >
      {trend}
    </div>
  </div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Departures");

  const stats = [
    {
      icon: GoPeople,
      label: "Passengers Today",
      value: "23,456",
      trend: "+8%",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: GoChecklist,
      label: "On-Time Rate",
      value: "94%",
      trend: "+2%",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: PiBuildingsLight,
      label: "Airlines",
      value: "45",
      trend: "+3",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      icon: IoIosTrendingUp,
      label: "Active Flights",
      value: "147",
      trend: "+12",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const tabs = [
    { id: "Departures", icon: PiAirplaneTakeoffLight },
    { id: "Arrivals", icon: PiAirplaneLandingLight },
    { id: "Book Flight", icon: PiTicketLight },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔹 Header */}
      <header className="flex flex-col md:flex-row items-center gap-6 bg-white px-6 py-6 border-b">
        <div className="bg-blue-600 p-3 rounded-2xl shadow-lg">
          <PiAirplaneTakeoffLight size={30} className="text-white" />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            SkyHub International Airport
          </h1>
          <p className="text-sm text-gray-500">
            Real-time flight information and booking
          </p>
        </div>

        <div className="md:ml-auto hidden lg:block text-right">
          <p className="text-xs text-gray-400">STATUS</p>
          <p className="text-sm font-semibold text-green-600 flex items-center gap-2 justify-end">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            All Systems Operational
          </p>
        </div>
      </header>

      {/* 🔹 Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Top */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Operations Overview
            </h2>
            <p className="text-gray-500 text-sm">
              Last updated: {new Date().toLocaleTimeString()}
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search flights..."
              className="pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-10 bg-white p-2 rounded-2xl shadow">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <tab.icon size={18} />
                {tab.id}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 bg-white rounded-2xl p-8 text-center shadow">
          <h3 className="text-lg font-bold">{activeTab}</h3>
          <p className="text-gray-500 mt-2">
            Showing data for {activeTab.toLowerCase()}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;