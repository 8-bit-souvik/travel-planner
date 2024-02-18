"use client";
import React, { useState } from "react";
import data from "./../data/base.json";
import place_removed_data from "./../data/place_removed_data.json";
import time_removed_data from "./../data/time_removed_data.json";
import shopping_mall from "./../data/shopping_mall.json";
import Accordion from "./../components/accordion";
import Card_component from "@/components/Card_component";
import Map from "@/components/Map";
import Image from "next/image";
import backgroundImg from "./../assets/howrah-bridge.jpg";
import Nabvar from "./../components/navbar";
import Selection_modal from "@/components/Selection_Modal";
import Personalise_Modal from "@/components/Personalise_Modal";
import Itenerary_Modal from "@/components/Itenerary_Modal";
import { useDisclosure } from "@nextui-org/react";
import Footer from "@/components/footer"

export default function Dashboard() {
  // console.log("data: ", data);
  const [accordian, setAccordian] = useState(1);
  const [accordianIndex, setAccordianIndex] = useState(0);
  const [modalstate, setModalstate] = useState(false);
  const [personaliseModalstate, setpersonaliseModalstate] = useState(false)
  const [modal, setmodal] = useState(false)
  const [iteneraryData, setIteneraryData] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  //console.log("modalstate", modalstate);

  function customiseTripModal(params) {
    setModalstate(params);
  }

  function personaliseTripModal(params) {
    setpersonaliseModalstate(params);
  }



  function updateAccordianIndex(params) {
    console.log("params ---------------------", params);
    if (isNaN(params)) {
      setAccordianIndex(0);
    } else {
      setAccordianIndex(params);
    }
  }

  function accordionNumber(params) {
    console.log(params);
    setAccordian(params);
  }


  const openModal = (state) => {
    console.log("state: ", state);
    setmodal(state)
  }

  function IteneraryState(e, data) {
    console.log({ e, data });
    setIteneraryData({ e, data });
  }

  return (
    <div className="flex flex-col w-full  h-[100vh] overflow-hidden">
      <Personalise_Modal personaliseModalstate={personaliseModalstate} accordionNumber={accordionNumber} />
      <Selection_modal modalstate={modalstate} accordionNumber={accordionNumber} />
      <Itenerary_Modal iteneraryData={iteneraryData} />
      <Nabvar />

      <div className="flex w-full h-full pt-[20px]">
        <Image
          src={backgroundImg}
          layout="fill"
          className="z-[-5] opacity-80"
        />
        {/* Accordian */}
        <div className="w-3/4  p-4 pb-0 h-full">
          <h1 className="text-[#cae2f5] text-[35px] font-bold text-center font-dancingScript tracking-wider mb-[12px]">
            Three Days Trip to kolkata
          </h1>
          <div className="max-h-[38rem] overflow-hidden">
            {accordian === 1 && <Accordion data={data?.itinerary?.days} IteneraryState={IteneraryState} updateAccordianIndex={updateAccordianIndex} />}
            {accordian === 2 && <Accordion data={place_removed_data?.itinerary?.days} IteneraryState={IteneraryState} updateAccordianIndex={updateAccordianIndex} />}
            {accordian === 3 && <Accordion data={time_removed_data?.itinerary?.days} IteneraryState={IteneraryState} updateAccordianIndex={updateAccordianIndex} />}
            {accordian === 4 && <Accordion data={shopping_mall?.itinerary?.days} IteneraryState={IteneraryState} updateAccordianIndex={updateAccordianIndex} />}
          </div>
        </div>

        {/* Budget , accomodation cards */}

        <div className="w-2/4  p-4 w-">
          <Card_component />
        </div>

        {/* maps , other buttons */}

        <div className="w-1/4 p-4">
          {accordian === 1 && <Map customiseTripModal={customiseTripModal} personaliseTripModal={personaliseTripModal} accordianData={Object.entries(data?.itinerary?.days)[accordianIndex][1].attractions} />}
          {accordian === 2 && <Map customiseTripModal={customiseTripModal} personaliseTripModal={personaliseTripModal} accordianData={Object.entries(place_removed_data?.itinerary?.days)[accordianIndex][1].attractions} />}
          {accordian === 3 && <Map customiseTripModal={customiseTripModal} personaliseTripModal={personaliseTripModal} accordianData={Object.entries(time_removed_data?.itinerary?.days)[accordianIndex][1].attractions} />}
          {accordian === 4 && <Map customiseTripModal={customiseTripModal} personaliseTripModal={personaliseTripModal} accordianData={Object.entries(shopping_mall?.itinerary?.days)[accordianIndex][1].attractions} />}
        </div>
      </div>

      <Footer />
    </div>
  );
}
