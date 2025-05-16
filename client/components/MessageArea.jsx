import React from "react";
import Message from "./Message";

export default function MessageArea() {
  return (
    <div className="space-y-2 w-full">
      <Message sender="You" text="Hey there!" />
      <Message sender="AI" text="Hello! How can I help you today?" />
    </div>
  );
}
