import React from "react";
import MessageArea from "./MessageArea";
import ChatInputArea from "./ChatInputArea.jsx";

export default function ChatArea() {
    return (
        <div className="flex flex-col bg-gray-100">
            <div className="flex-1 w-full max-w-4xl mx-auto overflow-y-auto px-4 py-2">
                <MessageArea />
            </div>
            <ChatInputArea />
        </div>
    );
}
