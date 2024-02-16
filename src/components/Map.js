"use client";
import React from "react";
import Image from 'next/image'
import kolkata from "../assets/kolkata.jpg"
import MapComponent from "./Map_Component"

const Map = ({ xyz }) => {

  return (
    <div>
      <div className="h-2/5">
        <button onClick={(e) => { xyz(e) }} className="w-full h-1/4 bg-gradient-to-r from-blue-400 to-blue-600 p-2 mb-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 shadow-lg shadow-slate-700">

          <span className="mr-2">🌐</span>Customise Trip
        </button>
        <button className="w-full h-1/4 bg-gradient-to-r from-green-400 to-green-600 p-2 mb-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 shadow-lg shadow-slate-700">
          <span className="mr-2">🗺️</span>Map View
        </button>
        <button className="w-full h-1/4 bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 mb-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 shadow-lg shadow-slate-700">
          <span className="mr-2">🤖</span>Chat Bot
        </button>
        <button className="w-full h-1/4 bg-gradient-to-r from-purple-400 to-purple-600 p-2 flex items-center justify-center text-white rounded transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 shadow-lg shadow-slate-700">
          <span className="mr-2">📖</span>Storytelling Mode
        </button>
      </div>






      <div className="h-3/5 relative shadow-lg shadow-slate-700">
        <MapComponent />
      </div>
    </div>
  );
};

export default Map;
