"use client";
import React from "react";
import data from "./../../data/data.json";
import Accordion from "./../../components/accordion"

export default function Dashboard() {
  console.log("data: ", data);

  return (
    <div className="flex flex-col w-full  h-[100vh]">
      <div className="h-[20%]">
      </div>

      <div className="flex w-full h-full">
        {/* Accordian */}
        <div className="w-3/4 bg-blue-500 p-4 h-full">
          <h1>3 Days TRip to kolkata</h1>
          <div className="">
            <Accordion />
          </div>
        </div>

        {/* Budget , accomodation cards */}

        <div className="w-2/4 bg-gray-100 p-4 w-">
          <button className="bg-gradient-to-r from-teal-200 to-teal-400 hover:bg-gradient-to-r hover:from-teal-400 hover:to-teal-600 text-white font-bold py-2 px-4 rounded w-full">
            Click Here For Detailed Itinerary
          </button>

          <div className="max-w-md mx-auto bg-gradient-to-r from-teal-200 to-teal-400 rounded-xl overflow-hidden shadow-md">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 border-b border-white pb-1">
                Kolkata Travel Essentials
              </div>
              <div className="space-y-2">
                <div className="flex">
                  <div className="mr-2">🌤️</div>
                  <div>Weather: Sunny with a touch of history</div>
                </div>
                <div className="flex">
                  <div className="mr-2">⏳</div>
                  <div>Ideal duration for travel: 3-4 days</div>
                </div>
                <div className="flex">
                  <div className="mr-2">🌟</div>
                  <div>
                    Best Time to visit: All year round, but avoid monsoon
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>

          <div></div>
        </div>

        {/* maps , other buttons */}

        <div className="w-1/4 bg-red-500 p-4">
          <div>hello</div>

          <div> </div>
        </div>
      </div>
    </div>
  );
}
