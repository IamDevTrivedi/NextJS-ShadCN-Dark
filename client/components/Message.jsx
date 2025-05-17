"use client";

export function Message({ text, sender, date }) {
  const formattedTime = new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className={`my-2 px-4 py-2 rounded-2xl max-w-xs 
        ${
          sender === "user"
            ? "bg-accent text-accent-foreground self-end"
            : "bg-accent text-accent-foreground self-start"
        }`}
    >
      <div>{text}</div>
      <div className="text-xs text-muted-foreground mt-1 text-right">
        {formattedTime}
      </div>
    </div>
  );
}
