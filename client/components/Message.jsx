import React from "react";

export default function Message({ sender, text }) {
  const isUser = sender === "You";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-xl px-4 py-2 max-w-xs ${
          isUser ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <p className="text-sm font-semibold">{sender}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}