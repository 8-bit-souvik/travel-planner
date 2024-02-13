"use client";
import React from "react";
import data from "./../../data/data.json";
import Accordion from "./../../components/accordion"
import Card_component from "@/components/Card_component";
import Map from "@/components/Map";

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

        <div className="w-2/4 p-4 w-">
          <Card_component/>
        </div>

        {/* maps , other buttons */}

        <div className="w-1/4 p-4">
          <Map/>
        </div>
      </div>
    </div>
  );
}
