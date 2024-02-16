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


  return (
    <>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-4xl mx-auto max-w-[50%] text-blue-800">
                Detailed Itenerary
              </ModalHeader>
              <ModalBody>
                <p className="font-bold text-2xl text-teal-700">{iteneraryData.data["name"]}</p>
                <p>{iteneraryData.data["Detailed Description"]}</p>
                <p>{iteneraryData.data["Visiting_Hours"]}</p>
                <p>{iteneraryData.data["start_time"]}</p>
                <p>{iteneraryData.data["end_time"]}</p>
                <p>{iteneraryData.data["Nearest_Hospital"][0]}</p>
                <p>{iteneraryData.data["Nearest_Hospital"][1]}</p>
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
