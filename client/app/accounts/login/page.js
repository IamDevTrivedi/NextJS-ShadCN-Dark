"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const isValidPassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    };

    const canSubmit = () => {
        return formData.email && formData.password && isValidPassword(formData.password);
    };

    const Why = () => {
        const { email, password } = formData;

        if (!email || !password) {
            toast("Please fill all the required fields.", {
                dismissible: true,
                closeButton: true,
                type: "warning",
            });
            return;
        }

        if (!isValidPassword(password)) {
            toast("Invalid Password Format", {
                dismissible: true,
                closeButton: true,
                type: "error",
            });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast("Login Successful", {
                description: "Welcome back to Talkasauras!",
                dismissible: true,
                type: "success",
                closeButton: true,
            });

            setIsSubmitting(false);
        }, 1500);
    };

    const SubmitButton = () => {
        if (isSubmitting) {
            return (
                <Button disabled size="lg">
                    <Loader2 className="animate-spin" />
                    Login
                </Button>
            );
        }

        if (canSubmit()) {
            return (
                <Button size="lg" type="submit">
                    Login
                </Button>
            );
        }

        return (
            <span onClick={Why}>
                <Button disabled size="lg">
                    Login
                </Button>
            </span>
        );
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center px-4">
            <Card className="text-center w-full max-w-xl shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Welcome to Talkasauras</CardTitle>
                    <CardDescription>
                        Login to your account to continue your conversations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit}>
                        <div className="grid w-full gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">
                                    Email Address
                                    <span className="text-destructive/60">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">
                                    Password
                                    <span className="text-destructive/60">*</span>
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <a
                                    href="accounts/forgot-password"
                                    className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-2 transition-all duration-200"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <div className="pt-4">
                                <SubmitButton />
                            </div>

                            <div className="text-sm text-muted-foreground">
                                Don't have an account?{" "}
                                <Link
                                    href="/accounts/register"
                                    className="hover:text-primary hover:underline underline-offset-2 transition-all duration-200"
                                >
                                    Create an account
                                </Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
