import React from "react"
import { FaMapMarked } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { PiMapPinSimpleAreaFill } from "react-icons/pi";
import { GiPerpendicularRings } from "react-icons/gi";
import { TiArchive } from "react-icons/ti";
import { TiClipboard } from "react-icons/ti";
import { TiFolderOpen } from "react-icons/ti";

const Dashboard = () => {
    return (
        <div className=" bg-gray-50 p-6">
            <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Upcoming Event</h2>
                        <FaMapMarked size={24} className="text-blue-500" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">0</h3>
                        <p className="text-sm text-gray-600">Events you can attend</p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Pending Approvals</h2>
                        <GiPerpendicularRings size={24} className="text-orange-500" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">0</h3>
                        <p className="text-sm text-gray-600">Awaiting approval</p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Total Contacts</h2>
                        <IoIosTimer size={24} className="text-green-500" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">0</h3>
                        <p className="text-sm text-gray-600">Contacts available</p>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Confirmed Guest</h2>
                        <PiMapPinSimpleAreaFill size={24} className="text-purple-500" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">0</h3>
                        <p className="text-sm text-gray-600">Guests confirmed</p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Quick Actions</h2>
                <p className="text-gray-600 mb-6">Common tasks to get you started</p>

                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <TiArchive size={32} className="text-blue-500 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Archive</h3>
                        <p className="text-sm text-gray-600">Archive events</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <TiFolderOpen size={32} className="text-green-500 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Manage Events</h3>
                        <p className="text-sm text-gray-600">Create and manage events</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <TiClipboard size={32} className="text-orange-500 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Manage Contacts</h3>
                        <p className="text-sm text-gray-600">Add and manage contacts</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Upcoming Events</h2>
                    <p className="text-gray-600 mb-4">Events you can attend</p>
                    <p className="text-gray-500 text-center py-8">No upcoming events available</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Your Events</h2>
                    <p className="text-gray-600 mb-4">Events you have created</p>
                    <p className="text-gray-500 text-center py-8">No events created yet</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard