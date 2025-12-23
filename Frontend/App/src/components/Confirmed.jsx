import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
const Confirmed = () => {
    return (
        <div>
            <div className="bg-white border border-gray-300 h-100 w-290 ml-20 rounded">

                <div className="p-6">
                    <h4 className="font-bold text-md">Confirmed Guests (0)</h4>
                    <p>Guests under consideration for invitation</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-2 mt-15">
                    <IoPersonAddOutline className="text-5xl" />
                    <h4 className="font-bold text-md">No confirmed guests yet</h4>
                    <p className="text-lg">Start by adding contacts to your shortlist</p>
                    <button className="bg-black cursor-pointer text-white h-10 flex flex-row items-center justify-center gap-2 rounded-lg w-40">
                        <FaRegEye />
                        Add contacts</button>
                </div>
            </div>
        </div>
    )
}

export default Confirmed