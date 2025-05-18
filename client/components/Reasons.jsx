import { PointerHighlight } from "@/components/ui/pointer-highlight";

// Define colors as objects with specific class names instead of dynamic strings
const reasonStyles = {
    green: {
        rectangle: "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700",
        pointer: "text-green-500 h-3 w-3",
    },
    blue: {
        rectangle: "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700",
        pointer: "text-blue-500 h-3 w-3",
    },
};

const reasons = [
    {
        highlight: "no matter the format",
        text: "You don't need to convert or clean anything. Just drop in your file — image, audio, document, or video — and you're ready to go.",
        color: "green",
    },
    {
        highlight: "ask naturally",
        text: "You don't need special commands. Just ask your question the way you think it, and let AI handle the complexity.",
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
        <section className="py-12">
            <h1 className="text-4xl text-accent-foreground font-bold text-center mb-5">
                Why Talkasaurus Fits Everyday Needs — for Everyone
            </h1>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 py-10 sm:grid-cols-3">
                {reasons.map((item, i) => {
                    // Get the correct style objects based on color
                    const style = reasonStyles[item.color];

                    return (
                        <div
                            key={i}
                            className="p-6 border border-muted-foreground/20 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="mt-4 text-base font-bold text-accent-foreground tracking-tight md:text-base">
                                This tool helps because you can
                                <PointerHighlight
                                    rectangleClassName={style.rectangle}
                                    pointerClassName={style.pointer}
                                    containerClassName="inline-block ml-1"
                                >
                                    <span className="relative text-accent-foreground z-10 font-semibold mx-1">
                                        {item.highlight}
                                    </span>
                                </PointerHighlight>
                            </div>
                            <p className="mt-4 text-muted-foreground text-sm">{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
