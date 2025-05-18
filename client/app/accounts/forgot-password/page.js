import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card";
import React from "react";

export default function page() {
    return (
        <div className="h-screen max-w-4xl mx-auto flex items-center justify-center">
            <Card className={"w-full flex items-center justify-center mx-auto"}>
                <CardHeader className={"w-full"}>
                    <CardTitle>Recover Your Account </CardTitle>
                    <CardDescription>
                        {"enter your email -> verfiy you -> enter new password"}
                    </CardDescription>
                </CardHeader>

                <CardContent></CardContent>

                <CardFooter></CardFooter>
            </Card>
        </div>
    );
}
