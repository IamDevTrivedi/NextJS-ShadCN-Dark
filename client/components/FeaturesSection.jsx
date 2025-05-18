"use client";

import React from "react";
import { useId } from "react";
import { useState } from "react";

export function FeaturesSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="py-20 lg:py-40" id="Core-Functionalities">
            <h1 className="text-4xl font-bold mb-15 text-accent-foreground text-center">
                Core Functionalities
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
                {grid.map((feature, idx) => {
                    // const isBlurred = hoveredIndex !== null && hoveredIndex !== idx;
                    const isBlurred = false;

                    return (
                        <div
                            key={feature.title}
                            id={`feature-number-${idx}`}
                            className={`relative bg-card text-accent-foreground p-6 rounded-3xl overflow-hidden transition duration-300 ${
                                isBlurred ? "blur-xs" : "blur-0"
                            }`}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Grid size={20} />
                            <p className="text-base font-bold relative z-20">{feature.title}</p>
                            <p className="text-muted-foreground mt-4 text-base font-normal relative z-20">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const grid = [
    {
        title: "Multimodal Chat Support",
        description:
            "Interact using text, images, audio, documents, and even videos — all in one seamless chat interface.",
    },
    {
        title: "Image Understanding",
        description:
            "Upload images and ask questions about them, get descriptions, or analyze visual content with AI.",
    },
    {
        title: "Audio-to-Text (Speech Recognition)",
        description:
            "Talk to the chatbot using your voice. Audio is transcribed and processed instantly with high accuracy.",
    },
    {
        title: "Video Intelligence",
        description:
            "Upload videos to extract summaries, transcriptions, and insights from key frames or spoken content.",
    },
    {
        title: "Document Q&A",
        description:
            "Upload PDFs, Markdown files, or CSVs and ask natural language questions to retrieve relevant information.",
    },
    {
        title: "CSV Data Analysis",
        description:
            "Ask the chatbot to analyze datasets, generate summaries, or even create charts from CSV files.",
    },
    {
        title: "Secure File Handling",
        description:
            "Uploaded files are processed securely and temporarily — your data privacy is our top priority.",
    },
    {
        title: "Streaming Chat Experience",
        description:
            "Get real-time responses with typing animation for a dynamic and engaging conversation experience.",
    },
];

export const Grid = ({ pattern, size }) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
                />
            </div>
        </div>
    );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}
