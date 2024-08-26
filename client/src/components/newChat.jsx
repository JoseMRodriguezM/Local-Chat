import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const NewChatButton = ({ onNewChat }) => {
  return (
    <button
      onClick={onNewChat}
      className="text-white px-4 py-4 rounded-full flex items-center"
    >
      <AiOutlinePlus className="mr-2" />
    </button>
  );
};

export default NewChatButton;
