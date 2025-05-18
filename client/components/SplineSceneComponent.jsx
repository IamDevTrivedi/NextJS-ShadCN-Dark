'use client';

import { SplineScene } from '@/components/ui/splite';
import { Button } from './ui/button';
import Link from 'next/link';
import { useCallback } from 'react';

export function SplineSceneComponent() {
    const scrollToSection = useCallback(() => {
        const el = document.getElementById('Core-Functionalities');
        console.log(el);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <div className="text-accent-foreground break-words px-4 py-8 sm:py-12 bg-background w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center">
            <div className="w-full md:w-1/2 max-w-xl px-4 md:px-6 mt-8 md:mt-0">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Welcome to <span className="text-primary">Talkasauras</span>
                </h1>

                <h2 className="text-lg my-4 text-muted-foreground">
                    Experience natural conversations, get instant answers to your questions, and
                    unlock productivity with our intelligent AI assistant.
                </h2>

                <div className="pt-2 sm:pt-4 mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
                    <Button className="w-full sm:w-auto" size="lg">
                        <Link href="/accounts/sign-up" className="w-full">
                            Get Started
                        </Link>
                    </Button>
                    <Button
                        className="w-full sm:w-auto"
                        size="lg"
                        variant="outline"
                        onClick={scrollToSection}
                    >
                        Learn More
                    </Button>
                </div>
            </div>

            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-64 sm:h-80 md:h-96 lg:h-[500px] relative">
                <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="absolute inset-0 w-full h-full"
                />
            </div>
        </div>
    );
}
