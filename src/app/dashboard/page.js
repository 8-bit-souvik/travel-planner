"use client";
import React, { useState } from "react";
import data from "./../../data/data.json";
import place_removed_data from "./../../data/place_removed_data.json";
import time_removed_data from "./../../data/time_removed_data.json";
import Accordion from "./../../components/accordion";
import Card_component from "@/components/Card_component";
import Map from "@/components/Map";
import Image from "next/image";
import backgroundImg from "./../../assets/howrah-bridge.jpg";
import Nabvar from "./../../components/navbar";
import Selection_modal from "@/components/Selection_Modal";
import Itenerary_Modal from "@/components/Itenerary_Modal";

export default function Dashboard() {
  // console.log("data: ", data);
  const [accordian, setAccordian] = useState(1);
  const [modalstate, setModalstate] = useState(false);
  console.log("modalstate", modalstate);
  function xyz(params) {
    setModalstate(params);
  }

  function accordionNumber(params) {
    console.log(params);
    setAccordian(params);
  }

  const [modal, setmodal] = useState(false)
  const openModal = (state) => {
    console.log("state: ", state);
    setmodal(state)
  }

  return (
    <div className="flex flex-col w-full  h-[100vh]">
      <Selection_modal modalstate={modalstate} accordionNumber={accordionNumber}/>
      <Itenerary_Modal/>
      <Nabvar />

      <div className="flex w-full h-full pt-[20px]">
        <Image
          src={backgroundImg}
          layout="fill"
          className="z-[-5] opacity-80"
        />
        {/* Accordian */}
        <div className="w-3/4  p-4 h-full">
          <h1 className="text-[#cae2f5] text-[38px] font-bold text-center font-dancingScript tracking-wider mb-[12px]">
            Three Days Trip to kolkata
          </h1>
          <div className="">
            {accordian === 1 && <Accordion data={data?.itinerary?.days} />}
            {accordian === 2 && <Accordion data={place_removed_data?.itinerary?.days} />}
            {accordian === 3 && <Accordion data={time_removed_data?.itinerary?.days} />}
          </div>
        </div>

        {/* Budget , accomodation cards */}

        <div className="w-2/4  p-4 w-">
          <Card_component />
        </div>

        {/* maps , other buttons */}

        <div className="w-1/4 p-4">
          <Map xyz={xyz} />

        </div>
      </div>
    </div>
  );
}
