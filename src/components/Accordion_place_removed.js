import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App({ data }) {
    console.log("data: ", data);
    const header = "lorem ipsum dolor sit amet"
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Day 1" title="Day 1" className="bg-[#b7e4ff] rounded-[12px] p-[5px] px-[20px] mb-[15px] bg-gradient-to-r from-[#c5e9ff] to-[#97d0f3] shadow-lg shadow-slate-700">


                <p className="font-semibold text-[#103a5d] tracking-widest text-[25px]">
                    {Object.entries(data["Day 1"]?.attractions)[0][1]["name"]}
                </p>

                <p className=" font-mono leading-5 my-[1rem]">
                    {Object.entries(data["Day 1"]?.attractions)[0][1]["Description"]}
                </p>


                <p className="font-semibold text-[#103a5d]">
                    From: {Object.entries(data["Day 1"]?.attractions)[0][1]["start_time"]}
                </p>

                <p className="font-semibold text-[#103a5d]">
                    To: {Object.entries(data["Day 1"]?.attractions)[0][1]["end_time"]}
                </p>

                <p className="font-semibold text-[#103a5d]">
                    Rating: {Object.entries(data["Day 1"]?.attractions)[0][1]["rating"]}/10
                </p>

                <p className="text-center text-[#c36757]">
                    {Object.entries(data["Day 1"]?.attractions)[0][1]["caution"]}
                </p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Day 2" title="Day 2" className="bg-[#b7e4ff] rounded-[12px] p-[5px] px-[20px] mb-[15px]  bg-gradient-to-r from-[#97d0f3] to-[#c5e9ff] shadow-lg shadow-slate-700">


                <p className="font-semibold text-[#103a5d] tracking-widest text-[25px]">
                    {Object.entries(data["Day 2"]?.attractions)[0][1]["name"]}
                </p>

                <p className=" font-mono leading-5 my-[1rem]">
                    {Object.entries(data["Day 2"]?.attractions)[0][1]["Description"]}
                </p>


                <p className="font-semibold text-[#103a5d]">
                    From: {Object.entries(data["Day 2"]?.attractions)[0][1]["start_time"]}
                </p>

                <p className="font-semibold text-[#103a5d]">
                    To: {Object.entries(data["Day 2"]?.attractions)[0][1]["end_time"]}
                </p>

                <p className="font-semibold text-[#103a5d]">
                    Rating: {Object.entries(data["Day 2"]?.attractions)[0][1]["rating"]}/10
                </p>

                <p className="text-center text-[#c36757]">
                    {Object.entries(data["Day 2"]?.attractions)[0][1]["caution"]}
                </p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Day 3" title="Day 3" className="bg-[#b7e4ff] rounded-[12px] p-[5px] px-[20px]  bg-gradient-to-r from-[#c5e9ff] to-[#97d0f3] shadow-lg shadow-slate-700">


                <p className="font-semibold text-[#103a5d] tracking-widest text-[25px]">
                    {Object.entries(data["Day 3"]?.attractions)[0][1]["name"]}
                </p>

                <p className=" font-mono leading-5 my-[1rem]">
                    {Object.entries(data["Day 3"]?.attractions)[0][1]["Description"]}
                </p>


                <p className="font-semibold text-[#103a5d]">
                    From: {Object.entries(data["Day 3"]?.attractions)[0][1]["start_time"]}
                </p>

                <p className="font-semibold text-[#103a5d]">
                    To: {Object.entries(data["Day 3"]?.attractions)[0][1]["end_time"]}
                </p>

                <p className="font-semibold text-[#103a5d]">
                    Rating: {Object.entries(data["Day 3"]?.attractions)[0][1]["rating"]}/10
                </p>

                <p className="text-center text-[#c36757]">
                    {Object.entries(data["Day 3"]?.attractions)[0][1]["caution"]}
                </p>
            </AccordionItem>
        </Accordion>
    );
}
