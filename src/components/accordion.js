import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1" className="bg-[#b7e4ff] rounded-[12px] p-[5px]">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2"  className="bg-[#b7e4ff] rounded-[12px] p-[5px]">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3"  className="bg-[#b7e4ff] rounded-[12px] p-[5px]">
                {defaultContent}
            </AccordionItem>
        </Accordion>
    );
}
