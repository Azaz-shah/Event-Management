import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
const ABList = () => {
    return (
        <div className="flex gap-5 flex-col">
            <div className="bg-white rounded-lg h-60 w-290 ml-20">
                <div className="flex flex-row gap-2 items-center p-5 ">
                    <FaRegStar />
                    <h4 className="font-bold text-sm">A List - High Priority (0)</h4>
                </div>
                <h4 className="ml-5 mb-2">VIP attendees with priority invitations</h4>

                <div className="flex flex-col items-center justify-center p-6 gap-2">
                    <FaRegStar className="text-4xl" />
                    <h4 className="font-semibold text-md">No A List guests yet</h4>
                    <p>Add high priority guests to the A List</p>
                </div>
            </div>
            <div className="bg-white rounded-lg h-60 w-290 ml-20">
                <div className="flex flex-row gap-2 items-center p-5 ">
                    <IoPerson />
                    <h4 className="font-bold text-sm">A List - High Priority (0)</h4>
                </div>
                <h4 className="ml-5 mb-2">VIP attendees with priority invitations</h4>

                <div className="flex flex-col items-center justify-center p-6 gap-2">
                    <IoPerson className="text-4xl" />
                    <h4 className="font-semibold text-md">No A List guests yet</h4>
                    <p>Add high priority guests to the A List</p>
                </div>
            </div>
        </div>
    )
}

export default ABList