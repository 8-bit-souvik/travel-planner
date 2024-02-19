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

export default function Selection_modal({ modalstate, accordionNumber }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("3xl");

  const handleOpen = (size) => {
    onOpen();
  };

  const handleClick1 = () => {
    accordionNumber(2);
    onClose();
  };

  const handleClick2 = () => {
    accordionNumber(3)
    onClose();
  };

  useEffect(() => {
    console.log("modal is opening...trigger is called");
    if (modalstate) {
      onOpen();
      console.log("modal opened");
    }
  }, [modalstate]);

  return (
    <>
      {/* <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button key={size} onPress={() => handleOpen(size)}>Open {size}</Button>
        ))} 
      </div> */}
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div className="modal flex flex-col p-4">
                  {/* First Div */}
                  <div className="flex mb-4">
                    <div className="w-1/3 pr-4">
                      {/* First Column */}
                      <div className="font-bold mb-2">Days</div>
                      <div className="bg-blue-100 p-1 m-1 rounded">Day 1</div>
                      <div className="bg-blue-100 p-1 m-1 rounded">Day 2</div>
                      <div className="bg-blue-100 p-1 m-1 rounded">Day 3</div>
                    </div>
                    <div className="w-1/3 pr-4">
                      {/* Second Column */}
                      <div className="font-bold mb-2">Places</div>
                      <div>
                        <input type="checkbox" className="mr-2 mb-4 mt-1" />{" "}
                        Victoria Memorial
                      </div>
                      <div className="text-nowrap">
                        <input type="checkbox" className="mr-2 mb-4" />Dakshineswar Kali Temple
                      </div>
                      <div>
                        <input type="checkbox" className="mr-2 mb-4" /> Howrah Bridge
                      </div>
                    </div>
                    <div className="w-1/3">
                      {/* Third Column */}
                      <div className="font-bold mb-2">Other Places</div>
                      <div>
                        <input type="checkbox" className="mr-2 mb-4 mt-1" />{" "}
                        Belur Math
                      </div>
                      <div>
                        <input type="checkbox" className="mr-2 mb-4" />Indian Museum
                      </div>
                      <div>
                        <input type="checkbox" className="mr-2 mb-4" />Princep Ghat
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-2">
                    <button
                      onClick={handleClick1}
                      className="bg-blue-400 text-white px-4 py-1 rounded"
                    >
                      Click Me
                    </button>
                  </div>

                  {/* Second Div */}
                  <div className="flex">
                    <div className="w-1/3 pr-4">
                      {/* First Column */}
                      <div className="font-bold mb-[13px]">Days</div>
                      <div className="bg-blue-100 p-1 m-1 rounded">Day 1</div>
                      <div className="bg-blue-100 p-1 m-1 rounded">Day 2</div>
                      <div className="bg-blue-100 p-1 m-1 rounded">Day 3</div>
                    </div>
                    <div className="w-1/3 pr-4">
                      {/* Second Column */}
                      <div className="font-bold mb-2">Start Time</div>
                      <div>
                        <select className="w-full p-1 m-1 border border-gray-300 rounded">
                          <option value="start-time-day-1">
                            Select Start Time
                          </option>
                          <option value="8:00am">8:00am</option>
                          <option value="9:00am">9:00am</option>
                          <option value="10:00am">10:00am</option>
                          <option value="11:00am">11:00am</option>
                          <option value="12:00am">12:00am</option>
                          <option value="1:00pm">1:00pm</option>
                          <option value="2:00pm">2:00pm</option>
                          <option value="3:00pm">3:00pm</option>
                          <option value="4:00pm">4:00pm</option>
                          <option value="5:00pm">5:00pm</option>
                          <option value="6:00pm">6:00pm</option>
                          <option value="7:00pm">7:00pm</option>
                          <option value="8:00pm">8:00pm</option>
                          <option value="9:00pm">9:00pm</option>
                          <option value="10:00pm">10:00pm</option>
                          {/* Add your time options here */}
                        </select>
                      </div>
                      <div>
                        <select className="w-full p-1 m-1 border border-gray-300 rounded">
                          <option value="start-time-day-2">
                            Select Start Time
                          </option>
                          <option value="8:00am">8:00am</option>
                          <option value="9:00am">9:00am</option>
                          <option value="10:00am">10:00am</option>
                          <option value="11:00am">11:00am</option>
                          <option value="12:00am">12:00am</option>
                          <option value="1:00pm">1:00pm</option>
                          <option value="2:00pm">2:00pm</option>
                          <option value="3:00pm">3:00pm</option>
                          <option value="4:00pm">4:00pm</option>
                          <option value="5:00pm">5:00pm</option>
                          <option value="6:00pm">6:00pm</option>
                          <option value="7:00pm">7:00pm</option>
                          <option value="8:00pm">8:00pm</option>
                          <option value="9:00pm">9:00pm</option>
                          <option value="10:00pm">10:00pm</option>
                          {/* Add your time options here */}
                        </select>
                      </div>
                      <div>
                        <select className="w-full p-1 m-1 border border-gray-300 rounded">
                          <option value="start-time-day-3">
                            Select Start Time
                          </option>
                          <option value="8:00am">8:00am</option>
                          <option value="9:00am">9:00am</option>
                          <option value="10:00am">10:00am</option>
                          <option value="11:00am">11:00am</option>
                          <option value="12:00am">12:00am</option>
                          <option value="1:00pm">1:00pm</option>
                          <option value="2:00pm">2:00pm</option>
                          <option value="3:00pm">3:00pm</option>
                          <option value="4:00pm">4:00pm</option>
                          <option value="5:00pm">5:00pm</option>
                          <option value="6:00pm">6:00pm</option>
                          <option value="7:00pm">7:00pm</option>
                          <option value="8:00pm">8:00pm</option>
                          <option value="9:00pm">9:00pm</option>
                          <option value="10:00pm">10:00pm</option>
                          {/* Add your time options here */}
                        </select>
                      </div>
                    </div>
                    <div className="w-1/3">
                      {/* Third Column */}
                      <div className="font-bold mb-2">End Time</div>
                      <div>
                        <select className="w-full p-1 m-1 border border-gray-300 rounded">
                          <option value="end-time-day-1">
                            Select End Time
                          </option>
                          <option value="8:00am">8:00am</option>
                          <option value="9:00am">9:00am</option>
                          <option value="10:00am">10:00am</option>
                          <option value="11:00am">11:00am</option>
                          <option value="12:00am">12:00am</option>
                          <option value="1:00pm">1:00pm</option>
                          <option value="2:00pm">2:00pm</option>
                          <option value="3:00pm">3:00pm</option>
                          <option value="4:00pm">4:00pm</option>
                          <option value="5:00pm">5:00pm</option>
                          <option value="6:00pm">6:00pm</option>
                          <option value="7:00pm">7:00pm</option>
                          <option value="8:00pm">8:00pm</option>
                          <option value="9:00pm">9:00pm</option>
                          <option value="10:00pm">10:00pm</option>
                          {/* Add your time options here */}
                        </select>
                      </div>
                      <div>
                        <select className="w-full p-1 m-1 border border-gray-300 rounded">
                          <option value="end-time-day-2">
                            Select End Time
                          </option>
                          <option value="8:00am">8:00am</option>
                          <option value="9:00am">9:00am</option>
                          <option value="10:00am">10:00am</option>
                          <option value="11:00am">11:00am</option>
                          <option value="12:00am">12:00am</option>
                          <option value="1:00pm">1:00pm</option>
                          <option value="2:00pm">2:00pm</option>
                          <option value="3:00pm">3:00pm</option>
                          <option value="4:00pm">4:00pm</option>
                          <option value="5:00pm">5:00pm</option>
                          <option value="6:00pm">6:00pm</option>
                          <option value="7:00pm">7:00pm</option>
                          <option value="8:00pm">8:00pm</option>
                          <option value="9:00pm">9:00pm</option>
                          <option value="10:00pm">10:00pm</option>
                          {/* Add your time options here */}
                        </select>
                      </div>
                      <div>
                        <select className="w-full p-1 m-1 border border-gray-300 rounded">
                          <option value="end-time-day-3">
                            Select End Time
                          </option>
                          <option value="8:00am">8:00am</option>
                          <option value="9:00am">9:00am</option>
                          <option value="10:00am">10:00am</option>
                          <option value="11:00am">11:00am</option>
                          <option value="12:00am">12:00am</option>
                          <option value="1:00pm">1:00pm</option>
                          <option value="2:00pm">2:00pm</option>
                          <option value="3:00pm">3:00pm</option>
                          <option value="4:00pm">4:00pm</option>
                          <option value="5:00pm">5:00pm</option>
                          <option value="6:00pm">6:00pm</option>
                          <option value="7:00pm">7:00pm</option>
                          <option value="8:00pm">8:00pm</option>
                          <option value="9:00pm">9:00pm</option>
                          <option value="10:00pm">10:00pm</option>
                          {/* Add your time options here */}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="text-center m-2">
                    <button
                      onClick={handleClick2}
                      className="bg-blue-400 text-white px-4 py-1 rounded"
                    >
                      Click Me
                    </button>
                  </div>
                </div>
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
