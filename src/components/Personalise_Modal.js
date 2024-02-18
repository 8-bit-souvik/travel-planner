"use client"
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import submitSuccessAnimation from './../assets/submit_success.json'
import Lottie from "lottie-react";

export default function Selection_modal({ personaliseModalstate, accordionNumber }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("3xl");
  const [submitted, setsubmitted] = useState(false)

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
    if (personaliseModalstate) {
      onOpen();
      setsubmitted(false);
      console.log("modal opened");
    }
  }, [personaliseModalstate]);


  function closeModal(params) {
    if (!submitted) {
      setsubmitted(true);

      setTimeout(() => {
        onClose()
        accordionNumber(4);
      }, 3000);
    }
  }

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: submitSuccessAnimation,
  //   renderer: 'svg'
  // }

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
                Personalise your trip here
              </ModalHeader>
              <ModalBody>
                {submitted ?
                  <div className="flex flex-col items-center justify-center h-[15rem]">
                    {/* <Image src={submitSuccess} height={200} width={200} /> */}
                    <div>
                      <Lottie
                        // options={defaultOptions}
                        animationData={submitSuccessAnimation}
                        height={250}
                        width={250}
                        loop={false}
                      />
                    </div>
                    <p className="text-[20px] font-medium text-[#4695c1]">We recived your preferences!</p>
                  </div>
                  : <textarea placeholder="Please type your preferences..." className="bg-[#d3e6f5] rounded-lg h-[15rem] p-5 outline-none whitespace-break-spaces overflow-auto" contentEditable>

                  </textarea>}
              </ModalBody>
              <ModalFooter>
                <Button className={`${submitted ? "px-8 cursor-not-allowed" : "bg-[#5087ad] text-white px-8 hover:bg-[#3e7196]"} `} variant="light" onPress={closeModal}>
                  {submitted ? "Submitted!" : "Submit"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
