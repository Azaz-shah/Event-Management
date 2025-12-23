import React from "react";
import { IoAdd } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
const Contact = () => {
    return (
        <div className="">
            <div className="p-10 flex flex-row items-center justify-between">
                <h4 className="font-bold text-md">Manage your contact database</h4>
                <button className="h-10 w-35 flex rounded-lg text-sm font-semibold flex-row items-center justify-center gap-2 text-white bg-black">
                    <IoAdd className="text-xl" />
                    Add contacts</button>
            </div>

            <div className="bg-white rounded-lg h-55 border border-gray-300 w-300 p-4 ml-10">
                <div className="flex flex-col  justify-between">
                    <h4 className="font-bold text-lg">Search and Filter Contacts</h4>
                    <div className="flex flex-col mt-2 p-3">
                        <h2>Filter By</h2>
                        <select className="h-8 w-280 bg-gray-200 text-black mt-2 rounded-lg px-2 text-sm">
                            <option>
                                <input className="text-black" type="text" placeholder="Search by name" />
                            </option>
                            <option>Search by email</option>
                            <option>Search by company</option>
                        </select>

                    </div>
                    <div className="relative mt-2 p-2 mb-3 ">
                        <FaSearch className="absolute left-3 mt-3 ml-3 items-center top-2 text-gray-500" size={14} />
                        <input type="text" placeholder="Search by email name title or company" className="h-8 w-280 text-sm bg-gray-200 text-black rounded-lg pl-10 pr-2 text-sm" />
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-white border border-gray-300 flex flex-col gap-4 rounded-lg h-24 w-300 m-6 ml-10">
                    <div className="flex flex-row items-center justify-between">
                        <div className="p-4 ml-4 flex flex-row items-center gap-2">
                            <div className="bg-gray-300 flex items-center justify-center rounded-full h-15 w-15">
                                <h1 className="font-bold text-2xl">SD</h1>
                            </div>
                            <div>
                                <h4 className="font-bold">Jane Doe</h4>
                                <p className="text-sm">CEO at TechCorp Software Solutions <br />

                                    john.smith@techcorp.com</p>
                            </div>

                        </div>
                        <div className="flex flex-row items-center mr-4 justify-center gap-4">
                            <button className="bg-gray-300 h-7 text-sm items-center justify-center flex rounded-lg w-53 font-bold">TechCorp Software Solutions</button>
                            <FaPenToSquare className="text-gray-500 text-xl cursor-pointer" />
                            <MdDeleteOutline className="text-black text-2xl cursor-pointer" />
                        </div>

                    </div>


                </div>
                <div className="bg-white border border-gray-300 flex flex-col gap-4 rounded-lg h-24 w-300 m-6 ml-10">
                    <div className="flex flex-row items-center justify-between">
                        <div className="p-4 ml-4 flex flex-row items-center gap-2">
                            <div className="bg-gray-300 flex items-center justify-center rounded-full h-15 w-15">
                                <h1 className="font-bold text-2xl">SD</h1>
                            </div>
                            <div>
                                <h4 className="font-bold">Jane Doe</h4>
                                <p className="text-sm">CEO at TechCorp Software Solutions <br />

                                    john.smith@techcorp.com</p>
                            </div>

                        </div>
                        <div className="flex flex-row items-center mr-4 justify-center gap-4">
                            <button className="bg-gray-300 h-7 text-sm items-center justify-center flex rounded-lg w-53 font-bold">TechCorp Software Solutions</button>
                            <FaPenToSquare className="text-gray-500 text-xl cursor-pointer" />
                            <MdDeleteOutline className="text-black text-2xl cursor-pointer" />
                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};
export default Contact;