import React from "react";
import MessageArea from "./MessageArea";
import ChatInputArea from "./ChatInputArea.jsx";

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col bg-gray-100">
      <div className="flex flex-1 w-full mx-auto overflow-y-auto p-4">
        <MessageArea />
      </div>
      <ChatInputArea />
    </div>
  );
}