import React from "react"
import { FaSearch } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { MdCompare } from "react-icons/md";
const Host = () => {
    return (
        <div className="">
            <div className="p-20 flex flex-row items-center justify-between">
                <div className="">
                    <h1 className="font-bold text-2xl">Host Details Management</h1>
                    <h4 className="text-gray-400">Manage host details and organizational assignments for events</h4>
                </div>
                <div>
                    <button className="bg-black h-10 rounded-lg w-40 text-white flex flex-row items-center justify-center rounded-ld gap-2">
                        <h1 className="text-2xl font-bold mb-1">+</h1>
                        <h4 className="text-sm font-bold">Add Host details</h4>
                    </button>
                </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg  h-35 w-280 ml-20">
                <h4 className="font-semibold text-md p-4">Search and Filter</h4>
                <div className="flex flex-row gap-3">
                    <div className="relative mt-2 p-2 mb-3 ml-4 flex flex-row gap-3 items-center justify-center ">
                        <FaSearch className="absolute left-3 mt-3 ml-3 items-center top-2 text-gray-500" size={14} />
                        <input type="text" placeholder="Search host details...." className="h-8 w-60 text-sm bg-gray-200 text-black rounded-lg pl-10 pr-2 " />
                        <div>
                            <select className="h-8 w-60 bg-gray-200 text-black mt-2 rounded-lg px-2 text-sm">
                                <option className="text-sm font-bold" value="">All Companies</option>
                                <option value="tech-corp">Tech Corporation</option>
                                <option value="innovate-solutions">Innovate Solutions</option>
                                <option value="global-enterprises">Global Enterprises</option>
                                <option value="digital-dynamics">Digital Dynamics</option>
                                <option value="future-systems">Future Systems</option>
                            </select>
                        </div>
                        <div>
                            <select className="h-8 w-60 bg-gray-200 text-black mt-2 rounded-lg px-2 text-sm">
                                <option value="all-status">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>

                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-2">
                <div className="bg-white border border-gray-300 h-35 flex flex-col justify-between rounded-lg p-3 w-82 m-8 ml-20 ">
                    <div className="flex flex-row items-center justify-between">
                        <h4 className="font-bold text-sm">Total Host Details</h4>
                        <BiCommentDetail className="text-xl" />
                    </div>
                    <div>
                        <h1 className="font-bold text-3xl">9</h1>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 h-35 flex flex-col justify-between rounded-lg p-3 w-82 m-8 ">
                    <div className="flex flex-row items-center justify-between">
                        <h4 className="font-bold text-sm">Active</h4>
                        <IoPersonSharp className="text-xl" />
                    </div>
                    <div>
                        <h1 className="font-bold text-3xl">9</h1>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 h-35 flex flex-col justify-between rounded-lg p-3 w-82 m-8 ">
                    <div className="flex flex-row items-center justify-between">
                        <h4 className="font-bold text-sm">Companies</h4>
                        <MdCompare className="text-xl" />
                    </div>
                    <div>
                        <h1 className="font-bold text-3xl">6</h1>
                    </div>
                </div>
            </div>

            <div className="h-110 w-285 bg-white border border-gray-300 p-7 rounded-lg ml-18">

                <h4 className="font-bold text-md">Host Details (9)</h4>
                <p>Manage organizational host details for event assignments</p>

                <div className="mt-4">
                    <table className="w-full bg-gray-100 rounded-lg overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Company</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-300">
                                <td className="px-4 py-3 text-sm">John Smith</td>
                                <td className="px-4 py-3 text-sm">Tech Corporation</td>
                                <td className="px-4 py-3 text-sm">Senior Event Coordinator</td>
                                <td className="px-4 py-3"><span className="bg-black text-white px-2 py-1 rounded-full text-xs">Active</span></td>
                                <td className="px-4 py-3 text-sm text-blue-600 cursor-pointer">Edit</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="px-4 py-3 text-sm">Sarah Johnson</td>
                                <td className="px-4 py-3 text-sm">Global Enterprises</td>
                                <td className="px-4 py-3 text-sm">Marketing Manager</td>
                                <td className="px-4 py-3"><span className="bg-black text-white px-2 py-1 rounded-full text-xs">Active</span></td>
                                <td className="px-4 py-3 text-sm text-blue-600 cursor-pointer">Edit</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="px-4 py-3 text-sm">Mike Davis</td>
                                <td className="px-4 py-3 text-sm">Digital Dynamics</td>
                                <td className="px-4 py-3 text-sm">Operations Director</td>
                                <td className="px-4 py-3"><span className="bg-black text-white px-2 py-1 rounded-full text-xs">Inactive</span></td>
                                <td className="px-4 py-3 text-sm text-blue-600 cursor-pointer">Edit</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="px-4 py-3 text-sm">Mike Davis</td>
                                <td className="px-4 py-3 text-sm">Digital Dynamics</td>
                                <td className="px-4 py-3 text-sm">Operations Director</td>
                                <td className="px-4 py-3"><span className="bg-black text-white px-2 py-1 rounded-full text-xs">Inactive</span></td>
                                <td className="px-4 py-3 text-sm text-blue-600 cursor-pointer">Edit</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="px-4 py-3 text-sm">Mike Davis</td>
                                <td className="px-4 py-3 text-sm">Digital Dynamics</td>
                                <td className="px-4 py-3 text-sm">Operations Director</td>
                                <td className="px-4 py-3"><span className="bg-black text-white px-2 py-1 rounded-full text-xs">Inactive</span></td>
                                <td className="px-4 py-3 text-sm text-blue-600 cursor-pointer">Edit</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="px-4 py-3 text-sm">Mike Davis</td>
                                <td className="px-4 py-3 text-sm">Digital Dynamics</td>
                                <td className="px-4 py-3 text-sm">Operations Director</td>
                                <td className="px-4 py-3"><span className="bg-black text-white px-2 py-1 rounded-full text-xs">Inactive</span></td>
                                <td className="px-4 py-3 text-sm text-blue-600 cursor-pointer">Edit</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Host