import React from "react";
import { FaStar } from "react-icons/fa";
import { MdPaid, MdSettings, MdClose } from "react-icons/md";
//INTERNAL IMPORT
import { Chatting, Modal } from "../Components/Chat/index";

const chat = () => {
  return (
    <div>
      <Chatting />
      <Modal />
    </div>
  );
};

export default chat;