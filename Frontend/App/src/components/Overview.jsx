import React from "react"
import { CiStar } from "react-icons/ci";

const Overview = () => {
    return (
        <div >
            <div className="flex flex-row gap-5">
                <div>
                    <div className="bg-white  h-35 w-80 border border-gray-300 flex flex-col justify-between rounded-lg ml-20">
                        <div className="flex flex-row items-center justify-between p-4">
                            <h2 className="font-bold text-md">A List Priority</h2>
                            <CiStar className="text-xl font-bold text-yellow-900" />
                        </div>
                        <div className="p-4">
                            <h1 className="text-2xl font-bold">0</h1>
                            <h4 className="text-sm text-gray-500">0 confirmed, 0 shortlisted</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white h-35 w-80 flex flex-col border border-gray-300 justify-between rounded-lg ml-20">
                        <div className="flex flex-row items-center justify-between p-4">
                            <h2 className="font-bold text-md">B List Standard</h2>
                            <CiStar className="text-xl font-bold text-yellow-900" />
                        </div>
                        <div className="p-4">
                            <h1 className="text-2xl font-bold">0</h1>
                            <h4 className="text-sm text-gray-500">0 confirmed, 0 shortlisted</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white  h-35 w-80 flex flex-col border border-gray-300 justify-between rounded-lg ml-20">
                        <div className="flex flex-row items-center justify-between p-4">
                            <h2 className="font-bold text-md">Total Guests</h2>
                            <CiStar className="text-xl font-bold text-yellow-900" />
                        </div>
                        <div className="p-4">
                            <h1 className="text-2xl font-bold">0</h1>
                            <h4 className="text-sm text-gray-500">0.0% capacity</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white  h-30 w-292 rounded-lg border border-gray-300 p-8 mt-5 ml-19">
                <h4 className="font-bold text-md">Recent Additions</h4>
                <p className="text-gray-500">Latest guests added to the event</p>
            </div>
        </div>
    );
};

export default Overview