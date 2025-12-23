import React from "react";

const Form = () => {
    return (
        <div className="bg-gray-300 rounded-lg h-150 w-110  ml-90 p-5 mt-6">
            <div className="flex flex-row  gap-60">
                <div className="">
                    <h4 className="font-bold">Create New Event</h4>
                </div>
                <div>
                    <p className="font-bold cursor-pointer">X</p>
                </div>
            </div>
            <p className="text-sm  mt-2">Fill in the details for your new event. All fields except description are required.</p>

            <div className="mt-2">
                <h4 className="text-sm font-bold"> Event Title</h4>
                <input className="bg-gray-400 h-10 p-3 text-sm mt-1 rounded w-full" type="text" placeholder="Enter the type Here..." />
            </div>
            <div className="mt-2">
                <h4 className="text-sm font-bold"> Description</h4>
                <input className="bg-gray-400 h-15  p-3 text-sm mt-1 rounded w-full" type="text" placeholder="Enter the type Here..." />
            </div>
            <div className="mt-2">
                <h4 className="text-sm font-bold"> Event Date</h4>
                <input className="bg-gray-400 h-10 mt-1 p-3 rounded w-full" type="date" placeholder="Enter the type Here..." />
            </div>

            <div className="flex flex-row gap-2 mt-1">
                <div className="rounded-lg">
                    <h4 className="text-sm font-bold">Start Time</h4>
                    <input type="time" className="bg-gray-400 rounded-lg p-3  h-10 w-49 " />
                </div>
                <div>
                    <h4 className="text-sm font-bold">End Time</h4>
                    <input type="time" className="bg-gray-400 rounded-lg p-3 h-10 w-49 " />
                </div>
            </div>
            <div className="mt-2">
                <h4 className="text-sm font-bold"> Location</h4>
                <input className="bg-gray-400 h-10 p-3 text-sm mt-1 rounded w-full" type="text" placeholder="Enter the type Here..." />
            </div>

            <div className="flex flex-row gap-2 mt-1">
                <div className="rounded-lg">
                    <h4 className="text-sm font-bold">Max Guest</h4>
                    <input type="number" className="bg-gray-400 rounded-lg p-3  h-10 w-49 " />
                </div>
                <div>
                    <h4 className="text-sm font-bold">min Guest</h4>
                    <input type="number" className="bg-gray-400 rounded-lg p-3 h-10 w-49 " />
                </div>
            </div>

            <div className="flex flex-row gap-2 justify-end mt-6">
                <button className="cursor-pointer bg-gray-200  h-10 w-20 rounded-lg text-black text-sm font-bold">cancel</button>
                <button className="cursor-pointer bg-black h-10 w-30 rounded-lg font-bold text-sm text-white">Create Event</button>
            </div>


        </div>

    )
}

export default Form