import { PointerHighlight } from "@/components/ui/pointer-highlight";

const reasons = [
  {
    highlight: "no matter the format",
    text: "You don’t need to convert or clean anything. Just drop in your file — image, audio, document, or video — and you're ready to go.",
    color: "green",
  },
  {
    highlight: "ask naturally",
    text: "You don’t need special commands. Just ask your question the way you think it, and let AI handle the complexity.",
    color: "blue",
  },
  {
    highlight: "save time & energy",
    text: "Whether you're studying, analyzing, or researching, our AI handles the heavy lifting so you can focus on what matters.",
    color: "green",
  },
];

export function TheReasons() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center mb-5">
        Why Talkasauras Fits Everyday Needs — for Everyone
      </h1>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 py-10 sm:grid-cols-3">
        {reasons.map((item, i) => (
          <div key={i} className="p-6 border rounded-4xl border-accent">
            <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
              This tool helps because you can
              <PointerHighlight
                rectangleClassName={`bg-${item.color}-100 dark:bg-${item.color}-900 border-${item.color}-300 dark:border-${item.color}-700 leading-loose`}
                pointerClassName={`text-${item.color}-500 h-3 w-3`}
                containerClassName="inline-block ml-1"
              >
                <span className="relative z-10 font-semibold mx-1">
                  {item.highlight}
                </span>
              </PointerHighlight>
              {/* <span className="text-muted-foreground">without extra effort.</span> */}
            </div>
            <p className="mt-4 text-sm text-neutral-500">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
