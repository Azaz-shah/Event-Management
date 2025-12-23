import React, { useState } from "react"
import { FaSearch } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { BsToggle2On } from "react-icons/bs";
import { BsToggle2Off } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
const CostCenter = () => {
    const [active, setActive] = useState("active")
    const [state, setState] = useState("Inactive")

    const toggleState = () => {
        setActive(active === "active" ? "inactive" : "active")
    }
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
                        <input type="text" placeholder="Search host details...." className="h-8 w-250 text-sm bg-gray-200 text-black rounded-lg pl-10 pr-2 text-sm" />

                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-300 h-120 w-280 p-6 py-10 rounded-lg ml-20 mt-6">
                <h4 className="font-bold">All Cost Centers (5)</h4>
                <p className="text-sm">Manage your cost centers and budgets</p>

                <div className="bg-white border border-gray-300 flex flex-row justify-between w-270 mt-6 h-24  rounded-lg">
                    <div className="flex items-center gap-2 ml-4">
                        <div className="font-bold flex items-center mt-4 justify-center text-2xl p-4 h-15 w-15  text-white rounded-full">
                            <FaDollarSign className="text-green-700 text-4xl" />
                        </div>
                        <div className="">
                            <div className="flex flex-row gap-2 mt-3 items-center justify-center">
                                <h4 className="font-bold text-lg">Cost Center Name</h4>
                                <button className="bg-gray-300 text-sm  h-5 rounded-lg w-20">MKT001</button>
                                <button className="bg-black h-5 text-sm text-white rounded-lg w-20">Active</button>
                            </div>
                            <p className="text-sm">Cost Center Description</p>
                            <p className="text-sm text-gray-500">Budget: $300,000</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 mr-5">
                        <div className="flex flex-row items-center justify-center gap-2 mr-4 mt-4">
                            <p className="text-sm mb-1 font-bold">{state === "Inactive" ? "Active" : "Inactive"}</p>
                            <div onClick={toggleState} className="cursor-pointer ">
                                {active === "active" ? <BsToggle2On className="text-black text-3xl" /> : <BsToggle2Off className="text-gray-400 text-3xl" />}
                            </div>
                        </div>
                        <div className="">
                            <button className="bg-gray-200  flex items-center justify-center text-white h-8 w-13 mt-10 text-sm rounded-lg">
                                <FaRegEdit className="text-xl text-black" />
                            </button>
                        </div>
                        <div className="">
                            <button className="bg-gray-200 flex items-center justify-center text-white h-8 w-13 mt-10 text-sm rounded-lg">
                                <FaTrashCan className="text-xl text-black" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 flex flex-row justify-between w-270 mt-6 h-24  rounded-lg">
                    <div className="flex items-center gap-2 ml-4">
                        <div className="font-bold flex items-center mt-4 justify-center text-2xl p-4 h-15 w-15  text-white rounded-full">
                            <FaDollarSign className="text-green-700 text-4xl" />
                        </div>
                        <div className="">
                            <div className="flex flex-row gap-2 mt-3 items-center justify-center">
                                <h4 className="font-bold text-lg">Cost Center Name</h4>
                                <button className="bg-gray-300 text-sm  h-5 rounded-lg w-20">MKT001</button>
                                <button className="bg-black h-5 text-sm text-white rounded-lg w-20">Active</button>
                            </div>
                            <p className="text-sm">Cost Center Description</p>
                            <p className="text-sm text-gray-500">Budget: $300,000</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 mr-5">
                        <div className="flex flex-row items-center justify-center gap-2 mr-4 mt-4">
                            <p className="text-sm mb-1 font-bold">{state === "Inactive" ? "Active" : "Inactive"}</p>
                            <div onClick={toggleState} className="cursor-pointer ">
                                {active === "active" ? <BsToggle2On className="text-black text-3xl" /> : <BsToggle2Off className="text-gray-400 text-3xl" />}
                            </div>
                        </div>
                        <div className="">
                            <button className="bg-gray-200  flex items-center justify-center text-white h-8 w-13 mt-10 text-sm rounded-lg">
                                <FaRegEdit className="text-xl text-black" />
                            </button>
                        </div>
                        <div className="">
                            <button className="bg-gray-200 flex items-center justify-center text-white h-8 w-13 mt-10 text-sm rounded-lg">
                                <FaTrashCan className="text-xl text-black" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 flex flex-row justify-between w-270 mt-6 h-24  rounded-lg">
                    <div className="flex items-center gap-2 ml-4">
                        <div className="font-bold flex items-center mt-4 justify-center text-2xl p-4 h-15 w-15  text-white rounded-full">
                            <FaDollarSign className="text-green-700 text-4xl" />
                        </div>
                        <div className="">
                            <div className="flex flex-row gap-2 mt-3 items-center justify-center">
                                <h4 className="font-bold text-lg">Cost Center Name</h4>
                                <button className="bg-gray-300 text-sm  h-5 rounded-lg w-20">MKT001</button>
                                <button className="bg-black h-5 text-sm text-white rounded-lg w-20">Active</button>
                            </div>
                            <p className="text-sm">Cost Center Description</p>
                            <p className="text-sm text-gray-500">Budget: $300,000</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 mr-5">
                        <div className="flex flex-row items-center justify-center gap-2 mr-4 mt-4">
                            <p className="text-sm mb-1 font-bold">{state === "Inactive" ? "Active" : "Inactive"}</p>
                            <div onClick={toggleState} className="cursor-pointer ">
                                {active === "active" ? <BsToggle2On className="text-black text-3xl" /> : <BsToggle2Off className="text-gray-400 text-3xl" />}
                            </div>
                        </div>
                        <div className="">
                            <button className="bg-gray-200  flex items-center justify-center text-white h-8 w-13 mt-10 text-sm rounded-lg">
                                <FaRegEdit className="text-xl text-black" />
                            </button>
                        </div>
                        <div className="">
                            <button className="bg-gray-200 flex items-center justify-center text-white h-8 w-13 mt-10 text-sm rounded-lg">
                                <FaTrashCan className="text-xl text-black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CostCenter