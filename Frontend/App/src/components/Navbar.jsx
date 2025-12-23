import React, { useState } from "react"
import { AiTwotoneDashboard } from "react-icons/ai";
import { MdEventNote } from "react-icons/md";
import { MdEventSeat } from "react-icons/md";
import { RxComponent2 } from "react-icons/rx";
import { RiContactsLine } from "react-icons/ri";
import { GiTargetDummy } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Event from "./Event"
const Navbar = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');

    const movetoEvent = () => {
        setActiveTab('events');
        navigate("/event")
    }
    const movetoHome = () => {
        setActiveTab('dashboard');
        navigate("/")
    }
    const movetoApprovals = () => {
        setActiveTab('approvals');
        navigate("/approvals")
    }
    const movetoContact = () => {
        setActiveTab('contacts');
        navigate("/contact")
    }
    const movetoCompanies = () => {
        setActiveTab('companies');
        navigate("/companies")
    }
    const movetoHost = () => {
        setActiveTab('host');
        navigate("/host")
    }
    const moveToCost = () => {
        setActiveTab('cost');
        navigate("/cost")
    }
    const movetoMarketing = () => {
        setActiveTab('marketing');
        navigate("/marketing")
    }
    return (
        <div className="bg-gray-100 shadow-sm border-b border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-6">
                <nav className="flex items-center justify-center space-x-1">
                    <div onClick={movetoHome} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        activeTab === 'dashboard' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}>
                        <AiTwotoneDashboard className="mr-2" size={16} />
                        Dashboard
                    </div>
                    <div onClick={movetoEvent} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        activeTab === 'events' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}>
                        <MdEventNote className="mr-2" size={16} />
                        Events
                    </div>
                    <div onClick={movetoApprovals} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        activeTab === 'approvals' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}>
                        <MdEventSeat className="mr-2" size={16} />
                        Approvals
                    </div>
                    <div onClick={movetoContact} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        activeTab === 'contacts' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}>
                        <RiContactsLine className="mr-2" size={16} />
                        Contacts
                    </div>
                    <div onClick={movetoCompanies} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        activeTab === 'companies' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}>
                        <RxComponent2 className="mr-2" size={16} />
                        Companies
                    </div>
                    <div onClick={movetoHost} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        activeTab === 'host' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}>
                        <GiTargetDummy className="mr-2" size={16} />
                        Host Details
                    </div>
                    <div onClick={moveToCost} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        activeTab === 'cost' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}>
                        <MdOutlineAttachMoney className="mr-2" size={16} />
                        Cost Center
                    </div>
                    <div onClick={movetoMarketing} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        activeTab === 'marketing' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}>
                        <MdMarkEmailUnread className="mr-2" size={16} />
                        Marketing
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar