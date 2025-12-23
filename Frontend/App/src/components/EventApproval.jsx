import React, { useState } from "react";
import { IoIosApps } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEditLocationAlt } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaMeteor } from "react-icons/fa6";
import Overview from "./Overview";
import Shortlist from "./ShortList"
import Confirmed from "./Confirmed"
import ABList from "./ABList"
const EventApproval = () => {
    const [state, setState] = useState('Overview');

    const stateFunction = () => {
        setState('Overview')
    }
    const statelist = () => {
        setState('Shortlist')
    }

    const stateConfirmed = () => {
        setState('Confirmed')
    }

    const stateAB = () => {
        setState('A/B lists')
    }

    return (
        <div className="h-min-screen">
            <div className="flex flex-row items-center justify-between ">
                <div className="bg-white border bg-white border border-gray-300 h-10 m-20 flex items-center justify-center w-35">
                    <button className="font-bold text-sm flex flex-row items-center justify-center gap-2 cursor-pointer">
                        <FaArrowLeft />
                        Back to event</button>
                </div>
                <div className="flex flex-row justify-center items-center gap-6 mr-10 " >
                    <button className=" font-bold text-sm cursor-pointer bg-white border border-gray-300 h-10  flex items-center justify-center gap-2 w-40">
                        <FaArrowDown />
                        Export guest list
                    </button>
                    <button className=" font-bold text-sm cursor-pointer bg-white border border-gray-300 h-10  flex items-center justify-center gap-2 w-45">
                        <GiNetworkBars />
                        Attendance Register
                    </button>
                    <button className=" font-bold text-sm cursor-pointer bg-white border border-gray-300 h-10  flex items-center justify-center gap-2 w-35">
                        <FaMeteor />
                        Add Guest
                    </button>
                </div>
            </div>
            <div className="bg-white h-40 w-290 rounded-lg ml-20">
                <div>
                    <div className="flex flex-row gap-3 p-4 ">
                        <h4 className="text-sm">Emerging Technologies Symposium</h4>
                        <button className="text-sm bg-gray-200 font-bold rounded-lg h-7 w-20">Pending</button>
                    </div>
                    <h4 className="text-sm ml-4 ">Symposium on emerging technologies and their impact on business.</h4>

                </div>
                <div className="flex flex-row items-center justify-evenly mr-80 gap-10 ">
                    <div className="ml-2 mt-6 flex flex-row items-center justify-center gap-4 ">
                        <div className="">
                            <IoIosApps className="font-bold text-2xl " />
                        </div>
                        <div>
                            <h4>Wednesday, September 10, 2025</h4>
                            <p>at</p>
                        </div>
                    </div>
                    <div className="ml-2 mt-6 flex flex-row items-center justify-center gap-4 ">
                        <div>
                            <FaLocationDot className="font-bold text-2xl " />
                        </div>
                        <div>
                            <h4 >Technology Campus Auditorium</h4>
                            <p>Event venue</p>
                        </div>
                    </div>
                    <div className="ml-2 mt-6  flex flex-row items-center justify-center gap-2">
                        <div>
                            <MdEditLocationAlt className="font-bold text-2xl " />
                        </div>
                        <div>
                            <h4 className="font-bold">0 / 100</h4>
                            <p>Confirmed guests</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white h-10 flex p-3 font-bold text-sm flex-row items-center justify-evenly rounded-lg w-291 m-7 ml-20">
                <div onClick={stateFunction} className={`cursor-pointer ${state === 'Overview' ? 'bg-black h-10 w-50 flex items-center justify-center rounded-lg text-white' : 'bg-white '}`}>
                    <h4 >Overview</h4>
                </div>
                <div onClick={statelist} className={`cursor-pointer ${state === 'Shortlist' ? 'bg-black h-10 w-50 flex items-center justify-center rounded-lg text-white' : 'bg-white'}`}>
                    <h4>Shortlist(0)</h4>
                </div>
                <div onClick={stateConfirmed} className={`cursor-pointer ${state === 'Confirmed' ? 'bg-black h-10 w-50 flex items-center justify-center rounded-lg text-white' : 'bg-white '}`}>
                    <h4>Confirmed(0)</h4>
                </div>
                <div onClick={stateAB} className={`cursor-pointer ${state === 'A/B lists' ? 'bg-black h-10 w-50 flex items-center justify-center rounded-lg text-white' : 'bg-white'}`}>
                    <h4>A/B lists</h4>
                </div>
            </div>
            {
                state === 'Overview' && <Overview />

            }
            {
                state === 'Shortlist' && <Shortlist />
            }
            {
                state === 'Confirmed' && <Confirmed />
            }
            {
                state === 'A/B lists' && <ABList />
            }
        </div>
    )
}
export default EventApproval;