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
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function AccountRecoveryPage() {
    return (
        <div className="h-screen my-15 w-full flex items-center justify-center">
            <Card className="w-full max-w-lg mx-auto shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-md md:text-xl font-bold">
                        Recover Your Account
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm">
                        Enter your email → Verify your identity → Create new password
                    </CardDescription>
                </CardHeader>

                {/* Email Section */}
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center">
                            Email Address <span className="text-destructive ml-1">*</span>
                        </Label>
                        <div className="gap-2 flex md:flex-row">
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="flex-1"
                            />
                            <Button>Send OTP</Button>
                        </div>
                    </div>
                </CardContent>

                <Separator className="max-w-md mx-auto" />

                {/* OTP Section */}
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="otp" className="flex items-center">
                            Enter OTP <span className="text-destructive ml-1">*</span>
                        </Label>
                        <div className="flex justify-center mb-2">
                            <InputOTP maxLength={6}>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                </InputOTPGroup>
                                <InputOTPGroup>
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>
                        <div className="flex justify-center mt-2">
                            <Button>Verify OTP</Button>
                        </div>
                    </div>
                </CardContent>

                <Separator className="max-w-md mx-auto" />

                {/* Password Section */}
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="password" className="flex items-center">
                            Password <span className="text-destructive ml-1">*</span>
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Create a secure password"
                        />
                    </div>

                    <p className="text-xs text-center text-muted-foreground">
                        Password must be at least 8 characters long and contain at least one
                        uppercase letter, one lowercase letter, one number, and one special
                        character
                    </p>

                    <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="flex items-center">
                            Confirm Password <span className="text-destructive ml-1">*</span>
                        </Label>
                        <Input
                            id="confirm-password"
                            type="password"
                            placeholder="Repeat your password"
                        />
                    </div>

                    <div className="flex justify-center mt-4">
                        <Button>Reset Password</Button>
                    </div>
                </CardContent>

                <CardFooter className="flex justify-center pt-2">
                    <p className="text-center text-sm text-muted-foreground">
                        Remember your password?{" "}
                        <a
                            href="/accounts/login"
                            className="text-primary hover:underline font-medium"
                        >
                            Back to Login
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
