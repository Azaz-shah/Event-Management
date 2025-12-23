import React, { useState } from "react"
import { CgDanger } from "react-icons/cg";
import { CiTimer } from "react-icons/ci";
import { FcApproval } from "react-icons/fc";
import { CiCircleRemove } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiViewTimeline } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { LuDollarSign } from "react-icons/lu";
import { RiTornadoLine } from "react-icons/ri";
import { FaBullseye } from "react-icons/fa";
import { CiSquareQuestion } from "react-icons/ci";
import { MdCancelPresentation } from "react-icons/md";
import { MdAnnouncement } from "react-icons/md";
import { MdChangeHistory } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";

const Approvals = () => {
    const [state, setState] = useState('Pending');

    const pendingFunction = () => {
        setState('Pending')
    }
    const changeRequest = () => {
        setState('Changes Request')
    }
    const approvedFunction = () => {
        setState('Approved')
    }
    const rejectFunction = () => {
        setState('Rejected')
    }
    return (
        <div className="bg-gray-200  h-full w-full">
            <div className="p-20 flex flex-row items-center justify-between">
                <div className="">
                    <h2 className="font-bold text-lg">Event Approval Center</h2>
                    <p>Review and approve event requests</p>
                </div>
                <div className="bg-white border flex items-center p-3 justify-between bg-white border border-gray-300 rounded-lg h-25 w-90">
                    <div>
                        <h2 className="ml-5 text-2xl font-bold text-amber-400">2</h2>
                        <p className="text-sm">Pending</p>
                    </div>
                    <div>
                        <h2 className="ml-10 text-2xl font-bold text-red-400">1</h2>
                        <p className="text-sm">Changes Requested</p>
                    </div>
                    <div>
                        <h2 className="ml-7 text-2xl font-bold text-green-400">2</h2>
                        <p className="text-sm">Approved Today</p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-300 flex flex-row items-center justify-evenly p-4 rounded-lg h-12 w-286 ml-14">
                <div onClick={pendingFunction} className={`flex flex-row gap-2 items-center cursor-pointer justify-center ${state === 'Pending' ? 'bg-black text-white rounded-lg p-2' : ''} `}>
                    <CiTimer className="text-xl" />
                    <h2 className="font-semibold text-md">Pending(0)</h2>
                </div>
                <div onClick={changeRequest} className={`flex flex-row gap-2 items-center cursor-pointer justify-center ${state === 'Changes Request' ? 'bg-black text-white rounded-lg p-2' : ''} `}>
                    <CgDanger className="text-xl" />
                    <h2 className="font-semibold text-md">Changes Request(2)</h2>
                </div>
                <div onClick={approvedFunction} className={`flex flex-row gap-2 items-center cursor-pointer justify-center ${state === 'Approved' ? 'bg-black text-white rounded-lg p-2' : ''} `}>
                    <FcApproval className="text-xl" />
                    <h2 className="font-semibold text-md">Approved(0)</h2>
                </div>
                <div onClick={rejectFunction} className={`flex flex-row gap-2 items-center cursor-pointer justify-center ${state === 'Rejected' ? 'bg-black text-white rounded-lg p-2' : ''} `}>
                    <CiCircleRemove className="text-xl " />
                    <h2 className="font-semibold text-md">Rejected(0)</h2>
                </div>
            </div>
            {state === 'Pending' &&
                <div className="h-60 w-290 bg-white border border-gray-300 rounded-lg p-3 mt-4  ml-12">
                    <div className="flex flex-col ml-4 ">
                        <div className="flex flex-row mr-160  items-center gap-2 justify-center">
                            <h2>Summer 2025 Leadership Retreat</h2>
                            <IoTimeOutline className="text-md" />
                            <button className="bg-black text-white rounded-3xl text-sm h-7 w-20">pending</button>
                            <button className="bg-red-400 text-white rounded-3xl text-sm h-7 w-30">HIGH PRIORTY</button>
                        </div>
                        <p className="text-sm mt-3">Executive leadership retreat for strategic planning and team building.</p>

                        <div className="flex flex-row items-center justify-between mt-7">
                            <div className="flex flex-row items-center gap-2">
                                <BsCalendarDateFill className="text-2xl" />
                                <div className="text-sm">
                                    <h4 className="font-bold text-sm">Date & Time</h4>
                                    <p>Friday, July 18, 2025 <br />
                                        10:00 AM</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <FaLocationDot className="text-2xl" />
                                <div className="text-sm">
                                    <h4 className="font-bold text-sm">Location</h4>
                                    <p>Mountain Resort Conference Center</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <IoMdPerson className="text-2xl" />
                                <div className="text-sm">
                                    <h4 className="font-bold text-sm">Expected Guests</h4>
                                    <p>35 maximum <br />
                                        0 shortlisted</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <LuDollarSign className="text-2xl" />
                                <div className="text-sm">
                                    <h4 className="font-bold text-sm">Est. Budget</h4>
                                    <p>$65,000.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2 justify-between items-center mt-10">
                            <div className="flex flex-row items-center justify-center gap-2">
                                <RiTornadoLine className="text-xl" />
                                <h4>Created by: Unknown User • Submitted: 12/15/2024</h4>
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="flex cursor-pointer flex-row h-8 w-32 rounded-lg bg-black text-white items-center justify-center gap-2">
                                    <FaBullseye className="text-xl" />
                                    <h4>View details</h4>
                                </div>
                                <div className="flex cursor-pointer flex-row h-8 w-37 rounded-lg bg-black text-white items-center justify-center gap-2">
                                    <CiSquareQuestion className="text-xl" />
                                    <h4>Request change</h4>
                                </div>
                                <div className="flex cursor-pointer flex-row h-8 w-32 rounded-lg bg-black text-white items-center justify-center gap-2">
                                    <MdCancelPresentation className="text-xl" />
                                    <h4>reject</h4>
                                </div>
                                <div className="flex cursor-pointer flex-row h-8 w-32 rounded-lg text-sm font-bold bg-black text-white items-center justify-center gap-2">
                                    <FcApproval className="text-xl" />
                                    <h4>approve</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                state === "Changes Request" &&
                <div className="h-90 w-290 bg-white border border-gray-300 rounded-lg p-3 mt-4  ml-12">
                    <div className="flex flex-col ml-4 ">
                        <div className="flex flex-row mr-160  items-center gap-2 justify-center">
                            <h2>Year-End Celebration 2024</h2>
                            <IoTimeOutline className="text-md" />
                            <button className="bg-black text-white rounded-3xl text-sm h-7 w-30">change Request</button>
                            <button className="bg-red-400 text-white rounded-3xl text-sm h-7 w-30">HIGH PRIORTY</button>
                        </div>
                        <p className="text-sm mt-3">Company-wide year-end celebration with awards and entertainment..</p>

                        <div className="flex flex-row items-center justify-between mt-7">
                            <div className="flex flex-row items-center gap-2">
                                <CiViewTimeline className="text-2xl" />
                                <div className="text-sm">
                                    <h4 className="font-bold text-sm">Date & Time</h4>
                                    <p>Friday, July 18, 2025 <br />
                                        10:00 AM</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <FaLocationDot className="text-2xl" />
                                <div className="text-sm">
                                    <h4 className="font-bold text-sm">Location</h4>
                                    <p>Mountain Resort Conference Center</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <IoMdPerson className="text-2xl" />
                                <div className="text-sm">
                                    <h4 className="font-bold text-sm">Expected Guests</h4>
                                    <p>35 maximum <br />
                                        0 shortlisted</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <LuDollarSign className="text-2xl" />
                                <div className="text-sm">
                                    <h4 className="font-bold text-sm">Est. Budget</h4>
                                    <p>$65,000.00</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold flex flex-row mt-3 items-center gap-2">
                                <MdChangeHistory className="text-2xl" />
                                <h4>Approval History</h4>
                            </div>
                            <div className="bg-gray-200 h-20 rounded-lg w-279 mt-4 p-2">
                                <div className="flex flex-row items-center justify-between">
                                    <h4 className="font-bold text-sm">Michael Chen</h4>
                                    <p className="font-bold text-sm">11/25/2024</p>
                                </div>
                                <div className="flex flex-row items-center gap-1  ">
                                    <MdAnnouncement />
                                    <p className="text-sm">request changes</p>
                                </div>
                                <p className="text-sm">"Budget too high"</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2 justify-between items-center mt-10">
                            <div className="flex flex-row items-center justify-center gap-2">
                                <RiTornadoLine className="text-xl" />
                                <h4>Created by: Unknown User • Submitted: 12/15/2024</h4>
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="flex cursor-pointer flex-row h-8 w-32 rounded-lg bg-black text-white items-center justify-center gap-2">
                                    <FaBullseye className="text-xl" />
                                    <h4>View details</h4>
                                </div>
                                <div className="flex cursor-pointer flex-row h-8 w-37 rounded-lg bg-black text-white items-center justify-center gap-2">
                                    <CiSquareQuestion className="text-xl" />
                                    <h4>Request change</h4>
                                </div>
                                <div className="flex cursor-pointer flex-row h-8 w-32 rounded-lg bg-black text-white items-center justify-center gap-2">
                                    <MdCancelPresentation className="text-xl" />
                                    <h4>reject</h4>
                                </div>
                                <div className="flex cursor-pointer flex-row h-8 w-32 rounded-lg text-sm font-bold bg-black text-white items-center justify-center gap-2">
                                    <FcApproval className="text-xl" />
                                    <h4>approve</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Approvals