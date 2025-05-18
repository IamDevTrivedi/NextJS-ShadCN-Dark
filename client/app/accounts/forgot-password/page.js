"use client";

import StepWizard from "react-step-wizard";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import React from "react";
import { Loader2 } from "lucide-react";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const custom = {
    enterRight: "transition-none duration-0",
    enterLeft: "transition-none duration-0",
    exitRight: "transition-none duration-0",
    exitLeft: "transition-none duration-0",
    intro: "transition-none duration-0",
};

export default function AccountRecoveryPage() {
    const [formData, setFormData] = useState({
        email: "",
        OTP: "",
        password: "",
        confirmPassword: "",
    });

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const isValidPassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    };

    const canSubmit1 = () => {
        return formData.email && isValidEmail(formData.email);
    };

    const canSubmit2 = () => {
        return formData.OTP.length === 6;
    };

    const canSubmit3 = () => {
        return (
            formData.password &&
            formData.confirmPassword &&
            formData.password === formData.confirmPassword &&
            isValidPassword(formData.password)
        );
    };

    const [isSubmitting, setIsSubmitting] = useState({
        step1: 0,
        step2: 0,
        step3: 0,
    });

    const handleSubmitStep1 = () => {};
    const handleSubmitStep2 = () => {};
    const handleSubmitStep3 = () => {};

    const Step1 = () => {
        return (
            <CardContent className="py-6 px-4 sm:px-6">
                <div className="space-y-4">
                    <Label htmlFor="email" className="block text-sm font-medium">
                        Email Address <span className="text-destructive/60">*</span>
                    </Label>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="sm:col-span-3"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                });
                            }}
                        />

                        {isSubmitting.step1 ? (
                            <Button disabled className="w-full sm:w-auto">
                                <Loader2 className="animate-spin" />
                                Send OTP
                            </Button>
                        ) : (
                            <Button onClick={handleSubmitStep1} className="w-full sm:w-auto">
                                Send OTP
                            </Button>
                        )}
                    </div>
                </div>
            </CardContent>
        );
    };

    const Step2 = () => {
        return (
            <CardContent className="py-6 px-4 sm:px-6">
                <div className="space-y-6">
                    <div>
                        <Label htmlFor="otp" className="block text-sm font-medium mb-2">
                            Enter OTP <span className="text-destructive/60 ml-1">*</span>
                        </Label>

                        <div className="flex justify-center max-w-md mx-auto">
                            <InputOTP
                                pattern={REGEXP_ONLY_DIGITS}
                                maxLength={6}
                                className="w-full "
                                value={formData.OTP}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        OTP: e.target.value,
                                    });
                                }}
                            >
                                <InputOTPGroup className={"flex gap-1"}>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                </InputOTPGroup>
                                <InputOTPSeparator />
                                <InputOTPGroup className={"flex gap-1"}>
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>
                    </div>

                    <div className="pt-2">
                        {isSubmitting.step2 ? (
                            <Button
                                disabled
                                className="w-full sm:w-auto sm:px-8 mx-auto flex justify-center"
                            >
                                <Loader2 className="animate-spin" />
                                Verify OTP
                            </Button>
                        ) : (
                            <Button
                                onClick={handleSubmitStep2}
                                className="w-full sm:w-auto sm:px-8 mx-auto flex justify-center"
                            >
                                Verify OTP
                            </Button>
                        )}
                    </div>
                </div>
            </CardContent>
        );
    };

    const Step3 = () => {
        return (
            <CardContent className="py-6 px-4 sm:px-6">
                <div className="space-y-6 max-w-md mx-auto">
                    <div>
                        <Label htmlFor="password" className="block text-sm font-medium mb-2">
                            Password <span className="text-destructive/60 ml-1">*</span>
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Create a secure password"
                        />
                    </div>

                    <p className="text-xs text-muted-foreground">
                        Password must be at least 8 characters long and contain at least one
                        uppercase letter, one lowercase letter, one number, and one special
                        character
                    </p>

                    <div>
                        <Label
                            htmlFor="confirm-password"
                            className="block text-sm font-medium mb-2"
                        >
                            Confirm Password <span className="text-destructive/60 ml-1">*</span>
                        </Label>
                        <Input
                            id="confirm-password"
                            type="password"
                            placeholder="Repeat your password"
                        />
                    </div>

                    <div className="pt-2">
                        {isSubmitting.step3 ? (
                            <Button
                                disabled
                                className="w-full sm:w-auto sm:min-w-32 flex justify-center mx-auto"
                            >
                                <Loader2 className="animate-spin" />
                                Reset Password
                            </Button>
                        ) : (
                            <Button
                                onClick={handleSubmitStep3}
                                className="w-full sm:w-auto sm:min-w-32 flex justify-center mx-auto"
                            >
                                Reset Password
                            </Button>
                        )}
                    </div>
                </div>
            </CardContent>
        );
    };

    return (
        <div className="h-screen w-screen px-2 md:px-4 flex items-center justify-center">
            <Card className="w-full max-w-lg mx-auto shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-md md:text-xl font-bold">
                        Recover Your Account
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm">
                        Enter your email → Verify your identity → Create new password
                    </CardDescription>
                </CardHeader>

                <div className="flex items-center justify-center px-4">
                    <StepWizard initialStep={1} transitions={custom}>
                        <Step1 />
                        <Step2 />
                        <Step3 />
                    </StepWizard>
                </div>

                <CardFooter className="flex justify-center pt-2">
                    <p className="text-center text-sm text-muted-foreground">
                        Remember your password?{" "}
                        <a
                            href="/accounts/login"
                            className="text-primary hover:underline underline-offset-4 transition-all duration-300 font-medium"
                        >
                            Back to Login
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
