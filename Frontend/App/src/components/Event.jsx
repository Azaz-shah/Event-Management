import { use, useState } from 'react';
import React from "react"
import { MdGroupWork } from "react-icons/md";
import { MdOutlineEvent } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import EventApproval from './EventApproval';
import { useNavigate } from "react-router-dom";
import Form from "../components/Form"
const Event = () => {
    const [activeTab, setActiveTab] = useState('All Upcoming Events');
    const navigate = useNavigate();

    const eventApproval = () => {
        console.log("eventApproval")
        navigate("/eventapproval")
    }

    const eventfunction = () => {
        console.log("eventfunction")
        // < Form />
    }
    
    return (
        <div className="p-20 h-min-screen">
            <div>
                <h1 className="font-bold text-2xl">Event Managment</h1>
                <h4>Manage your events and browse upcoming events for guest management.</h4>
            </div>
            <div className="bg-white w-full flex flex-row gap-10 items-center justify-evenly  h-10 mt-5 rounded-lg">
                <div onClick={() => setActiveTab('All Upcoming Events')} className={`flex flex-row gap-2 items-center px-3 py-2 cursor-pointer rounded ${activeTab === 'All Upcoming Events' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}>
                    <MdGroupWork size={16} />
                    <span className="text-sm font-medium">All Upcoming Events</span>
                </div>
                <div onClick={() => setActiveTab('My Events')} className={`flex flex-row gap-2 items-center px-3 py-2 cursor-pointer rounded ${activeTab === 'My Events' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}>
                    <MdOutlineEvent size={16} />
                    <span className="text-sm font-medium">My Events</span>
                </div>
                <div onClick={() => setActiveTab('Pending')} className={`flex flex-row gap-2 items-center px-3 py-2 cursor-pointer rounded ${activeTab === 'Pending' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}>
                    <MdOutlinePending size={16} />
                    <span className="text-sm font-medium">Pending</span>
                </div>
                <div onClick={() => setActiveTab('Reject')} className={`flex flex-row gap-2 items-center px-3 py-2 cursor-pointer rounded ${activeTab === 'Reject' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}>
                    <MdOutlineCancel size={16} />
                    <span className="text-sm font-medium">Reject</span>
                </div>
                <div onClick={() => setActiveTab('Past Events')} className={`flex flex-row gap-2 items-center px-3 py-2 cursor-pointer rounded ${activeTab === 'Past Events' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}>
                    <VscPreview size={16} />
                    <span className="text-sm font-medium">Past Events</span>
                </div>
            </div>
            {/* Content based on selected tab */}
            <div className="mt-8">
                {activeTab === 'All Upcoming Events' && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="text-lg font-semibold mb-4">All Upcoming Events</h3>
                        <p className="text-gray-600">Display all upcoming events here...</p>
                    </div>
                )}
                {activeTab === 'My Events' && (
                    <div className="bg-white flex flex-row justify-between items-center p-2 rounded-lg shadow-sm border">
                        <div className='p-1 '>
                            <h2 className="text-lg font-semibold mb-1">My Approved Upcoming Events (0)</h2>
                            <p className='mb-3'>Your approved events that haven't occurred yet. You can manage guests and make changes.</p>
                        </div>
                        <div onClick={eventfunction} className='bg-black cursor-pointer flex flex-row items-center justify-center gap-2 rounded-lg text-white h-10 w-35'>
                            <FaPlus />
                            <h4>Create Event</h4>
                        </div>
                    </div>
                )}
                {activeTab === 'Pending' && (
                    <div className="bg-white flex flex-row justify-between items-center p-2 rounded-lg shadow-sm border">
                        <div className='p-1 '>
                            <h2 className="text-lg font-semibold mb-1">Pending Events (0)</h2>
                            <p className='mb-3'>Events waiting for approval. You can edit these while they're under review..</p>
                        </div>
                        <div className='bg-black cursor-pointer flex flex-row items-center justify-center gap-2 rounded-lg text-white h-10 w-35'>
                            <FaPlus />
                            <h4>Create Event</h4>
                        </div>
                    </div>
                )}
                {activeTab === 'Reject' && (
                    <div className="bg-white flex flex-row justify-between items-center p-2 rounded-lg shadow-sm border">
                        <div className='p-1 '>
                            <h2 className="text-lg font-semibold mb-1">Rejected Events (0)</h2>
                            <p className='mb-3'>Events that were not approved. Review feedback and resubmit after making changes..</p>
                        </div>
                        <div className='bg-black cursor-pointer flex flex-row items-center justify-center gap-2 rounded-lg text-white h-10 w-35'>
                            <FaPlus />
                            <h4>Create Event</h4>
                        </div>
                    </div>
                )}
                {activeTab === 'Past Events' && (
                    <div className="bg-white p-6 rounded-lg h-85 shadow-sm border">
                        <h3 className="text-lg font-semibold mb-1">Past Events</h3>
                        <p className="text-gray-600 text-sm">All completed events in the system for reference.</p>
                        <div className='bg-white border border-gray-400 p-3 h-55 mt-4 rounded-lg '>
                            <div className='flex flex-row p-3 gap-3 items-center '>
                                <h2 className=' text-sm font-bold'>Emerging Technologies Symposium</h2>
                                <div className='h-7 bg-gray-400 rounded w-24 flex items-center justify-center' >
                                    <h4 className='text-sm font-bold'>past event</h4>
                                </div>
                            </div>
                            <h3 className='ml-3 mb-1'>Symposium on emerging technologies and their impact on business.</h3>
                            <div className='flex flex-row items-center  justify-evenly gap-10 mr-20'>
                                <div className='mt-3 ml-3'>
                                    <h2 className='font-bold text-sm text-gray-600'>Date & Time</h2>
                                    <h4 className='text-sm'> Wednesday, September 10, 2025</h4>
                                    <h4 className=' text-sm'>10:00 AM - 12:00 PM</h4>
                                </div>
                                <div className='mt-3 ml-3'>
                                    <h2 className='font-bold text-sm text-gray-600'>Location</h2>
                                    <h4 className='text-sm'> Mountain Resort Conference  <br />Center</h4>
                                    {/* <h4 className=' text-sm'>10:00 AM - 12:00 PM</h4> */}
                                </div>
                                <div className='mt-3 ml-3'>
                                    <h2 className='font-bold text-sm text-gray-600'>Guests</h2>
                                    <h4 className='text-sm'> 0/35 confirmed</h4>
                                </div>
                                <div className='mt-3 ml-3'>
                                    <h2 className='font-bold text-sm text-gray-600'>Budget</h2>
                                    <h4 className='text-sm'> $0</h4>
                                    {/* <h4 className=' text-sm'>10:00 AM - 12:00 PM</h4> */}
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <div className='mt-6'>
                                    <h4 className='text-gray-500 text-sm'>Created by: System Admin</h4>
                                </div>
                                <div onClick={eventApproval} className='h-7 w-35 bg-gray-400 rounded flex items-center justify-center mt-5 cursor-pointer'>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <FaRegEye className='text-black text-xl' size={18} />
                                        <h4 className='font-bold '>view details</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Event