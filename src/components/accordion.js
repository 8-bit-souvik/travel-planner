import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App({ data }) {
    const blue_gradient = "bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-[#fff]"
    console.log("data: ", data);
    const header = "lorem ipsum dolor sit amet"
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Day 1" title="Day 1" className=" bg-[#b7e4ff] rounded-[12px] p-[5px] px-[20px] mb-[15px] bg-gradient-to-r from-[#c5e9ff] to-[#97d0f3] shadow-lg shadow-slate-700">
                <div className="max-h-[20rem] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-sky-700 scrollbar-track-sky-300 ">
                    {
                        Object.entries(data["Day 1"]?.attractions).map((item, index) => {
                            return (
                                <div className={`pb-2 mb-3 ${Object.entries(data["Day 1"]?.attractions).length - 1 == index ? "" : "border-b-2 border-[#82b3c3]"}`}>
                                    <p className="font-semibold text-[#103a5d] tracking-widest text-[25px] flex flex-row justify-between ">
                                        {item[1]["name"]}
                                        <button className={`${blue_gradient} text-black text-[12px] font-bold mr-4 py-[3px] px-5 rounded w-auto shadow-lg shadow-slate-700`}>
                                            Detailed Itinerary
                                        </button>
                                    </p>

                                    <p className=" font-mono leading-5 my-[1rem]">
                                        {item[1]["Description"]}
                                    </p>


                                    <p className="font-semibold text-[#103a5d]">
                                        From: {item[1]["start_time"]}
                                    </p>

                                    <p className="font-semibold text-[#103a5d]">
                                        To: {item[1]["end_time"]}
                                    </p>

                                    <p className="font-semibold text-[#103a5d]">
                                        Rating: {item[1]["rating"]}/10
                                    </p>

                                    <p className="text-[#c36757]">
                                        {item[1]["caution"]}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>


            </AccordionItem>
            <AccordionItem key="2" aria-label="Day 2" title="Day 2" className=" bg-[#b7e4ff] rounded-[12px] p-[5px] px-[20px] mb-[15px]  bg-gradient-to-r from-[#97d0f3] to-[#c5e9ff] shadow-lg shadow-slate-700">
                <div className="max-h-[20rem] overflow-y-auto scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 ">
                    {
                        Object.entries(data["Day 2"]?.attractions).map((item, index) => {
                            return (
                                <div className={`pb-2 mb-3 ${Object.entries(data["Day 2"]?.attractions).length - 1 == index ? "" : "border-b-2 border-[#82b3c3]"}`}>
                                    <p className="font-semibold text-[#103a5d] tracking-widest text-[25px] flex flex-row justify-between ">
                                        {item[1]["name"]}
                                        <button className={`${blue_gradient} text-black text-[12px] font-bold mr-4 py-[3px] px-5 rounded w-auto shadow-lg shadow-slate-700`}>
                                            Detailed Itinerary
                                        </button>
                                    </p>

                                    <p className=" font-mono leading-5 my-[1rem]">
                                        {item[1]["Description"]}
                                    </p>


                                    <p className="font-semibold text-[#103a5d]">
                                        From: {item[1]["start_time"]}
                                    </p>

                                    <p className="font-semibold text-[#103a5d]">
                                        To: {item[1]["end_time"]}
                                    </p>

                                    <p className="font-semibold text-[#103a5d]">
                                        Rating: {item[1]["rating"]}/10
                                    </p>

                                    <p className="text-[#c36757]">
                                        {item[1]["caution"]}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

            </AccordionItem>
            <AccordionItem key="3" aria-label="Day 3" title="Day 3" className=" bg-[#b7e4ff] rounded-[12px] p-[5px] px-[20px]  bg-gradient-to-r from-[#c5e9ff] to-[#97d0f3] shadow-lg shadow-slate-700">
                <div className="max-h-[20rem] overflow-y-auto scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 ">
                    {
                        Object.entries(data["Day 3"]?.attractions).map((item, index) => {
                            return (
                                <div className={`pb-2 mb-3 ${Object.entries(data["Day 3"]?.attractions).length - 1 == index ? "" : "border-b-2 border-[#82b3c3]"}`}>
                                    <p className="font-semibold text-[#103a5d] tracking-widest text-[25px] flex flex-row justify-between ">
                                        {item[1]["name"]}
                                        <button className={`${blue_gradient} text-black text-[12px] font-bold mr-4 py-[3px] px-5 rounded w-auto shadow-lg shadow-slate-700`}>
                                            Detailed Itinerary
                                        </button>
                                    </p>

                                    <p className=" font-mono leading-5 my-[1rem]">
                                        {item[1]["Description"]}
                                    </p>


                                    <p className="font-semibold text-[#103a5d]">
                                        From: {item[1]["start_time"]}
                                    </p>

                                    <p className="font-semibold text-[#103a5d]">
                                        To: {item[1]["end_time"]}
                                    </p>

                                    <p className="font-semibold text-[#103a5d]">
                                        Rating: {item[1]["rating"]}/10
                                    </p>

                                    <p className="text-[#c36757]">
                                        {item[1]["caution"]}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>


            </AccordionItem>
        </Accordion>
    );
}
