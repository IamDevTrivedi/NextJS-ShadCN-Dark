"use client";

import StepWizard from "react-step-wizard";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

let custom = {
    enterRight: "transition-none duration-0",
    enterLeft: "transition-none duration-0",
    exitRight: "transition-none duration-0",
    exitLeft: "transition-none duration-0",
    intro: "transition-none duration-0",
};

function Step1({ nextStep }) {
    return (
        <Card className="w-full max-w-md p-6">
            <CardContent className="space-y-4">
                <h2 className="text-xl font-semibold">Step 1: Personal Info</h2>
                <Input placeholder="Your Name" />
                <Button onClick={nextStep}>Next</Button>
            </CardContent>
        </Card>
    );
}

function Step2({ previousStep }) {
    return (
        <Card className="w-full max-w-md p-6">
            <CardContent className="space-y-4">
                <h2 className="text-xl font-semibold">Step 2: Contact Info</h2>
                <Input placeholder="Your Email" />
                <div className="flex justify-between">
                    <Button variant="outline" onClick={previousStep}>
                        Back
                    </Button>
                    <Button>Finish</Button>
                </div>
            </CardContent>
        </Card>
    );
}

function StepWizardForm() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <StepWizard transitions={custom}>
                <Step1 />
                <Step2 />
            </StepWizard>
        </div>
    );
}

export default function Home() {
    return <StepWizardForm />;
}
