"use client";

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
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Page() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreed: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const isValidPassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    };

    const canSubmit = () => {
        return (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.password &&
            formData.confirmPassword &&
            formData.agreed &&
            formData.password === formData.confirmPassword &&
            isValidPassword(formData.password)
        );
    };

    const Why = () => {
        const { firstName, lastName, email, password, confirmPassword, agreed } = formData;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            toast("Please fill all the required fields.", {
                dismissible: true,
                closeButton: true,
                type: "warning",
            });
            return;
        }

        if (password !== confirmPassword) {
            toast("Passwords do not match.", {
                dismissible: true,
                closeButton: true,
                type: "error",
            });
            return;
        }

        if (!agreed) {
            toast("You must agree to the terms and conditions.", {
                dismissible: true,
                type: "info",
                closeButton: true,
            });
            return;
        }

        toast("Form submitted successfully!", {
            dismissible: true,
            type: "success",
            closeButton: true,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast("Registration Successfull", {
                description: "Verification OTP will be sent to your Email id",
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
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                </Button>
            );
        }

        if (canSubmit()) {
            return (
                <Button size="lg" type="submit">
                    Create Account
                </Button>
            );
        }

        return (
            <span onClick={Why}>
                <Button disabled size="lg">
                    Create Account
                </Button>
            </span>
        );
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center px-4">
            <Card className="text-center w-full max-w-xl shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Join Talkasauras</CardTitle>
                    <CardDescription>
                        Create your account and start enjoying seamless conversations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit}>
                        <div className="grid w-full gap-4">
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="flex flex-col space-y-1.5 w-full">
                                    <Label htmlFor="reg-fname">
                                        First Name <span className="text-destructive/60">*</span>
                                    </Label>
                                    <Input
                                        id="reg-fname"
                                        placeholder="Bruce"
                                        value={formData.firstName}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                firstName: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5 w-full">
                                    <Label htmlFor="reg-lname">
                                        Last Name
                                        <span className="text-destructive/60">*</span>
                                    </Label>
                                    <Input
                                        id="reg-lname"
                                        placeholder="Wayne"
                                        value={formData.lastName}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                lastName: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>

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
                                <Label htmlFor="reg-password">
                                    Password
                                    <span className="text-destructive/60">*</span>
                                </Label>
                                <Input
                                    id="reg-password"
                                    type="password"
                                    placeholder="Create a secure password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <p className="text-xs text-left text-muted-foreground">
                                Password must be at least 8 characters long and contain at least one
                                uppercase letter, one lowercase letter, one number, and one special
                                character
                            </p>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="reg-Cpassword">
                                    Confirm Password
                                    <span className="text-destructive/60">*</span>
                                </Label>
                                <Input
                                    id="reg-Cpassword"
                                    type="password"
                                    placeholder="Repeat your password"
                                    value={formData.confirmPassword}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="flex items-center space-x-2 text-left">
                                <Checkbox
                                    id="terms"
                                    checked={formData.agreed}
                                    onCheckedChange={(checked) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            agreed: checked === true,
                                        }))
                                    }
                                />

                                <Label
                                    htmlFor="terms"
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I agree to the{" "}
                                    <a
                                        href="/terms-of-services"
                                        className="hover:text-primary hover:underline underline-offset-2 transition-all duration-200"
                                        target="_blank"
                                    >
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="/privacy-policy"
                                        className="hover:text-primary hover:underline underline-offset-2 transition-all duration-200"
                                        target="_blank"
                                    >
                                        Privacy Policy
                                    </a>
                                    .
                                </Label>
                                <span className="text-destructive/60">*</span>
                            </div>

                            <div className="pt-4">
                                <SubmitButton />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
