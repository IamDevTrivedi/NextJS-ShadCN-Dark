"use client";

import { SplineScene } from "@/components/ui/splite";
import { Button } from "./ui/button";

export function SplineSceneComponent() {
  return (
    <div className="text-accent-foreground bg-background w-screen h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center mx-auto">
      {/* left part */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-primary">Talkasauras</span>
        </h1>

        <h2 className="text-xl my-1 text-muted-foreground">
          Experience natural conversations, get instant answers to your
          questions, and unlock productivity with our intelligent AI assistant.
        </h2>

        <div className="pt-4 mt-2 flex flex-col px-4 gap-2 md:flex-row items-center justify-center">
          <Button size={"lg"}>Get Started</Button>
          <Button size={"lg"} variant={"outline"}>
            Learn More
          </Button>
        </div>
      </div>

      {/* right part */}

      <div className="w-full md:w-1/3 h-[300px] sm:h-[400px] mb-3 md:mb-0 hover:cursor-pointer lg:h-[500px] relative">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
