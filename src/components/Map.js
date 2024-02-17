"use client";
import React from "react";
import Image from 'next/image'
import kolkata from "../assets/kolkata.jpg"
import MapComponent from "./Map_Component"
import Link from "next/link";

const Map = ({ customiseTripModal, accordianData, personaliseTripModal }) => {

  console.log("accordianData: ", accordianData);

 const accordianPositions = Object.entries(accordianData).map((item, index) => {
    return {
      lat: Number(item[1].latitude_of_the_attraction),
      lng: Number(item[1].longitude_of_the_attraction)
    }
  })

  console.log("accordianPositions: ", accordianPositions);

  return (
    <div>
      <div className="h-2/5">
        <button onClick={(e) => { customiseTripModal(e) }} className="w-full h-1/4 bg-gradient-to-r from-blue-400 to-blue-600 p-2 mb-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 shadow-lg shadow-slate-700">

          <span className="mr-2">🌐</span>Customise Trip
        </button>
        <button onClick={(e) => { personaliseTripModal(e)} } className="w-full h-1/4 bg-gradient-to-r from-green-400 to-green-600 p-2 mb-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 shadow-lg shadow-slate-700">
          <span className="mr-2">🗺️</span>Personalise Trip
        </button>
        <button className="w-full h-1/4 bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 mb-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 shadow-lg shadow-slate-700">
          <span className="mr-2">🤖</span>Chat Bot
        </button>
        <Link href={"/storytelling.html"}>
          <button className="w-full h-1/4 bg-gradient-to-r from-purple-400 to-purple-600 p-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 shadow-lg shadow-slate-700">
            <span className="mr-2">📖</span>Storytelling Mode
          </button>
        </Link>

      </div>






      <div className="h-3/5 relative shadow-lg shadow-slate-700">
        <MapComponent  positions={accordianPositions} zoom={8} />
      </div>
    </div>
  );
};

export default Map;
