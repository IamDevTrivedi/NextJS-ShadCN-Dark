'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
    const router = useRouter();

    return (
        <div className="container mx-auto py-10 px-4 space-y-8">
            {/* Header Section */}
            <header className="flex items-center">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mr-4"
                    aria-label="Go back"
                >
                    <ArrowLeft className="h-5 w-5" />
                </Button>

                <div className="flex-1 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last updated: May 15, 2025</p>
                </div>

                <div className="w-10" />
            </header>

            <Separator className="my-6" />

            <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-foreground leading-7">
                    At Talkasaurus, we value your privacy and are committed to protecting your
                    personal data. This Privacy Policy explains how we collect, use, and safeguard
                    your information when you use our service.
                </p>
            </div>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Data Collection and Usage</CardTitle>
                    <CardDescription>How we use your chat history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <h3 className="text-lg font-semibold">Chat History</h3>
                    <p className="text-foreground leading-7">
                        Talkasaurus uses your chat history <strong>only</strong> to improve your
                        individual chat experience. This allows us to provide more relevant and
                        personalized responses based on your previous interactions.
                    </p>

                    <h3 className="text-lg font-semibold">No Third-Party Sharing</h3>
                    <p className="text-foreground leading-7">
                        We do not sell, rent, or otherwise share your personal data with third
                        parties for their marketing purposes. Your conversations remain private and
                        are not used for analytics or advertising purposes.
                    </p>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Data Protection</CardTitle>
                    <CardDescription>How we protect your information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-foreground leading-7">
                        We implement appropriate technical and organizational measures to protect
                        your personal data against unauthorized or unlawful processing, accidental
                        loss, destruction, or damage.
                    </p>

                    <h3 className="text-lg font-semibold">Data Retention</h3>
                    <p className="text-foreground leading-7">
                        We retain your chat history only for as long as necessary to fulfill the
                        purposes outlined in this Privacy Policy. You can request deletion of your
                        data at any time.
                    </p>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Your Rights</CardTitle>
                    <CardDescription>Understanding your data privacy rights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-foreground leading-7">
                        Depending on your location, you may have the following rights regarding your
                        personal data:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-foreground">
                        <li>Right to access your personal data</li>
                        <li>Right to rectification of inaccurate data</li>
                        <li>Right to erasure ("right to be forgotten")</li>
                        <li>Right to restrict processing</li>
                        <li>Right to data portability</li>
                        <li>Right to object to processing</li>
                    </ul>

                    <p className="text-foreground leading-7">
                        To exercise any of these rights, please contact us using the information
                        provided in the Contact Page.
                    </p>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Cookies and Tracking</CardTitle>
                    <CardDescription>
                        Our approach to cookies and similar technologies
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground leading-7">
                        We use only essential cookies that are necessary for the functioning of our
                        service. We do not use tracking cookies or similar technologies for
                        marketing or analytics purposes.
                    </p>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground leading-7">
                        We may update this Privacy Policy from time to time. We will notify you of
                        any changes by posting the new Privacy Policy on this page and updating the
                        "Last updated" date at the top of this page.
                    </p>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>For any legal issues, kindly Contact us.</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button size={'lg'}>
                        <Link href={'/contact'}>Contant Us</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
