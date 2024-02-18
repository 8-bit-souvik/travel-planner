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
        <button title="Click here to customize your trip with excluding attractions or time"  onClick={(e) => { customiseTripModal(e) }} className="w-full h-1/4 bg-gradient-to-r from-purple-600 to-purple-800 p-2 mb-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 shadow-lg shadow-slate-700">
          <span className="mr-2">🌐</span>Customise Trip
        </button>
        <button title="Write your preference and regenerate your travel plan as you wish!" onClick={(e) => { personaliseTripModal(e)} } className="w-full h-1/4 bg-gradient-to-r from-purple-600 to-purple-800 p-2 mb-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 shadow-lg shadow-slate-700">
          <span className="mr-2">🗺️</span>Personalise Trip
        </button>
        <button title="Experience our Virtual Travel Guide for your Trip." className="w-full h-1/4 bg-gradient-to-r from-purple-600 to-purple-800 p-2 mb-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 shadow-lg shadow-slate-700">
          <span className="mr-2">🤖</span>Chat Bot
        </button>
        <Link href={"/storytelling.html"} target="_blank">
          <button  title="24X7 Travel Bot for any Assistance."  className="w-full h-1/4 bg-gradient-to-r from-purple-600 to-purple-800 p-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 shadow-lg shadow-slate-700">
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
