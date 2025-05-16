"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

export default function ChatInputArea() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    alert(`You typed: ${input}`);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-xl shadow-md w-full max-w-4xl flex items-center gap-2 p-2"
    >
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow border-0 bg-transparent"
      />

      <Button
        type="submit"
        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        <SendIcon size={16} />
        Send
      </Button>
    </form>
  );
}
