import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import MapComponent from "./Map_Component"

export default function Itenerary_Modal({ iteneraryData }) {
  console.log("Inside itenanry modal.....", iteneraryData.data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("4xl");

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  useEffect(() => {
    console.log("Itenerary modal is opening...trigger is called");
    if (iteneraryData) {
      onOpen();
      console.log("Itenerary modal opened");
    }
  }, [iteneraryData]);

  const positions = [{
    lat: Number(iteneraryData?.data?.latitude_of_the_attraction),
    lng: Number(iteneraryData?.data?.longitude_of_the_attraction)
  }]

  console.log("iterainary_positions: ", positions);

  return (
    <>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-4xl mx-auto text-blue-800">
                Detailed Itenerary
              </ModalHeader>
              <ModalBody className="flex flex-row justify-evenly">
                <div className=" max-w-[50%]">
                  <p className="font-bold text-2xl text-teal-700 pb-4">{iteneraryData.data["name"]}</p>
                  <p className="text-[14.5px] pb-3">{iteneraryData.data["Detailed Description"]}</p>
                  
                  <p className="font-semibold text-[#000000]"> Visiting hours: <span className="text-[#103a5d]">{iteneraryData.data["Visiting_Hours"]}</span> </p>
                  <p className="font-semibold text-[#000000]"> Start time: <span className="text-[#103a5d]">{iteneraryData.data["start_time"]}</span> </p>
                  <p className="font-semibold text-[#000000]"> End Time: <span className="text-[#103a5d]">{iteneraryData.data["end_time"]}</span> </p>
                  <p className="font-semibold text-[#000000]"> Nearest Hospital: <span className="text-[#103a5d]">{iteneraryData.data["Nearest_Hospital"][0]} ({iteneraryData.data["Nearest_Hospital"][1]})</span> </p>
                  <p className="font-semibold text-[#000000]"> attention: <span className=" text-[#c37a5b]">{iteneraryData.data["caution"]}</span> </p>
                </div>

                <MapComponent
                  positions={positions}
                  zoom={10}
                />

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
